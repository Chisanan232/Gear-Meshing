---
sidebar_position: 2
---

# Getting Started

This guide will help you set up and start using the Engineering AI Agent.

## Prerequisites

Before you begin, ensure you have the following:

- Python 3.8 or higher installed
- Access to the services you want to integrate with:
  - Slack workspace with admin privileges
  - GitHub repository with admin access
  - JIRA or ClickUp account with appropriate permissions

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Chisanan232/Engineering-AI-Agent.git
cd Engineering-AI-Agent
```

2. Install dependencies:

```bash
pip install -e .
```

3. Configure your environment:

Create a `.env` file in the project root with the following variables:

```bash
# General Configuration
ENV=development

# Integration API Keys
SLACK_API_TOKEN=your_slack_api_token
GITHUB_API_TOKEN=your_github_api_token
JIRA_API_TOKEN=your_jira_api_token
JIRA_EMAIL=your_jira_email
CLICKUP_API_TOKEN=your_clickup_api_token

# LLM Configuration
LLM_API_KEY=your_llm_api_key
LLM_MODEL=gpt-4-turbo
```

## Configuration

### Role Configuration

You can configure which roles are active in your deployment by modifying the `config.yaml` file:

```yaml
roles:
  rd:
    enabled: true
    name: "Research & Development"
  pm:
    enabled: true
    name: "Project Manager"
  qa:
    enabled: false
    name: "Quality Assurance"
  sa:
    enabled: false
    name: "System Architect"
  sd:
    enabled: false
    name: "Software Developer"
  sre:
    enabled: false
    name: "Site Reliability Engineer"
```

### Integration Configuration

Configure your integrations in the same `config.yaml` file:

```yaml
integrations:
  slack:
    enabled: true
    workspace_id: "your_workspace_id"
    channels:
      - "#engineering"
      - "#project-discussion"
  
  github:
    enabled: true
    repositories:
      - "owner/repo-name"
  
  jira:
    enabled: true
    project_keys:
      - "PROJ"
  
  clickup:
    enabled: false
    workspace_id: "your_workspace_id"
    space_ids:
      - "your_space_id"
```

## Running the Agent

Start the Engineering AI Agent with:

```bash
python -m engineering_ai_agent run
```

This will start the agent service which will:
1. Connect to configured integrations
2. Begin monitoring for tasks and commands
3. Respond to tasks based on the roles you've enabled

## Verifying Installation

To verify that your agent is running correctly:

1. Send a message in one of your configured Slack channels mentioning the agent:
   ```
@engineering-agent hello
```

2. The agent should respond with an introduction message and available commands.

## Next Steps

- Learn more about the specific roles in the [Agent Roles](roles/rd) section
- Set up specific integrations by following our [Integrations](integrations/slack) guides
- Explore common [Workflows](workflows/requirements) that the agent can help with
