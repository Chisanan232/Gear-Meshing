---
sidebar_position: 3
---

# Project Management (PM)

The Project Management (PM) role in Engineering AI Agent focuses on efficiently organizing requirements, breaking down tasks, and ensuring proper task management throughout the project lifecycle.

:::info Version Support
The PM role is fully supported in v0.1.0.
:::

## Capabilities

### Requirement Analysis

The PM agent performs detailed requirement analysis:

- Deeply analyzes business requirements to understand their essence
- Extracts critical functionality points from specifications
- Identifies dependencies between requirements
- Communicates with stakeholders via Slack to clarify requirements
- Documents requirements in a structured format

### Task Breakdown

One of the PM agent's key responsibilities is breaking down complex requirements:

- Splits large requirements into smaller, manageable tasks
- Creates hierarchical task structures (epics → stories → tasks → subtasks)
- Ensures each task is small enough to be implemented efficiently
- Maintains traceability between tasks and original requirements
- Prioritizes tasks based on dependencies and business value

### Task Management

The PM agent creates and manages task tickets in JIRA or ClickUp:

- Creates detailed task tickets with:
  - Clear, descriptive titles
  - Comprehensive task summaries 
  - Implementation details and guidance
  - Acceptance criteria
  - Information about potential side effects or considerations
- Assigns tasks to appropriate team members
- Sets appropriate due dates and priority levels
- Tags tickets with relevant labels for categorization and filtering

## Usage Examples

### Creating Tasks from a Requirement

To request the PM agent to analyze and break down a requirement via Slack:

```
@engineering-agent pm analyze requirement "Implement user authentication system with social login"
```

### Creating a Task Directly

To request the PM agent to create a specific task:

```
@engineering-agent pm create task "Implement password reset functionality" for @team-member
```

### Generating a Sprint Plan

To ask the PM agent to help with sprint planning:

```
@engineering-agent pm plan sprint PROJ-SPRINT5 with 3 team members and 2 week duration
```

## Configuration

Configure PM-specific settings in your `config.yaml`:

```yaml
roles:
  pm:
    enabled: true
    name: "Project Manager"
    settings:
      default_task_type: "story"
      default_priority: "medium"
      default_team_members:
        - "username1"
        - "username2"
      task_sizing:
        small: 1-2 days
        medium: 3-5 days
        large: 5-10 days
      jira_settings:
        default_project: "PROJ"
        default_issue_type: "Story"
      clickup_settings:
        default_list_id: "list-id-here"
        default_tag_ids: []
```

## Integration Points

The PM role integrates with:

- **Slack**: For communication with stakeholders and team members
- **JIRA**: For creating and managing tasks and epics
- **ClickUp**: Alternative to JIRA for task management
