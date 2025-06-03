---
sidebar_position: 2
---

# API Endpoints

This document provides details on the key API endpoints available in the Engineering AI Agent system.

## Agents API

Endpoints for managing and interacting with AI agents.

### List Agents

```
GET /v1/agents
```

Retrieves a list of available agents in the system.

**Query Parameters:**
- `role` (optional): Filter agents by role (rd, qa, pm, etc.)
- `status` (optional): Filter by agent status (active, idle, busy)
- `limit` (optional): Maximum number of results to return (default: 20)
- `offset` (optional): Number of items to skip (default: 0)

**Response:**
```json
{
  "data": [
    {
      "id": "agent_123abc",
      "name": "RD Agent 1",
      "role": "rd",
      "status": "active",
      "capabilities": ["python", "typescript", "react"],
      "created_at": "2025-01-15T08:30:00Z",
      "last_active": "2025-06-02T15:45:10Z"
    },
    {
      "id": "agent_456def",
      "name": "PM Agent 1",
      "role": "pm",
      "status": "idle",
      "capabilities": ["requirement_analysis", "task_management"],
      "created_at": "2025-02-20T10:15:00Z",
      "last_active": "2025-06-01T22:10:05Z"
    }
  ],
  "metadata": {
    "total": 5,
    "limit": 20,
    "offset": 0
  }
}
```

### Get Agent

```
GET /v1/agents/{agent_id}
```

Retrieves detailed information about a specific agent.

**Path Parameters:**
- `agent_id`: Unique identifier of the agent

**Response:**
```json
{
  "id": "agent_123abc",
  "name": "RD Agent 1",
  "role": "rd",
  "status": "active",
  "capabilities": ["python", "typescript", "react"],
  "created_at": "2025-01-15T08:30:00Z",
  "last_active": "2025-06-02T15:45:10Z",
  "current_tasks": [
    {
      "id": "task_789xyz",
      "title": "Implement login API"
    }
  ],
  "stats": {
    "tasks_completed": 157,
    "avg_completion_time": "3.5h",
    "code_quality_score": 92
  }
}
```

## Tasks API

Endpoints for managing tasks assigned to agents.

### Create Task

```
POST /v1/tasks
```

Creates a new task in the system.

**Request Body:**
```json
{
  "title": "Implement user authentication",
  "description": "Create user authentication functionality with OAuth support",
  "priority": "high",
  "due_date": "2025-06-10T00:00:00Z",
  "assigned_role": "rd",
  "tags": ["auth", "security"],
  "metadata": {
    "ticket_id": "PROJ-123",
    "repository": "frontend-app"
  }
}
```

**Response:**
```json
{
  "id": "task_101abc",
  "title": "Implement user authentication",
  "description": "Create user authentication functionality with OAuth support",
  "status": "created",
  "priority": "high",
  "due_date": "2025-06-10T00:00:00Z",
  "assigned_role": "rd",
  "assigned_agent": "agent_123abc",
  "created_at": "2025-06-02T15:50:00Z",
  "tags": ["auth", "security"],
  "metadata": {
    "ticket_id": "PROJ-123",
    "repository": "frontend-app"
  }
}
```

### List Tasks

```
GET /v1/tasks
```

Retrieves a list of tasks in the system.

**Query Parameters:**
- `status` (optional): Filter by task status
- `assigned_role` (optional): Filter by assigned role
- `assigned_agent` (optional): Filter by assigned agent ID
- `limit` (optional): Maximum number of results (default: 20)
- `offset` (optional): Number of items to skip (default: 0)

**Response:**
```json
{
  "data": [
    {
      "id": "task_101abc",
      "title": "Implement user authentication",
      "status": "in_progress",
      "priority": "high",
      "assigned_role": "rd",
      "assigned_agent": "agent_123abc",
      "created_at": "2025-06-02T15:50:00Z",
      "due_date": "2025-06-10T00:00:00Z"
    },
    {
      "id": "task_102def",
      "title": "Design database schema",
      "status": "open",
      "priority": "medium",
      "assigned_role": "rd",
      "assigned_agent": null,
      "created_at": "2025-06-02T16:10:00Z",
      "due_date": "2025-06-15T00:00:00Z"
    }
  ],
  "metadata": {
    "total": 24,
    "limit": 20,
    "offset": 0
  }
}
```

### Get Task

```
GET /v1/tasks/{task_id}
```

Retrieves detailed information about a specific task.

**Path Parameters:**
- `task_id`: Unique identifier of the task

**Response:**
```json
{
  "id": "task_101abc",
  "title": "Implement user authentication",
  "description": "Create user authentication functionality with OAuth support",
  "status": "in_progress",
  "priority": "high",
  "due_date": "2025-06-10T00:00:00Z",
  "assigned_role": "rd",
  "assigned_agent": "agent_123abc",
  "created_at": "2025-06-02T15:50:00Z",
  "updated_at": "2025-06-02T16:30:00Z",
  "tags": ["auth", "security"],
  "metadata": {
    "ticket_id": "PROJ-123",
    "repository": "frontend-app"
  },
  "progress": {
    "percent_complete": 35,
    "estimate_remaining": "4h",
    "milestones": [
      {
        "name": "Setup project structure",
        "completed": true
      },
      {
        "name": "Implement OAuth providers",
        "completed": false
      }
    ]
  },
  "activity": [
    {
      "type": "status_change",
      "from": "created",
      "to": "in_progress",
      "timestamp": "2025-06-02T16:00:00Z"
    },
    {
      "type": "comment",
      "content": "Started implementation of authentication service",
      "timestamp": "2025-06-02T16:30:00Z"
    }
  ]
}
```

