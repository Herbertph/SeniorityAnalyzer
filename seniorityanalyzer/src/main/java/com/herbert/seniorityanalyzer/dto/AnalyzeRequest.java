package com.herbert.seniorityanalyzer.dto;

import jakarta.validation.constraints.NotBlank;

public class AnalyzeRequest {
    @NotBlank
    private String repoUrl;

    public String getRepoUrl() {
        return repoUrl;
    }

    public void setRepoUrl(String repoUrl) {
        this.repoUrl = repoUrl;
    }
}
