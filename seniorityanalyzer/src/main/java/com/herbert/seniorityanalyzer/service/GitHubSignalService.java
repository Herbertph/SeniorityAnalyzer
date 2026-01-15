package com.herbert.seniorityanalyzer.service;

import com.herbert.seniorityanalyzer.github.GitHubRepo;
import com.herbert.seniorityanalyzer.github.GitHubService;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class GitHubSignalService {

    private final GitHubService gitHubService;

    public GitHubSignalService(GitHubService gitHubService) {
        this.gitHubService = gitHubService;
    }

    public Map<String, Object> extractSignals(GitHubRepo repo) {
        Map<String, Object> signals = new HashMap<>();

        Map<String, Integer> languages = gitHubService.getLanguages(repo);
        Map<String, Object> repoInfo = gitHubService.getRepositoryInfo(repo);

        signals.put("languages", languages);
        signals.put("hasDescription", repoInfo.get("description") != null);
        signals.put("stars", repoInfo.get("stargazers_count"));
        signals.put("forks", repoInfo.get("forks_count"));

        return signals;
    }
}
