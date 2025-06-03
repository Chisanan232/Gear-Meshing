/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  developmentSidebar: [
    {
      type: 'category',
      label: 'Overview',
      items: [
        'overview/index',
        'overview/architecture',
        'overview/system-design',
        'overview/tech-stack',
        'overview/design-patterns',
      ],
    },
    {
      type: 'category',
      label: 'Core Services',
      items: [
        'services/api-gateway',
        'services/role-services',
        'services/llm-orchestrator',
        'services/task-manager',
        'services/knowledge-base',
        'services/knowledge-base-service',
        'services/event-bus',
        'services/user-service',
        'services/notification-service',
        'services/code-analysis-service',
        'services/project-management-service',
      ],
    },
    {
      type: 'category',
      label: 'Data Architecture',
      items: [
        'data/architecture',
        'data/schema',
        'data/persistence',
        'data/migrations',
        'data/analytics',
        'data/validation',
      ],
    },
    {
      type: 'category',
      label: 'Integration Implementation',
      items: [
        'integrations/slack',
        'integrations/github',
        'integrations/jira',
        'integrations/confluence',
        'integrations/jenkins',
      ],
    },
    {
      type: 'category',
      label: 'AI Implementation',
      items: [
        'ai/overview',
        'ai/prompt-engineering',
        'ai/model-selection',
        'ai/fine-tuning',
        'ai/integration',
      ],
    },
    {
      type: 'category',
      label: 'Infrastructure',
      items: [
        'infrastructure/architecture',
        'infrastructure/kubernetes',
        'infrastructure/ci-cd',
        'infrastructure/monitoring',
        'infrastructure/configuration',
      ],
    },
    {
      type: 'category',
      label: 'Testing',
      items: [
        'testing/strategy',
        'testing/frameworks',
        'testing/ai-testing',
      ],
    },
    {
      type: 'category',
      label: 'Workflow',
      items: [
        'workflow/engine',
        'workflow/templates',
        'workflow/orchestration',
        'workflow/versioning',
      ],
    },
    {
      type: 'category',
      label: 'Security',
      items: [
        'security/architecture',
        'security/authentication',
        'security/authorization',
        'security/data-protection',
        'security/audit-logging',
      ],
    },
    {
      type: 'category',
      label: 'Performance',
      items: [
        'performance/monitoring',
        'performance/optimization',
        'performance/scaling',
        'performance/benchmarking',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: [
        'troubleshooting/logging',
        'troubleshooting/debugging',
        'troubleshooting/error-handling',
      ],
    },
  ],
};

module.exports = sidebars;
