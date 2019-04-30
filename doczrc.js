import * as path from 'path';
import { css } from 'styled-components';
import { defaultColors } from './docs/src/config/theme';

const modifyBundlerConfig = config => {
  config.resolve.alias = Object.assign({}, config.resolve.alias, {
    '@react-scrolly/core': path.resolve(__dirname, 'packages/core/src'),
    '@react-scrolly/scene': path.resolve(__dirname, 'packages/scene/src'),
    '@react-scrolly/plot': path.resolve(__dirname, 'packages/plot/src'),
    '@react-scrolly/trigger': path.resolve(__dirname, 'packages/trigger/src')
  });
  return config;
};

export default {
  title : 'React-Scrolly',
  typescript : true,
  htmlContext : {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://codemirror.net/theme/material.css'
        }
      ]
    }
  },
  // order of the menu
  menu: [
    'Introduction',
    'Scroll Tracking',
    'Pinning Sections',
    'Revealing Animations'
  ],
  modifyBundlerConfig,
  themeConfig : {
    // See: https://github.com/pedronauck/docz/tree/master/core/docz-theme-default
    mode: 'light',
    codemirrorTheme: 'material',
    showPlaygroundEditor: true, // always display the code in <Playground>
    colors: {
      primary: defaultColors.primary,
      background: defaultColors.background,
      text: defaultColors.text,
      blue: defaultColors.blue,
      sidebarBg: defaultColors.background,
      sidebarBorder: '#a3a4a5',
      border: '#a3a4a5',
      codeBg: defaultColors.white,
      codeColor: defaultColors.primary,
      theadColor: '#79878e'
    },
    styles: {
      playground: css`
        background: #ffffff;
      `,
    },
  }
};
