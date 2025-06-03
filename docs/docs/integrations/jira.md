---
sidebar_position: 3
---

# JIRA Integration

The Engineering AI Agent integrates with JIRA to streamline task management, track progress, and maintain alignment between development activities and project requirements.

## Overview

The JIRA integration enables AI agents to:
- Create and update tickets (issues, stories, epics, etc.)
- Transition tickets through workflow states
- Link related tickets together
- Add comments and updates to tickets
- Query and filter tickets based on various criteria

## Setup Instructions

### Prerequisites

- JIRA Cloud or Server instance
- Account with appropriate permissions (create issues, transition workflows)
- API token for authentication

### Creating a JIRA API Token

1. Log in to your Atlassian account
2. Go to [Account Settings > Security > API tokens](https://id.atlassian.com/manage/api-tokens)
3. Click "Create API token"
4. Give your token a name (e.g., "Engineering AI Agent")
5. Copy the API token value

### Installation

1. Add the JIRA credentials to your `.env` file:
```
JIRA_API_TOKEN=your_jira_api_token
JIRA_EMAIL=your_atlassian_email
JIRA_URL=https://your-instance.atlassian.net
```

2. Configure the JIRA integration in your `config.yaml`:
```yaml
integrations:
  jira:
    enabled: true
    url: "https://your-instance.atlassian.net"
    project_keys:
      - "PROJ"
    default_issue_type: "Story"
    default_priority: "Medium"
    workflows:
      development:
        open: "To Do"
        in_progress: "In Progress"
        in_review: "In Review"
        complete: "Done"
      qa:
        open: "To Do"
        in_progress: "Testing"
        in_review: "Bug Found"
        complete: "Verified"
    fields:
      story_points: "customfield_10016"
      epic_link: "customfield_10014"
```

## Usage

### Issue Management

The AI agents manage JIRA issues according to their roles:

#### RD (Research & Development)

Updates issue status as development progresses:
- `Open → In Progress`: When implementation begins
- `In Progress → In Review`: When PR is opened
- `In Review → Complete`: After PR approval
- `Complete → Closed`: After PR is merged

#### PM (Project Management)

Creates and manages issues:
- Creates epics for large features
- Breaks down epics into stories
- Sets appropriate fields (priority, story points, etc.)
- Assigns issues to team members

### Issue Fields

The agent populates various issue fields:
- Summary: Clear, concise description of the task
- Description: Detailed information including:
  - Background/context
  - Requirements
  - Implementation guidance
  - Acceptance criteria
- Priority: Task importance (P1, P2, etc.)
- Story Points: Estimation of effort
- Labels: Categories or tags for filtering

### Comments and Updates

The agent adds comments to issues for:
- Status updates
- Implementation details
- Questions or clarifications
- Links to relevant resources

Example comment formats:
```
✅ Implementation started:
- Creating new authentication controller
- Setting up OAuth provider configuration
- Adding unit tests for login flow
```

### Issue Linking

The agent establishes relationships between issues:
- Parent/child relationships for epics and stories
- Dependencies between related issues
- Links to relevant documentation or design issues

## Advanced Features

### Custom Fields

The agent can work with custom JIRA fields if specified in the configuration:
```yaml
integrations:
  jira:
    # ...existing config...
    custom_fields:
      team: "customfield_10052"
      release_version: "customfield_10073"
      test_coverage: "customfield_10088"
```

### JQL Queries

The agent can perform complex JQL (JIRA Query Language) queries to find relevant issues:
```
project = PROJ AND assignee = currentUser() AND status = "In Progress"
```

### Automation Rules

The agent can interact with JIRA automation rules:
- Trigger automation by setting specific field values
- Respond to automated events and notifications
- Add comments that include automation rule keywords

## Troubleshooting

### Common Issues

1. **Authentication failures**:
   - Verify API token, email, and JIRA URL are correct
   - Ensure the account has necessary permissions
   - Check if the API token has expired

2. **Missing fields or invalid transitions**:
   - Confirm field IDs are correct (these vary by JIRA instance)
   - Verify transition names match your JIRA workflow
   - Check project and issue type configurations

3. **Rate limiting**:
   - JIRA API has rate limits; implement appropriate backoff strategies
   - Batch updates when possible to reduce API calls

### Getting Help

If you encounter issues with the JIRA integration, check:
- Application logs for detailed error messages
- JIRA API documentation for current API versions
- Your JIRA instance configuration to verify fields and workflows
