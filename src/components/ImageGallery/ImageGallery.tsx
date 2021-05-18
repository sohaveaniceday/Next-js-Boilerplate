import React, { useState } from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box, Flex, Heading, HStack, Stack,
} from '@chakra-ui/react';
import Image from 'next/image';

export interface ImageGalleryProps {
  images: { filePath: string; displayName: string }[];
}

const chevronSizes = ['10', '14', '20'];

const chevronOnClick = (
  direction: 'right' | 'left',
  currentPhotoIndex: number,
  imagesLength: number,
) => {
  if (direction === 'left') {
    if (currentPhotoIndex === 0) {
      return imagesLength - 1;
    }
    return currentPhotoIndex - 1;
  }
  if (direction === 'right') {
    if (currentPhotoIndex === imagesLength - 1) {
      return 0;
    }
    return currentPhotoIndex + 1;
  }
  return 0;
};

export const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  return (
    <Stack as={Box} textAlign="center" spacing={{ base: 4, md: 8 }}>
      <Heading as="h3" size="md">
        {images[currentPhotoIndex].displayName}
      </Heading>
      <Flex align="center">
        <Image
          src={`/assets/images/${images[currentPhotoIndex].filePath}`}
          alt={images[currentPhotoIndex].displayName}
          width="4032"
          height="2268"
          loading="eager"
          key={images[currentPhotoIndex].displayName}
        />
        <HStack justifyContent="space-between" position="absolute" width="100%">
          <Box
            onClick={() => setCurrentPhotoIndex(chevronOnClick('left', currentPhotoIndex, images.length))}
            cursor="pointer"
          >
            <ChevronLeftIcon w={chevronSizes} h={chevronSizes} />
          </Box>
          <Box
            onClick={() => setCurrentPhotoIndex(chevronOnClick('right', currentPhotoIndex, images.length))}
            cursor="pointer"
          >
            <ChevronRightIcon w={chevronSizes} h={chevronSizes} />
          </Box>
        </HStack>
      </Flex>
    </Stack>
  );
};
