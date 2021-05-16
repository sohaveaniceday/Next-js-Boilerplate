import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';

import '../styles/main.css';

// eslint-disable-next-line react/jsx-props-no-spreading
const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </ChakraProvider>
);
export default MyApp;
