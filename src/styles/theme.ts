import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    yellow: {
      "500": '#FFBA08',
    },
    gray: {
      '1000': '#000000',
      '900': '#1C1401',
      '500': '#47585B',
      '250': '#999999',
      '100': '#DADADA',
      '50': '#F5F8FA',
      '0': '#FFFFFF'
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        background: 'gray.50',
        color: 'gray.500'
      }
    }
  }
});
