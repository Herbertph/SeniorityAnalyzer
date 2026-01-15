package com.herbert.seniorityanalyzer.dto;

import jakarta.validation.constraints.NotBlank;

public class AnalyzeResponse {

    private int score;
    private String level;
    private String summary;

    public AnalyzeResponse(int score, String level, String summary) {
        this.score = score;
        this.level = level;
        this.summary = summary;
    }

    public int getScore() {
        return score;
    }

    public String getLevel() {
        return level;
    }

    public String getSummary() {
        return summary;
    }
}
