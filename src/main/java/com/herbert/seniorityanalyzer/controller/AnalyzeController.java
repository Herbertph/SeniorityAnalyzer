package com.herbert.seniorityanalyzer.controller;

import com.herbert.seniorityanalyzer.ai.AiEvaluationService;
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
    private final AiEvaluationService aiEvaluationService;

    public AnalyzeController(
            GitHubSignalService signalService,
            ScoringService scoringService,
            AiEvaluationService aiEvaluationService
    ) {
        this.signalService = signalService;
        this.scoringService = scoringService;
        this.aiEvaluationService = aiEvaluationService;
    }

    @PostMapping
    public AnalyzeResponse analyze(@RequestBody AnalyzeRequest request) {

        if (request.getRepoUrl() == null ||
                !request.getRepoUrl().startsWith("https://github.com/")) {
            throw new IllegalArgumentException("Invalid GitHub repository URL");
        }

        GitHubRepo repo = GitHubRepoParser.parse(request.getRepoUrl());

        Map<String, Object> signals = signalService.extractSignals(repo);

        ScoreResult result = scoringService.calculate(signals);

        String aiSummary = aiEvaluationService.generateSummary(result);

        return new AnalyzeResponse(
                result.finalScore(),
                result.level(),
                aiSummary,
                result.architecture(),
                result.testing(),
                result.infrastructure(),
                result.documentation()
        );
    }
}
