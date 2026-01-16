package com.herbert.seniorityanalyzer.dto;

public class AnalyzeResponse {

    private int score;
    private String level;
    private String summary;

    private int architectureScore;
    private int testingScore;
    private int infrastructureScore;
    private int documentationScore;

    public AnalyzeResponse(
            int score,
            String level,
            String summary,
            int architectureScore,
            int testingScore,
            int infrastructureScore,
            int documentationScore
    ) {
        this.score = score;
        this.level = level;
        this.summary = summary;
        this.architectureScore = architectureScore;
        this.testingScore = testingScore;
        this.infrastructureScore = infrastructureScore;
        this.documentationScore = documentationScore;
    }

    public int getScore() { return score; }
    public String getLevel() { return level; }
    public String getSummary() { return summary; }

    public int getArchitectureScore() { return architectureScore; }
    public int getTestingScore() { return testingScore; }
    public int getInfrastructureScore() { return infrastructureScore; }
    public int getDocumentationScore() { return documentationScore; }
}
