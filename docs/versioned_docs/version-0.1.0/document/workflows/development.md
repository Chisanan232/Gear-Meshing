---
sidebar_position: 2
---

# Development Workflow

This document describes the end-to-end development workflow in the Engineering AI Agent system, focusing on how the RD (Research & Development) agent implements features, fixes bugs, and manages code.

## Overview

The development workflow encompasses several stages:
1. Task analysis and planning
2. Test-driven development
3. Implementation and debugging
4. Code review and refinement
5. Integration and deployment

## Workflow Stages

### 1. Task Analysis and Planning

**Primary Role**: RD (Research & Development)

Before coding begins, the RD agent:
- Reviews the task description and requirements
- Breaks down complex tasks into smaller steps
- Identifies dependencies and potential challenges
- Plans the implementation approach
- Determines which files need to be created or modified

Example planning output:
```
Task Analysis: Implement user authentication API
Steps:
1. Create authentication controller
2. Implement JWT token generation
3. Create user verification endpoints
4. Add password hashing utilities
5. Implement authentication middleware
6. Write unit tests for all components
```

### 2. Test-Driven Development

**Primary Role**: RD (Research & Development)

The RD agent follows TDD principles:
- Writes tests first that define expected behavior
- Ensures tests initially fail (Red)
- Implements code to make tests pass (Green)
- Refactors code while maintaining passing tests (Refactor)

Example test-first approach:
```python
# First, write the test
def test_user_login_with_valid_credentials():
    # Arrange
    user = create_test_user(username="testuser", password="Password123!")
    login_data = {"username": "testuser", "password": "Password123!"}
    
    # Act
    response = client.post("/api/auth/login", json=login_data)
    response_data = response.json()
    
    # Assert
    assert response.status_code == 200
    assert "access_token" in response_data
    assert "refresh_token" in response_data
```

### 3. Implementation and Debugging

**Primary Role**: RD (Research & Development)

The RD agent implements the feature:
- Creates new files or modifies existing ones
- Follows code style and project architecture
- Adds comprehensive docstrings and comments
- Makes logically separate commits for distinct changes

Implementation process:
1. Create branch from main/master
2. Implement tests and code iteratively
3. Debug any issues that arise
4. Ensure all tests pass
5. Commit changes with descriptive messages

Example Git workflow:
```bash
# Create a new branch for the feature
git checkout -b feature/AUTH-123-user-authentication

# Make changes and commit iteratively
git add gearmeshing_ai/auth/controller.py
git commit -m "feat(auth): create authentication controller (AUTH-123)"

git add tests/auth/test_controller.py
git commit -m "test(auth): add tests for authentication controller (AUTH-123)"

# Push branch to remote
git push origin feature/AUTH-123-user-authentication
```

### 4. Code Review and Refinement

**Primary Role**: RD (Research & Development)

Once implementation is complete:
- RD agent creates a pull request with detailed description
- The PR includes information about what was implemented and how
- Reviews feedback and makes requested changes
- Addresses code coverage and static analysis issues

Example pull request description:
```markdown
## User Authentication API

This PR implements the User Authentication API including:
- Login endpoint with JWT token generation
- Registration endpoint with email verification
- Password reset functionality
- Authentication middleware

### Changes Made
- Created new `AuthController` class
- Added JWT token utilities
- Implemented password hashing and verification
- Added middleware for protected routes
- Added unit tests for all new components

### Testing
- All unit tests passing
- Code coverage: 94%
- Manual testing performed for happy paths and edge cases

Resolves AUTH-123
```

### 5. Integration and Deployment

**Primary Role**: RD (Research & Development)

After the PR is approved:
- RD agent handles any merge conflicts
- Ensures CI pipeline passes
- Updates documentation if needed
- Coordinates with other team members for integration testing

## Git Workflow Details

The RD agent follows these git practices:

### Branch Naming

Format: `{type}/{ticket-id}-{short-description}`

Types:
- `feature/` - New functionality
- `bugfix/` - Bug fixes
- `hotfix/` - Critical fixes for production
- `refactor/` - Code improvements without new features
- `docs/` - Documentation changes

Example: `feature/AUTH-123-user-authentication`

### Commit Messages

Format: `{type}({scope}): {message} ({ticket-id})`

Types:
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Formatting changes
- `refactor` - Code restructuring
- `test` - Test additions or modifications
- `chore` - Maintenance tasks

Example: `feat(auth): implement JWT token generation (AUTH-123)`

### Pull Request Process

1. Create PR against main branch
2. Add comprehensive description
3. Link to relevant tickets
4. Assign reviewers
5. Address feedback promptly
6. Squash commits if necessary before merging

## Best Practices

### Code Quality

- Follow project coding standards
- Write self-documenting code with clear naming
- Add comments for complex logic
- Keep methods and classes focused on single responsibility
- Achieve high test coverage

### Testing

- Write both unit and integration tests
- Test happy paths and edge cases
- Mock external dependencies
- Verify error handling
- Check performance for critical components

### Collaboration

- Update tickets with implementation details
- Ask for help when stuck
- Provide context in PR descriptions
- Respond to feedback constructively
- Document important decisions and approaches

## Example Workflow

1. **Task Receipt**:
   - RD agent assigned task "Implement user authentication"
   - Changes JIRA status to "In Progress"

2. **Implementation**:
   - Creates branch `feature/AUTH-123-user-authentication`
   - Writes tests for authentication functionality
   - Implements authentication controller and utilities
   - Commits changes with descriptive messages
   - Ensures all tests pass

3. **Pull Request**:
   - Creates PR with detailed description
   - Changes JIRA status to "In Review"
   - Assigns reviewers

4. **Review Process**:
   - Receives feedback on implementation
   - Makes requested changes
   - Addresses CI pipeline issues

5. **Completion**:
   - PR approved and merged
   - Changes JIRA status to "Complete"
   - Updates documentation if needed
