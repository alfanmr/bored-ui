import * as React from 'react';
// Removed type import as it caused issues: import { DocsThemeConfig } from 'nextra-theme-docs';

const configObject = { // Define the config object
  logo: <span>BoredUI Docs</span>, // Replace with actual logo later
  project: {
    link: 'https://github.com/alfanmr/bored-ui', // TODO: Update with actual repo link
  },
  // chat: {
  //   link: 'https://discord.com', // Optional Discord link
  // },
  docsRepositoryBase: 'https://github.com/alfanmr/bored-ui/tree/main/apps/docs', // TODO: Update
  footer: {
    text: 'BoredUI Documentation',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – BoredUI'
    }
  },
  // Configure sidebar behavior
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 1,
  },
  // Add more theme configurations here
};

export default configObject; // Export the correct object
