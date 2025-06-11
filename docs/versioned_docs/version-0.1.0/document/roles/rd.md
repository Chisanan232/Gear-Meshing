---
sidebar_position: 1
---

# Research & Development (RD)

The Research & Development (RD) role in Engineering AI Agent represents the core development capabilities, covering the full software development lifecycle from requirement analysis to code implementation and review.

:::info Version Support
The RD role is fully supported in v0.1.0.
:::

## Capabilities

### Requirement Analysis

The RD agent can analyze requirements using a spec-by-example methodology:

- Parse and understand feature specifications
- Break down complex requirements into technical tasks
- Communicate with stakeholders via Slack to clarify requirements
- Identify potential technical challenges and dependencies

### Task Management

The agent can manage development tickets through their lifecycle in JIRA or ClickUp:

- State transitions:
  - **Open → In progress**: When the agent starts implementing a task
  - **In progress → In review**: When implementation is complete and a PR is opened
  - **In review → Complete**: When the PR is approved by reviewers
  - **Complete → Close**: When the PR is merged

- Updates ticket status automatically based on actions taken
- Adds implementation details to tickets

### Test-Driven Development

The agent follows TDD principles to ensure code quality:

- Writes unit tests before implementation
- Ensures tests cover all expected functionality
- Verifies that all tests pass before submitting a PR
- Maintains or improves code coverage metrics

### Software Development

Core development capabilities include:

- **Writing Code**: Implementing features according to requirements
- **Building & Running Code**: Executing code to verify functionality
- **Debugging**: Identifying and fixing errors and issues
- **Version Control**: Using Git for managing code changes

### Version Control Workflow

The agent follows a structured Git workflow:

- **Branching**: Creates feature branches from main/master
- **Committing**: Follows best practices for commit messages:
  - One logical change per commit
  - Descriptive commit messages
  - References ticket ID in commit message
- **Pull Requests**: Creates and manages GitHub pull requests, including:
  - PR title and description
  - Reviewer assignments
  - Appropriate labels
  - Draft status when needed

### Pull Request Management

The agent handles the full PR lifecycle:

- Creates PRs with detailed descriptions of changes
- Responds to review comments
- Makes requested changes
- Analyzes and addresses code coverage reports
- Fixes issues identified in static analysis

### Knowledge Research

For complex tasks or proof-of-concepts, the agent can:

- Perform web searches for relevant information
- Collect and organize research findings
- Implement features based on research results
- Document findings and approaches

## Usage Examples

### Assigning a Task to RD Agent

To assign a development task to the RD agent via Slack:

```
@engineering-agent rd implement feature XYZ from ticket PROJ-123
```

### Requesting Code Review

To ask the RD agent to review code:

```
@engineering-agent rd review PR #45
```

### Requesting Research

To request the RD agent to research a topic:

```
@engineering-agent rd research "best practices for implementing WebSockets in Python"
```

## Configuration

Configure RD-specific settings in your `config.yaml`:

```yaml
roles:
  rd:
    enabled: true
    name: "Research & Development"
    settings:
      default_programming_languages:
        - "python"
        - "typescript"
      testing_framework_preferences:
        python: "pytest"
        typescript: "jest"
      code_style:
        python: "black"
        typescript: "prettier"
      default_reviewers:
        - "github-username-1"
        - "github-username-2"
```

## Integration Points

The RD role integrates with:

- **Slack**: For communication and task notifications
- **GitHub**: For code management and pull requests
- **JIRA/ClickUp**: For task tracking and management

    </>
  );
})()}</div>
