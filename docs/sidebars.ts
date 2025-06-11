import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.
 */
const sidebars: SidebarsConfig = {
  // Main documentation sidebar
  docs: [
    'document/intro',
    'document/getting-started',
    {
      type: 'category',
      label: 'Agent Roles',
      collapsed: false,
      items: [
        'document/roles/rd',
        'document/roles/qa',
        'document/roles/pm',
        'document/roles/sa',
        'document/roles/sd',
        'document/roles/sre',
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      items: [
        'document/integrations/slack',
        'document/integrations/github',
        'document/integrations/jira',
        'document/integrations/clickup',
      ],
    },
    {
      type: 'category',
      label: 'Workflows',
      items: [
        'document/workflows/requirements',
        'document/workflows/development',
        'document/workflows/testing',
        'document/workflows/deployment',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'document/api/overview',
        'document/api/endpoints',
      ],
    },
    'document/roadmap',
    'document/contributing',
  ],

  // Development documentation sidebar
  development: [
    'development/overview/index',
    {
      type: 'category',
      label: 'Overview',
      items: [
        'development/overview/architecture',
        'development/overview/design-patterns',
        'development/overview/tech-stack',
      ],
    },
    {
      type: 'category',
      label: 'AI Components',
      items: [
        'development/ai/overview',
        'development/ai/model-selection',
        'development/ai/prompt-engineering',
        'development/ai/fine-tuning',
        'development/ai/integration',
      ],
    },
    {
      type: 'category',
      label: 'Services',
      items: [
        'development/services/api-gateway',
        'development/services/llm-orchestrator', 
        'development/services/knowledge-base',
        'development/services/task-manager',
        'development/services/user-service',
        'development/services/role-services',
        'development/services/notification-service',
        'development/services/project-management-service',
        'development/services/code-analysis-service',
      ],
    },
    {
      type: 'category',
      label: 'Data',
      items: [
        'development/data/architecture',
        'development/data/schema',
        'development/data/persistence',
        'development/data/migrations',
        'development/data/validation',
        'development/data/analytics',
      ],
    },
    {
      type: 'category',
      label: 'Security',
      items: [
        'development/security/architecture',
        'development/security/authentication',
        'development/security/authorization',
        'development/security/data-protection',
        'development/security/audit-logging',
      ],
    },
    {
      type: 'category',
      label: 'Infrastructure',
      items: [
        'development/infrastructure/architecture',
        'development/infrastructure/configuration',
        'development/infrastructure/kubernetes',
        'development/infrastructure/monitoring',
        'development/infrastructure/ci-cd',
      ],
    },
    {
      type: 'category',
      label: 'Performance',
      items: [
        'development/performance/monitoring',
        'development/performance/optimization',
        'development/performance/scaling',
      ],
    },
    {
      type: 'category',
      label: 'Workflow',
      items: [
        'development/workflow/engine',
        'development/workflow/orchestration',
        'development/workflow/templates',
        'development/workflow/versioning',
      ],
    },
    {
      type: 'category',
      label: 'Testing',
      items: [
        'development/testing/strategy',
        'development/testing/frameworks',
        'development/testing/ai-testing',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: [
        'development/troubleshooting/error-handling',
        'development/troubleshooting/logging',
        'development/troubleshooting/debugging',
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      items: [
        'development/integrations/github',
        'development/integrations/slack',
        'development/integrations/jenkins',
        'development/integrations/confluence',
      ],
    },
  ],
};

export default sidebars;
