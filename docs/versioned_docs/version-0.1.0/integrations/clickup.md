---
sidebar_position: 4
---

# ClickUp Integration

The Engineering AI Agent integrates with ClickUp to manage tasks, track progress, and facilitate project management activities as an alternative to JIRA.

## Overview

The ClickUp integration allows AI agents to:
- Create and update tasks in ClickUp
- Move tasks through different statuses
- Organize tasks into lists, folders, and spaces
- Add comments and attachments to tasks
- Set custom fields, priorities, and tags

## Setup Instructions

### Prerequisites

- ClickUp account with admin access to your workspace
- API token with appropriate permissions

### Getting a ClickUp API Token

1. Log in to your ClickUp account
2. Go to your user settings (click your profile picture in the bottom left)
3. Select "Apps"
4. Under "API Token", click "Create" or copy your existing token

### Installation

1. Add the ClickUp API token to your `.env` file:
```
CLICKUP_API_TOKEN=your_clickup_api_token
```

2. Configure the ClickUp integration in your `config.yaml`:
```yaml
integrations:
  clickup:
    enabled: true
    workspace_id: "your_workspace_id"
    space_ids:
      - "your_space_id"
    default_list_id: "your_list_id"
    statuses:
      - name: "Open"
        color: "#d3d3d3"
      - name: "In Progress"
        color: "#4169e1"
      - name: "In Review"
        color: "#ffa500"
      - name: "Complete"
        color: "#32cd32"
      - name: "Closed"
        color: "#708090"
    default_priority: 3  # Normal priority
    tags:
      - "ai-managed"
      - "engineering"
```

## Usage

### Task Management

The AI agents manage ClickUp tasks according to their roles:

#### RD (Research & Development)

Updates task status as development progresses:
- `Open → In Progress`: When implementation begins
- `In Progress → In Review`: When PR is opened
- `In Review → Complete`: After PR approval
- `Complete → Closed`: After PR is merged

#### PM (Project Management)

Creates and manages tasks:
- Creates task hierarchies (parent tasks and subtasks)
- Sets appropriate fields (priority, time estimates, etc.)
- Assigns tasks to team members
- Organizes tasks into appropriate lists

### Task Fields

The agent populates various task fields:
- Name: Clear, concise description of the task
- Description: Detailed information in markdown format including:
  - Background/context
  - Requirements
  - Implementation guidance
  - Acceptance criteria
- Priority: Task importance (1-4, with 1 being highest)
- Time Estimate: Expected hours/days to complete
- Custom Fields: Project-specific information

### Comments and Updates

The agent adds comments to tasks for:
- Status updates
- Implementation details
- Questions or clarifications
- Links to relevant resources

Example comment formats:
```
📝 Implementation progress:
- Database schema updated
- API endpoint created
- Unit tests: 8/10 passing
```

### Task Relationships

The agent establishes relationships between tasks:
- Parent/child relationships for task hierarchies
- Dependencies between related tasks
- Links to GitHub PRs and commits

## Advanced Features

### Custom Fields

The agent can work with custom ClickUp fields if specified in the configuration:
```yaml
integrations:
  clickup:
    # ...existing config...
    custom_fields:
      story_points:
        id: "0123abc"
        type: "number"
      environment:
        id: "4567def"
        type: "dropdown"
```

### Templates

The agent can leverage ClickUp task templates for consistent task creation:
```yaml
integrations:
  clickup:
    # ...existing config...
    templates:
      feature_request: "template_12345"
      bug_report: "template_67890"
```

### Automations

The agent can interact with ClickUp automations:
- Trigger automations by setting specific field values
- Respond to automated notifications
- Create tasks that match automation triggers

## Finding Your ClickUp IDs

To find the necessary IDs for configuration:

1. **Workspace ID**:
   - Open your ClickUp workspace
   - The URL will show `https://app.clickup.com/{workspace_id}/`

2. **Space ID**:
   - Navigate to a space
   - The URL will show `https://app.clickup.com/{workspace_id}/s/{space_id}/`

3. **List ID**:
   - Open a list
   - The URL will show `https://app.clickup.com/{workspace_id}/v/l/li/{list_id}`

4. **Custom Field IDs**:
   - For these, you'll need to use the ClickUp API to list custom fields

## Troubleshooting

### Common Issues

1. **Authentication failures**:
   - Verify the API token is correct and hasn't expired
   - Ensure the token has access to the specified workspace

2. **Missing fields or invalid statuses**:
   - Confirm status names match your ClickUp workspace configuration
   - Verify custom field IDs are correct

3. **Rate limiting**:
   - ClickUp API has rate limits; implement appropriate backoff strategies
   - Batch updates when possible to reduce API calls

### Getting Help

If you encounter issues with the ClickUp integration, check:
- Application logs for detailed error messages
- ClickUp API documentation for current endpoints
- Your ClickUp workspace configuration for status and field details
