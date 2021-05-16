import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';

import { NavBar } from '../components';

// eslint-disable-next-line react/jsx-props-no-spreading
const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider>
    <NavBar
      links={[
        { label: 'Book', href: '/' },
        { label: 'Gallery', href: 'gallery' },
        { label: 'About', href: 'about' },
      ]}
    />
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </ChakraProvider>
);
export default MyApp;
