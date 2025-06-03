---
sidebar_position: 1
---

# Slack Integration

The Engineering AI Agent integrates with Slack to enable communication between users and the AI agents, supporting natural language interactions and task management.

## Overview

The Slack integration serves as a primary communication channel for users to:
- Assign tasks to AI agents
- Receive status updates and notifications
- Ask questions and get assistance
- Collaborate with AI agents on engineering tasks

## Setup Instructions

### Prerequisites

- Admin access to a Slack workspace
- Slack Bot token with appropriate permissions

### Creating a Slack App

1. Go to [Slack API Apps page](https://api.slack.com/apps)
2. Click "Create New App"
3. Choose "From scratch"
4. Name your app "Engineering AI Agent" and select your workspace
5. Click "Create App"

### Bot Configuration

1. In the left sidebar, go to "OAuth & Permissions"
2. Scroll down to "Bot Token Scopes" and add the following permissions:
   - `channels:history`
   - `channels:read`
   - `chat:write`
   - `reactions:read`
   - `reactions:write`
   - `users:read`

3. Scroll up and click "Install to Workspace"
4. Copy the "Bot User OAuth Token" (starts with `xoxb-`)

### Installation

1. Add the Slack token to your `.env` file:
```
SLACK_API_TOKEN=xoxb-your-token-here
```

2. Configure the Slack integration in your `config.yaml`:
```yaml
integrations:
  slack:
    enabled: true
    workspace_id: "your_workspace_id"
    channels:
      - "#engineering"
      - "#project-discussion"
    bot_name: "engineering-agent"
    notify_on_events:
      - "task_assigned"
      - "pr_created"
      - "build_failed"
```

## Usage

### Basic Commands

Users can interact with the agent using mentions:

```
@engineering-agent hello
```

### Role-Specific Commands

To direct a command to a specific role:

```
@engineering-agent rd implement feature XYZ from ticket PROJ-123
@engineering-agent pm analyze requirement "User authentication system"
```

### Command Structure

Commands generally follow this structure:
```
@engineering-agent [role] [action] [parameters]
```

Common actions include:
- `help`: Show available commands
- `status`: Check status of tasks
- `assign`: Assign a task
- `analyze`: Analyze requirements or issues
- `implement`: Begin implementation of a feature

### Emoji Reactions

Users can guide agent actions by adding emoji reactions to messages:
- ✅: Approve a suggestion or action
- ❌: Reject a suggestion or action
- 🔄: Request more information or alternatives
- 📝: Request the agent to document the current conversation or decision

## Troubleshooting

### Common Issues

1. **Bot not responding**:
   - Ensure the bot is invited to the channel
   - Verify the Slack token is correctly configured
   - Check the agent logs for connection errors

2. **Missing permissions**:
   - Review the bot scopes and ensure all required permissions are granted
   - Reinstall the app to the workspace if you've added permissions

3. **Rate limiting**:
   - The Slack API has rate limits; check the agent logs for rate limit errors
   - Consider implementing rate limiting or batching for frequent operations

### Getting Help

If you encounter issues with the Slack integration, check:
- Application logs for error messages
- Slack API documentation for up-to-date API changes
- GitHub issues for known problems and solutions