## Workflows API

Endpoints for managing predefined workflows.

### List Workflows

```
GET /v1/workflows
```

Retrieves a list of available workflows.

**Response:**
```json
{
  "data": [
    {
      "id": "workflow_1",
      "name": "Feature Development",
      "description": "Complete workflow for implementing a new feature",
      "steps": 5,
      "estimated_duration": "3-5 days"
    },
    {
      "id": "workflow_2",
      "name": "Bug Fix",
      "description": "Process for analyzing and fixing reported bugs",
      "steps": 3,
      "estimated_duration": "1-2 days"
    }
  ]
}
```

### Start Workflow

```
POST /v1/workflows/{workflow_id}/start
```

Initiates a workflow with specified parameters.

**Path Parameters:**
- `workflow_id`: Unique identifier of the workflow

**Request Body:**
```json
{
  "name": "Implement Login Feature",
  "parameters": {
    "feature_description": "Allow users to login with email/password and OAuth",
    "priority": "high",
    "due_date": "2025-06-15T00:00:00Z",
    "repository": "frontend-app",
    "ticket_id": "PROJ-123"
  }
}
```

**Response:**
```json
{
  "workflow_run_id": "run_123abc",
  "name": "Implement Login Feature",
  "workflow_id": "workflow_1",
  "status": "started",
  "started_at": "2025-06-02T17:00:00Z",
  "estimated_completion": "2025-06-07T17:00:00Z",
  "current_step": {
    "id": "step_1",
    "name": "Requirements Analysis",
    "assignee": "agent_456def",
    "status": "in_progress"
  },
  "next_steps": [
    {
      "id": "step_2",
      "name": "Task Breakdown",
      "assignee": null,
      "status": "pending"
    }
  ]
}
```

## Integration API

Endpoints for managing third-party integrations.

### List Integrations

```
GET /v1/integrations
```

Retrieves a list of configured integrations.

**Response:**
```json
{
  "data": [
    {
      "id": "int_slack_1",
      "type": "slack",
      "status": "active",
      "workspace_name": "Engineering Team",
      "connected_at": "2025-05-10T09:30:00Z",
      "channels": [
        "#engineering",
        "#project-alpha"
      ]
    },
    {
      "id": "int_github_1",
      "type": "github",
      "status": "active",
      "org_name": "Chisanan232",
      "connected_at": "2025-05-10T10:15:00Z",
      "repositories": [
        "Engineering-AI-Agent",
        "frontend-app"
      ]
    }
  ]
}
```

## Analytics API

Endpoints for retrieving analytics and performance data.

### Get Performance Metrics

```
GET /v1/analytics/performance
```

Retrieves performance metrics for agents and tasks.

**Query Parameters:**
- `period` (optional): Time period for data (day, week, month, quarter, year)
- `role` (optional): Filter by agent role

**Response:**
```json
{
  "period": "month",
  "date_range": {
    "start": "2025-05-01T00:00:00Z",
    "end": "2025-05-31T23:59:59Z"
  },
  "tasks": {
    "total": 245,
    "completed": 213,
    "in_progress": 25,
    "overdue": 7,
    "completion_rate": 0.87,
    "avg_completion_time": "14.3h"
  },
  "agents": {
    "rd": {
      "tasks_completed": 132,
      "avg_completion_time": "16.5h",
      "code_quality": 90
    },
    "pm": {
      "tasks_completed": 81,
      "avg_completion_time": "10.2h",
      "requirements_clarity": 88
    }
  }
}
```

## Error Codes

Common error responses:

| Status Code | Error Code | Description |
|------------|------------|-------------|
| 400 | `invalid_request` | The request was malformed or had invalid parameters |
| 401 | `unauthorized` | Authentication is required or the provided credentials are invalid |
| 403 | `forbidden` | The authenticated user does not have permission for this action |
| 404 | `not_found` | The requested resource does not exist |
| 409 | `conflict` | The request conflicts with the current state of the resource |
| 429 | `rate_limited` | Too many requests in a given amount of time |
| 500 | `server_error` | An unexpected server error occurred |

## Pagination

Most list endpoints support pagination with the following parameters:

- `limit`: Number of items to return (default: 20, max: 100)
- `offset`: Number of items to skip (default: 0)

Response metadata includes:
```json
"metadata": {
  "total": 245,
  "limit": 20,
  "offset": 0
}
```

## Filtering and Sorting

Many endpoints support filtering and sorting:

- Filtering: `?field=value&another_field=value`
- Sorting: `?sort=field` (ascending) or `?sort=-field` (descending)

Example: `/v1/tasks?status=in_progress&sort=-created_at`
