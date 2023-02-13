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
    default: 'Surface-Light-Base',
    values: [
      {
        name: 'Surface-Light-Base',
        value: '#F9FAFB;',
      },
      {
        name: 'Surface-Light-Overlay',
        value: '#FFFFFF;',
      },
      {
        name: 'Surface-Light-Alt',
        value: '#E5E7EB;',
      },
      {
        name: 'Surface-Dark-Base',
        value: '#0E121A;',
      },
      {
        name: 'Surface-Dark-Overlay',
        value: '#111928;',
      },
      {
        name: 'Surface-Dark-Alt',
        value: '#1F2A37;',
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
};

export const decorators = [withTailwindTheme];