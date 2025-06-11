# Engineering AI Agent Documentation

This documentation site is built using [Docusaurus v3.8.0](https://docusaurus.io/), a modern static website generator developed by Facebook. This README provides information for developers who want to work with, maintain, or extend the documentation.

## Documentation Structure

The documentation is organized into the following major sections:

- **Introduction**: Overview and key concepts of the Engineering AI Agent
- **Getting Started**: Installation, configuration, and quick start guides
- **Agent Roles**: Documentation for different agent roles (RD, PM, QA, SA, SD, SRE)
- **Integrations**: Documentation for platform integrations (Slack, GitHub, JIRA, ClickUp)
- **Workflows**: Detailed workflow documentation (Requirements, Development, Testing, Deployment)
- **API Reference**: Detailed API documentation with endpoints and usage examples
- **Roadmap**: Project roadmap from v0.2.0 to v1.0.0
- **Contributing**: Guidelines for contributing to the project

The Development section includes specialized documentation for:
- AI Components
- Services
- Data
- Security
- Infrastructure
- Performance
- Workflow
- Testing
- Troubleshooting
- Integrations

## Directory Structure

```
docs/
├── blog/                 # Blog posts
├── docs/                 # Documentation markdown files
│   ├── intro/            # Introduction documents
│   ├── getting-started/  # Getting started guides
│   ├── agent-roles/      # Agent roles documentation
│   ├── integrations/     # Integration documentation
│   ├── workflows/        # Workflow documentation
│   ├── development/      # Development documentation
│   ├── api-reference/    # API reference
│   ├── roadmap/          # Project roadmap
│   └── contributing/     # Contribution guidelines
├── src/                  # React source code
│   ├── components/       # React components
│   ├── css/              # CSS files
│   └── pages/            # Custom pages
├── static/               # Static files (images, etc.)
├── docusaurus.config.ts  # Docusaurus configuration
└── sidebars.ts           # Sidebar configuration
```

## Installation

```bash
# Install dependencies
pnpm install
```

## Local Development

```bash
# Start development server
pnpm start --no-open
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Content Guidelines

When creating or updating documentation:

1. **MDX Format**: Documentation uses MDX (Markdown + JSX). Avoid raw JavaScript functions in MDX files; they should be wrapped in code blocks.
2. **Sidebar Navigation**: Update `sidebars.ts` when adding new documents to ensure they appear in the navigation.
3. **Version Control**: Major documentation versions are managed through the versioning feature.
4. **Images**: Place images in the `static/img/` directory and reference them using relative paths.
5. **Components**: Use Docusaurus components like `Tabs`, `TabItem`, and `Admonitions` to enhance content presentation.

## Building & Testing

```bash
# Build the documentation
pnpm build

# Test the built site locally
pnpm serve --no-open
```

This builds the site and generates static content into the `build` directory, which can be served using any static content hosting service.

## Known Issues & Solutions

1. **MDX Compilation Errors**: If encountering MDX compilation failures:
   - Ensure no invalid MDX syntax (export statements, JSX components) in .md files
   - Check for duplicate plugin configurations in docusaurus.config.ts
   - Verify no duplicate .md and .mdx files with the same name exist
   - Use React 18.x for compatibility (React 19.x may cause issues)

2. **Versioning**: Versioning is handled through Docusaurus's versioning system. Create new versions with:
   ```bash
   pnpm docusaurus docs:version [version]
   ```

## Deployment

Using SSH:

```bash
USE_SSH=true pnpm deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> pnpm deploy
```

For GitHub Pages hosting, this command builds the website and pushes to the `gh-pages` branch.

## Custom Deployment

For deploying to other environments:

1. Build the documentation:
   ```bash
   pnpm build
   ```
2. Deploy the contents of the `build` directory to your hosting service.

## Contributing to Documentation

1. **Creating New Pages**: Create .md or .mdx files in the appropriate directory
2. **Adding to Navigation**: Update `sidebars.ts` to include new pages
3. **Style Guide**: Follow the established formatting and structure patterns
4. **Review Process**: Documentation PRs should be reviewed for technical accuracy and clarity

## Additional Resources

- [Docusaurus Documentation](https://docusaurus.io/docs)
- [MDX Documentation](https://mdxjs.com/docs/)
- [Markdown Guide](https://www.markdownguide.org/)
