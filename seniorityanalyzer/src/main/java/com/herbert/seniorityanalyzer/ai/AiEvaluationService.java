package com.herbert.seniorityanalyzer.ai;

import com.herbert.seniorityanalyzer.service.ScoreResult;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.util.List;
import java.util.Map;

@Service
public class AiEvaluationService {

    private final RestClient restClient;
    private final String apiKey;

    public AiEvaluationService(
            @Value("${openai.api.key}") String apiKey
    ) {
        this.apiKey = apiKey;
        this.restClient = RestClient.builder()
                .baseUrl("https://api.openai.com/v1")
                .build();
    }

    public String generateSummary(ScoreResult score) {

        String prompt = """
        You are a senior software engineer reviewing a project.

        Architecture: %d
        Testing: %d
        Infrastructure: %d
        Documentation: %d

        Final score: %d (%s)

        Write a concise 2–3 sentence assessment explaining the technical maturity.
        """.formatted(
                score.architecture(),
                score.testing(),
                score.infrastructure(),
                score.documentation(),
                score.finalScore(),
                score.level()
        );

        Map<String, Object> requestBody = Map.of(
                "model", "gpt-4.1-mini",
                "messages", List.of(
                        Map.of(
                                "role", "user",
                                "content", prompt
                        )
                )
        );

        Map response = restClient.post()
                .uri("/chat/completions")
                .header("Authorization", "Bearer " + apiKey)
                .body(requestBody)
                .retrieve()
                .body(Map.class);

        return (String) ((Map)
                ((Map)
                        ((List) response.get("choices")).get(0))
                        .get("message"))
                .get("content");
    }
}
