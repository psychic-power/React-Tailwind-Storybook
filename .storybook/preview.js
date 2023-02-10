import { DEFAULT_THEME, withTailwindTheme } from './withTailwindTheme.decorator';
import '../src/index.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#F9FAFB;',
      },
      {
        name: 'dark',
        value: '#0E121A;',
      },
    ],
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    toolbar: {
      icon: 'paintbrush',
      // Array of plain string values or MenuItem shape
      items: [
        { value: 'light', title: 'Light', left: '🌞'},
        { value: 'dark', title: 'Dark', left: '🌛'},
      ],
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#00aced',
      },
      {
        name: 'dark',
        value: '#3b5998',
      },
    ],
  },
};

export const decorators = [withTailwindTheme];