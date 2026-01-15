package com.herbert.seniorityanalyzer.controller;

import com.herbert.seniorityanalyzer.dto.AnalyzeRequest;
import com.herbert.seniorityanalyzer.dto.AnalyzeResponse;
import com.herbert.seniorityanalyzer.github.GitHubRepo;
import com.herbert.seniorityanalyzer.github.GitHubRepoParser;
import com.herbert.seniorityanalyzer.service.GitHubSignalService;
import com.herbert.seniorityanalyzer.service.ScoreResult;
import com.herbert.seniorityanalyzer.service.ScoringService;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/analyze")
public class AnalyzeController {

    private final GitHubSignalService signalService;
    private final ScoringService scoringService;

    public AnalyzeController(
            GitHubSignalService signalService,
            ScoringService scoringService
    ) {
        this.signalService = signalService;
        this.scoringService = scoringService;
    }

    @PostMapping
    public AnalyzeResponse analyze(@RequestBody AnalyzeRequest request) {

        GitHubRepo repo = GitHubRepoParser.parse(request.getRepoUrl());
        Map<String, Object> signals = signalService.extractSignals(repo);

        ScoreResult result = scoringService.calculate(signals);

        return new AnalyzeResponse(
                result.finalScore(),
                result.level(),
                "Architecture: " + result.architecture()
                        + ", Testing: " + result.testing()
                        + ", Infrastructure: " + result.infrastructure()
                        + ", Documentation: " + result.documentation()
        );
    }
}
