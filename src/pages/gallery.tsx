import React from 'react';

import { Heading } from '@chakra-ui/react';

import { ImageGallery } from '../components/ImageGallery/ImageGallery';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const images = [
  { filePath: 'image-1.png', displayName: 'Living Room' },
  { filePath: 'image-2.png', displayName: 'Kitchen' },
  { filePath: 'image-3.png', displayName: 'Bedroom 2' },
];

const Gallery = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <Heading as="h2" textAlign="center" paddingY={{ base: 4, md: 8 }}>
      Gallery
    </Heading>
    <ImageGallery images={images} />
  </Main>
);

export default Gallery;
