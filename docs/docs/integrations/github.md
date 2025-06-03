---
sidebar_position: 2
---

# GitHub Integration

The Engineering AI Agent integrates with GitHub to manage source code, handle version control tasks, and streamline the pull request workflow.

## Overview

The GitHub integration enables AI agents to:
- Access and modify source code
- Create and manage branches
- Commit changes with meaningful messages
- Open and manage pull requests
- Respond to code reviews

## Setup Instructions

### Prerequisites

- GitHub account with admin access to target repositories
- Personal Access Token (PAT) or GitHub App credentials

### Creating a GitHub PAT

1. Go to your GitHub account settings
2. Select "Developer settings" from the left sidebar
3. Click on "Personal access tokens" > "Tokens (classic)"
4. Click "Generate new token" > "Generate new token (classic)"
5. Give your token a descriptive name (e.g., "Engineering AI Agent")
6. Select the following scopes:
   - `repo` (Full control of private repositories)
   - `workflow` (Update GitHub Action workflows)
   - `read:org` (Read org and team membership)
7. Click "Generate token" and copy the token value

### Installation

1. Add the GitHub token to your `.env` file:
```
GITHUB_API_TOKEN=ghp_your_token_here
```

2. Configure the GitHub integration in your `config.yaml`:
```yaml
integrations:
  github:
    enabled: true
    repositories:
      - "owner/repo-name"
    default_branch: "main"
    default_reviewers:
      - "github-username-1"
      - "github-username-2"
    pr_template_path: ".github/PULL_REQUEST_TEMPLATE.md"
    commit_message_format: "{ticket}: {message}"
```

## Usage

### Branch Management

The agent follows these conventions for branch names:
- Feature branches: `feature/{ticket-id}-{short-description}`
- Bug fix branches: `bugfix/{ticket-id}-{short-description}`
- Hotfix branches: `hotfix/{ticket-id}-{short-description}`

### Commit Guidelines

The agent creates commits that:
- Follow conventional commit format (`type(scope): message`)
- Reference ticket IDs where applicable
- Include only related changes in a single commit
- Have descriptive messages explaining the change

Example commit messages:
```
feat(auth): implement Google OAuth login (PROJ-123)
fix(api): resolve race condition in data fetch (PROJ-456)
refactor(utils): simplify error handling functions
```

### Pull Request Workflow

When opening a pull request, the agent:
1. Creates a descriptive PR title
2. Generates a detailed description of changes
3. Links to relevant issues or tickets
4. Assigns appropriate reviewers
5. Adds relevant labels
6. Sets the PR as draft if work is in progress

### Review Response

The agent responds to PR reviews by:
- Acknowledging feedback comments
- Making requested changes
- Explaining implementation decisions
- Addressing merge conflicts
- Updating the PR with additional commits

## Advanced Features

### PR Templates

The agent can use custom PR templates if provided in the repository:

```markdown
## Description
{auto-generated description}

## Related Issues
- Resolves #{issue_number}

## Changes Made
{auto-generated list of changes}

## Testing
{auto-generated testing details}

## Screenshots
{if applicable}

## Checklist
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] No new warnings generated
```

### CI Integration

The agent monitors CI builds and takes appropriate actions:
- Addresses failing tests and lint errors
- Responds to code coverage reports
- Updates PR status based on CI results

## Troubleshooting

### Common Issues

1. **Authentication failures**:
   - Ensure the GitHub token has the required permissions
   - Check that the token hasn't expired
   - Verify the token is correctly set in the environment

2. **Rate limiting**:
   - GitHub API has rate limits; check agent logs for rate limit errors
   - Consider using a GitHub App instead of PAT for higher rate limits

3. **Repository access**:
   - Confirm the token has access to the specified repositories
   - Verify repository names are correctly specified in the configuration

### Getting Help

If you encounter issues with the GitHub integration, check:
- Application logs for error messages
- GitHub API documentation for up-to-date API changes
- GitHub status page for service disruptions
