# Seniority Analyzer

**Seniority Analyzer** is a backend-driven application that evaluates the **technical maturity (seniority level)** of a GitHub repository based on objective signals and AI-assisted analysis.

The goal is to provide a **clear, explainable, and human-readable assessment** of how mature a project is from a software engineering perspective.

---

## What does it do?

Given a public GitHub repository URL, the API:

1. Extracts **objective technical signals** from GitHub
2. Calculates a **deterministic technical score**
3. Uses **AI** to generate a concise, human-readable summary
4. Returns a **seniority level classification**

---

## How the analysis works

### 1. GitHub Signal Extraction
The system analyzes metadata such as:
- Programming languages used
- Repository structure
- Presence of documentation
- Infrastructure indicators (Docker, CI, etc.)
- Popularity and activity signals

> ⚠️ No source code is read or analyzed directly.

---

### 2. Deterministic Scoring
Each project is scored across four dimensions:

- **Architecture**
- **Testing**
- **Infrastructure**
- **Documentation**

These scores are combined into a final numerical score and mapped to a seniority level.

---

### 3. AI-Assisted Explanation
The AI does **not calculate the score**.

Instead, it:
- Receives the final scores
- Generates a short, professional explanation
- Avoids hallucination or subjective assumptions

This ensures **explainability and consistency**.

---

## Example Response

```json
{
  "score": 58,
  "level": "Mid-level",
  "summary": "The project demonstrates a solid architectural foundation with good infrastructure in place, indicating thoughtful design and scalability considerations. However, limited testing coverage and only moderate documentation suggest gaps in quality assurance and knowledge transfer."
}

```
## Tech Stack

### Backend
- **Java 21**
- **Spring Boot 4**
- **Maven**
- **Spring Web**
- **Spring Validation**

### Integrations
- **GitHub REST API**
- **OpenAI API** (via HTTP, no SDK dependency)

### Architecture
- **RESTful API**
- **Deterministic scoring + AI explanation**
- **Environment-based secret management**

---

## Security & Secrets
- No API keys are stored in the repository
- OpenAI API key is injected via environment variables
- Safe for public GitHub hosting

---

## Local Development

### Prerequisites
- **Java 21+**
- **Maven**
- **OpenAI API key**

##  Run Locally

Set the required environment variable:

```bash
export OPENAI_API_KEY=your_key_here
```
Start the application:

```bash
mvn spring-boot:run
```
## Test the API using curl or Postman:

```bash
curl -X POST http://localhost:8080/analyze \
  -H "Content-Type: application/json" \
  -d '{"repoUrl":"https://github.com/spring-projects/spring-boot"}'
```