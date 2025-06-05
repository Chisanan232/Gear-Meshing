---
sidebar_position: 1
---

# API Overview

The Engineering AI Agent provides a comprehensive API that allows for programmatic interaction with the system, enabling integration with custom tools and workflows.

## Introduction

The Engineering AI Agent API enables developers to:
- Programmatically control agent roles and behaviors
- Integrate with external systems not covered by built-in integrations
- Automate repetitive tasks and workflows
- Extend the platform with custom functionality
- Retrieve information and analytics about agent activities

## API Architecture

The API follows REST principles:
- JSON format for requests and responses
- Standard HTTP methods (GET, POST, PUT, DELETE)
- Authentication via API keys or OAuth 2.0
- Consistent error handling patterns
- Versioned endpoints for backward compatibility

## Authentication

### API Keys

For simple integrations, use API key authentication:

```bash
curl -X GET https://api.engineering-ai-agent.com/v1/agents \
  -H "X-API-Key: your_api_key_here"
```

API keys can be generated and managed through the admin dashboard.

### OAuth 2.0

For applications acting on behalf of users, OAuth 2.0 is supported:

```bash
# 1. Get authorization code
# (user is redirected to authorization page)

# 2. Exchange code for token
curl -X POST https://api.engineering-ai-agent.com/oauth/token \
  -d "grant_type=authorization_code" \
  -d "code=authorization_code_from_step_1" \
  -d "client_id=your_client_id" \
  -d "client_secret=your_client_secret" \
  -d "redirect_uri=your_redirect_uri"

# 3. Use access token
curl -X GET https://api.engineering-ai-agent.com/v1/agents \
  -H "Authorization: Bearer your_access_token"
```

## API Versioning

The API uses versioning in the URL path to ensure backward compatibility:

```
https://api.engineering-ai-agent.com/v1/...  # Current stable version
https://api.engineering-ai-agent.com/v2/...  # Next generation (when available)
```

When breaking changes are necessary, a new API version is released, and previous versions remain supported for a defined deprecation period.

## Rate Limiting

The API implements rate limiting to ensure fair usage and system stability:

- Basic tier: 60 requests per minute
- Standard tier: 300 requests per minute
- Enterprise tier: 1000+ requests per minute (customizable)

Rate limit information is included in response headers:

```
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 45
X-RateLimit-Reset: 1612824258
```

## Error Handling

The API uses standard HTTP status codes and returns detailed error information:

```json
{
  "error": {
    "code": "invalid_input",
    "message": "The task description cannot be empty",
    "details": {
      "field": "description",
      "constraint": "required"
    },
    "request_id": "req_123abc456def"
  }
}
```

Common error codes include:
- `400 Bad Request`: Invalid input parameters
- `401 Unauthorized`: Missing or invalid authentication
- `403 Forbidden`: Insufficient permissions
- `404 Not Found`: Resource not found
- `429 Too Many Requests`: Rate limit exceeded
- `500 Internal Server Error`: Server-side error

## Pagination

For endpoints that return collections, pagination is supported with consistent parameters:

```
GET /v1/tasks?limit=20&after=task_123abc
```

Pagination metadata is included in the response:

```json
{
  "data": [...],
  "pagination": {
    "total_count": 157,
    "limit": 20,
    "has_more": true,
    "next_cursor": "task_456def"
  }
}
```

## Webhooks

The API supports webhooks for real-time event notifications:

1. Register a webhook URL:
```json
POST /v1/webhooks
{
  "url": "https://your-server.com/webhook",
  "events": ["task.created", "task.completed", "pr.opened"],
  "secret": "your_webhook_secret"
}
```

2. Receive event notifications:
```json
// Payload sent to your webhook URL
{
  "event_type": "task.completed",
  "event_id": "evt_123abc",
  "timestamp": "2023-05-01T12:34:56Z",
  "data": {
    "task_id": "task_789xyz",
    "title": "Implement login API",
    "completed_by": "rd-agent",
    "completion_time": "2023-05-01T12:34:50Z"
  }
}
```

3. Verify webhook signatures to ensure authenticity:
```
X-EAA-Signature: sha256=...
```

## API Client Libraries

Official client libraries are available for popular programming languages:

- Python: `pip install engineering-ai-agent-client`
- JavaScript/TypeScript: `npm install engineering-ai-agent-client`
- Go: `go get github.com/engineering-ai-agent/client-go`
- Others: Community-maintained clients

## Available Endpoints

The API endpoints are organized by resource type:

- `/v1/agents`: Agent management and assignment
- `/v1/tasks`: Task creation and management
- `/v1/workflows`: Workflow execution and status
- `/v1/integrations`: Integration configuration
- `/v1/analytics`: Usage statistics and reporting

See the [Endpoints](endpoints) section for detailed documentation of each endpoint.

## Support and Feedback

For API support and feedback:
- GitHub Issues: Report bugs or request features
- Documentation: Comprehensive guides and examples
- Status Page: Check API availability and incidents
