package com.herbert.seniorityanalyzer.service;

import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class ScoringService {

    public ScoreResult calculate(Map<String, Object> signals) {

        int architecture = scoreArchitecture(signals);
        int testing = scoreTesting(signals);
        int infrastructure = scoreInfrastructure(signals);
        int documentation = scoreDocumentation(signals);

        int finalScore = (int) (
                architecture * 0.30 +
                        testing * 0.25 +
                        infrastructure * 0.25 +
                        documentation * 0.20
        );

        String level = classify(finalScore);

        return new ScoreResult(
                architecture,
                testing,
                infrastructure,
                documentation,
                finalScore,
                level
        );
    }

    private int scoreArchitecture(Map<String, Object> signals) {
        Map<String, Integer> languages =
                (Map<String, Integer>) signals.get("languages");

        int languageCount = languages.size();

        if (languageCount >= 5) return 80;
        if (languageCount >= 3) return 60;
        if (languageCount >= 2) return 40;
        return 20;
    }

    private int scoreTesting(Map<String, Object> signals) {
        // MVP: placeholder consciente
        return 20;
    }

    private int scoreInfrastructure(Map<String, Object> signals) {
        Map<String, Integer> languages =
                (Map<String, Integer>) signals.get("languages");

        boolean hasDocker =
                languages.containsKey("Dockerfile") ||
                        languages.containsKey("Shell");

        return hasDocker ? 70 : 30;
    }

    private int scoreDocumentation(Map<String, Object> signals) {
        boolean hasDescription = (boolean) signals.get("hasDescription");
        return hasDescription ? 60 : 20;
    }

    private String classify(int score) {
        if (score >= 70) return "Senior-level";
        if (score >= 40) return "Engineer-level";
        return "Junior-level";
    }
}
