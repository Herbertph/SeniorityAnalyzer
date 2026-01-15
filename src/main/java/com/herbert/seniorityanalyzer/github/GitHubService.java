package com.herbert.seniorityanalyzer.github;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;


import java.util.Map;

@Service
public class GitHubService {

    private final RestClient restClient;

    public GitHubService(RestClient restClient) {
        this.restClient = restClient;
    }

    public Map<String, Object> getRepositoryInfo(GitHubRepo repo) {
        return restClient.get()
                .uri("/repos/{owner}/{repo}", repo.owner(), repo.repo())
                .retrieve()
                .body(Map.class);
    }

    public Map<String, Integer> getLanguages(GitHubRepo repo) {
        return restClient.get()
                .uri("/repos/{owner}/{repo}/languages", repo.owner(), repo.repo())
                .retrieve()
                .body(Map.class);
    }
}
