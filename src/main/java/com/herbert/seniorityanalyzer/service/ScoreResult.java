package com.herbert.seniorityanalyzer.service;

public record ScoreResult(
        int architecture,
        int testing,
        int infrastructure,
        int documentation,
        int finalScore,
        String level
) {}
