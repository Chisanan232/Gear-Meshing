---
sidebar_position: 2
title: Testing Frameworks
---

# Testing Frameworks

## Overview

The Testing Frameworks document describes the specific testing frameworks, libraries, and tools used throughout the Engineering AI Agent development lifecycle. This document provides guidance on framework selection, configuration, best practices, and integration with CI/CD pipelines.

## Unit Testing Frameworks

### Python Testing

The system uses pytest as the primary unit testing framework for Python services:

```python
# Example of a pytest fixture
@pytest.fixture
def knowledge_base_client():
    """Create a mock knowledge base client for testing"""
    client = mock.Mock(spec=KnowledgeBaseClient)
    client.search.return_value = ["Mock result 1", "Mock result 2"]
    return client

def test_knowledge_retrieval(knowledge_base_client):
    """Test that knowledge retrieval works correctly"""
    retriever = KnowledgeRetriever(client=knowledge_base_client)
    results = retriever.get_relevant_knowledge("test query")
    
    assert len(results) == 2
    knowledge_base_client.search.assert_called_once_with("test query")
```

### JavaScript Testing

For frontend components and Node.js services, Jest is used:

```javascript
// Example of a Jest test
describe('UserPreferences', () => {
  test('should load user preferences correctly', async () => {
    const mockResponse = { theme: 'dark', notifications: true };
    fetch.mockResponseOnce(JSON.stringify(mockResponse));
    
    const preferences = await UserPreferences.load('user123');
    
    expect(preferences.theme).toBe('dark');
    expect(preferences.notifications).toBe(true);
  });
});
```

## API Testing

### RESTful API Testing

FastAPI endpoints are tested using pytest with the TestClient:

```python
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_get_user_profile():
    """Test retrieving a user profile"""
    response = client.get("/api/v1/users/profile/123", headers={"Authorization": "Bearer test_token"})
    assert response.status_code == 200
    assert response.json()["id"] == "123"
```

### GraphQL API Testing

GraphQL endpoints are tested with pytest and the gql client:

```python
def test_execute_graphql_query(gql_client):
    """Test executing a GraphQL query"""
    query = """
        query GetUser($userId: ID!) {
            user(id: $userId) {
                id
                name
                email
            }
        }
    """
    variables = {"userId": "123"}
    result = gql_client.execute(query, variable_values=variables)
    
    assert "errors" not in result
    assert result["data"]["user"]["id"] == "123"
```

## Integration Testing

### Service Integration Testing

Service integration is tested using Docker Compose for local service orchestration:

```yaml
# docker-compose-test.yml snippet
version: '3.8'
services:
  api-gateway:
    image: eng-ai-agent/api-gateway:test
    ports:
      - "8000:8000"
    environment:
      - ROLE_SERVICE_URL=http://role-service:8001
      - TASK_MANAGER_URL=http://task-manager:8002
    depends_on:
      - role-service
      - task-manager

  role-service:
    image: eng-ai-agent/role-service:test
    ports:
      - "8001:8001"
    environment:
      - DB_CONNECTION_STRING=postgresql://test_user:test_pass@db:5432/test_db

  task-manager:
    image: eng-ai-agent/task-manager:test
    ports:
      - "8002:8002"
    environment:
      - DB_CONNECTION_STRING=postgresql://test_user:test_pass@db:5432/test_db
```

Python integration tests leverage the pytest-docker-compose plugin.

## AI/ML Testing Frameworks

### Model Evaluation

Custom evaluation frameworks measure AI model performance:

```python
def evaluate_model_response(model, prompt, expected_patterns, unwanted_patterns):
    """Evaluate model response against expected patterns"""
    response = model.generate(prompt)
    
    # Check for expected patterns
    pattern_matches = 0
    for pattern in expected_patterns:
        if re.search(pattern, response):
            pattern_matches += 1
    
    # Check for unwanted patterns
    unwanted_matches = 0
    for pattern in unwanted_patterns:
        if re.search(pattern, response):
            unwanted_matches += 1
    
    score = pattern_matches / len(expected_patterns) * (1 - unwanted_matches / len(unwanted_patterns))
    return score, response
```

### Prompt Testing

A specialized framework tests prompt effectiveness across different scenarios.

## E2E Testing Framework

Robot Framework handles end-to-end testing with a behavior-driven approach:

```robotframework
*** Settings ***
Documentation     E2E tests for the code review workflow
Library           SeleniumLibrary
Test Setup        Open Browser To Login Page
Test Teardown     Close Browser

*** Variables ***
${LOGIN URL}      https://app.engineering-ai-agent.com/login
${BROWSER}        chrome

*** Test Cases ***
Valid Code Review Request
    Login As Valid User    dev@example.com    password123
    Navigate To Code Review Page
    Submit Code Review Request    https://github.com/org/repo/pull/123
    Wait Until Element Is Visible    id:review-status
    Element Should Contain    id:review-status    In Progress
```

## Performance Testing

Locust is used for performance and load testing:

```python
from locust import HttpUser, task, between

class EngineeringAIUser(HttpUser):
    wait_time = between(1, 5)
    
    def on_start(self):
        # Login
        self.client.post("/login", json={
            "username": "test_user",
            "password": "test_password"
        })
    
    @task(3)
    def view_dashboard(self):
        self.client.get("/dashboard")
    
    @task(1)
    def create_task(self):
        self.client.post("/tasks", json={
            "title": "Test task",
            "description": "Created during load test",
            "priority": "medium"
        })
```

## Test Data Management

### Fixtures

Test data fixtures are stored in JSON/YAML format and versioned with the codebase:

```yaml
# fixtures/test_repositories.yaml
- id: repo1
  name: engineering-ai-agent
  owner: org
  url: https://github.com/org/engineering-ai-agent
  primary_branch: main
  languages: 
    - python
    - typescript
  permissions:
    admin: true
    push: true
    pull: true
```

### Data Factories

Factory pattern generates test data programmatically:

```python
class UserFactory:
    """Factory for creating test users"""
    
    @staticmethod
    def create(role="developer", custom_attributes=None):
        """Create a test user with the given role"""
        user_id = f"user_{uuid.uuid4().hex[:8]}"
        attributes = {
            "id": user_id,
            "name": f"Test {role.capitalize()}",
            "email": f"{user_id}@example.com",
            "role": role,
            "created_at": datetime.utcnow().isoformat(),
            "preferences": {
                "theme": "light",
                "notifications": True
            }
        }
        
        if custom_attributes:
            attributes.update(custom_attributes)
            
        return attributes
```

## CI/CD Integration

Test execution is integrated into the CI/CD pipeline using GitHub Actions:

```yaml
# .github/workflows/test.yml snippet
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Set up Python
        uses: actions/setup-python@v2
        with:
          python-version: '3.10'
      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip
          pip install -r requirements-dev.txt
      - name: Run unit tests
        run: pytest tests/unit --cov=app --cov-report=xml
      - name: Run integration tests
        run: pytest tests/integration
      - name: Upload coverage
        uses: codecov/codecov-action@v2
```

## Detailed Design and Specifications

This section will cover detailed specifications for test framework configurations, custom test harnesses, reporting integrations, and implementation guidelines for various test types.
