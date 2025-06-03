import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    'getting-started',
    {
      type: 'category',
      label: 'Agent Roles',
      collapsed: false,
      items: [
        'roles/rd',
        'roles/qa',
        'roles/pm',
        'roles/sa',
        'roles/sd',
        'roles/sre',
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      items: [
        'integrations/slack',
        'integrations/github',
        'integrations/jira',
        'integrations/clickup',
      ],
    },
    {
      type: 'category',
      label: 'Workflows',
      items: [
        'workflows/requirements',
        'workflows/development',
        'workflows/testing',
        'workflows/deployment',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'api/overview',
        'api/endpoints',
      ],
    },
    'roadmap',
    'contributing',
  ],
};

export default sidebars;
