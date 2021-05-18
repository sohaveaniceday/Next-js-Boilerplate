import React from 'react';

import { Heading } from '@chakra-ui/react';

import { ImageGallery } from '../components/ImageGallery/ImageGallery';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const images = [
  { filePath: 'living-room.png', displayName: 'Living Room' },
  { filePath: 'outside-main.png', displayName: 'Outside' },
  { filePath: 'outside-view.png', displayName: 'The View' },
  { filePath: 'bedroom-1.png', displayName: 'Bedroom 1' },
  { filePath: 'bedroom-2.png', displayName: 'Bedroom 2' },
  { filePath: 'bedroom-3.png', displayName: 'Bedroom 3' },
  { filePath: 'kitchen.png', displayName: 'Kitchen' },
  { filePath: 'bathroom.png', displayName: 'Bathroom' },
  { filePath: 'outside-pond.png', displayName: 'The Pond' },
  { filePath: 'dining-area.png', displayName: 'Dining Area' },
  { filePath: 'outside-sideg.png', displayName: 'Parking' },
  { filePath: 'sitting-area.png', displayName: 'Sitting Area' },
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
