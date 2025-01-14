import { GlobalStyle } from './decorators/GlobalStyles';
import { ThemeProvider } from '@template/foundation';

export const decorators = [
  (Story) => {
    return (
      <ThemeProvider
      // theme={{
      //   colors: { B400: '#0AA2C0' },
      //   colorBackgroundButtonPrimary: 'red',
      // }}
      >
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    );
  },
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
