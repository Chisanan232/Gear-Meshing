/**
 * Custom remark plugin to fix MDX compilation issues
 * 
 * This plugin helps prevent the "Unexpected `FunctionDeclaration` in code" errors
 * by ensuring code blocks are properly interpreted as examples rather than
 * executable code.
 */
const visit = require('unist-util-visit');

module.exports = function remarkFixMdx() {
  return (tree) => {
    // Visit all code blocks in the markdown
    visit(tree, 'code', (node) => {
      // Make sure all code blocks have a language specified
      if (!node.lang) {
        node.lang = 'text';
      }
      
      // If it's JavaScript-like code, specifically handle it
      if (['js', 'javascript', 'jsx', 'ts', 'typescript', 'tsx'].includes(node.lang)) {
        // Add a special meta tag to indicate this is an example, not executable code
        if (!node.meta) {
          node.meta = 'example';
        } else if (!node.meta.includes('example')) {
          node.meta += ' example';
        }
      }
    });
    
    return tree;
  };
};
