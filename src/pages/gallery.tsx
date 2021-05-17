import React from 'react';

import { ImageGallery } from '../components/ImageGallery/ImageGallery';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Gallery = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <ImageGallery />
  </Main>
);

export default Gallery;
