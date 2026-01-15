package com.herbert.seniorityanalyzer.github;

public class GitHubRepoParser {

    public static GitHubRepo parse(String repoUrl) {
        try {
            String cleaned = repoUrl
                    .replace("https://github.com/", "")
                    .replace("http://github.com/", "");

            String[] parts = cleaned.split("/");

            if (parts.length < 2) {
                throw new IllegalArgumentException("Invalid GitHub repository URL");
            }

            return new GitHubRepo(parts[0], parts[1]);
        } catch (Exception e) {
            throw new IllegalArgumentException("Invalid GitHub repository URL");
        }
    }
}
