package com.herbert.seniorityanalyzer.controller;

import com.herbert.seniorityanalyzer.dto.AnalyzeRequest;
import com.herbert.seniorityanalyzer.dto.AnalyzeResponse;
import com.herbert.seniorityanalyzer.github.GitHubRepo;
import com.herbert.seniorityanalyzer.github.GitHubRepoParser;
import com.herbert.seniorityanalyzer.service.GitHubSignalService;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/analyze")
public class AnalyzeController {

    private final GitHubSignalService signalService;

    public AnalyzeController(GitHubSignalService signalService) {
        this.signalService = signalService;
    }

    @PostMapping
    public AnalyzeResponse analyze(@RequestBody AnalyzeRequest request) {

        GitHubRepo repo = GitHubRepoParser.parse(request.getRepoUrl());
        Map<String, Object> signals = signalService.extractSignals(repo);

        return new AnalyzeResponse(
                10,
                "Signals extracted",
                signals.toString()
        );
    }
}
