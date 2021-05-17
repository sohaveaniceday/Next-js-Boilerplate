import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';

import { NavBar } from '../components';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider>
    <NavBar
      links={[
        { label: 'Book', href: '/' },
        { label: 'Gallery', href: 'gallery' },
        { label: 'About', href: 'about' },
      ]}
      logo={{ label: 'Waterside Barn', href: '/' }}
    />
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </ChakraProvider>
);
export default MyApp;
