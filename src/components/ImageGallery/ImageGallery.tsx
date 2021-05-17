import React from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box, Flex, HStack, Stack,
} from '@chakra-ui/react';
import Image from 'next/image';

export const ImageGallery = () => (
  <Stack as={Box} textAlign="center" spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 36 }}>
    <Flex align="center">
      <Image
        src="/assets/images/IMG_3707-min.png"
        alt="Picture of the author"
        width="4032"
        height="2268"
      />
      <HStack justifyContent="space-between" position="absolute" width="100%">
        <Box>
          <ChevronLeftIcon w={['10', '14', '20']} h={['10', '14', '20']} />
        </Box>
        <Box>
          <ChevronRightIcon w={['10', '14', '20']} h={['10', '14', '20']} />
        </Box>
      </HStack>
    </Flex>
  </Stack>
);
