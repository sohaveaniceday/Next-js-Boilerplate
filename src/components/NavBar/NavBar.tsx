import React from 'react';

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';

export interface LinkType {
  label: string;
  href: string;
}

const NavLink = ({ link }: { link: LinkType }) => (
  <Link href={link.href}>
    <Text
      px={2}
      py={1}
      rounded="md"
      cursor="pointer"
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
    >
      {link.label}
    </Text>
  </Link>
);

export interface NavBarProps {
  links: LinkType[];
  logo: LinkType;
  children: React.ReactNode;
}

export const NavBar = ({ links, logo, children }: NavBarProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={useColorModeValue('gray.100', 'gray.900')}
        px={4}
        position="fixed"
        width="100%"
        zIndex={1}
      >
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems="center" paddingRight={{ base: 10, md: 0 }}>
            <Box>
              <NavLink link={logo} />
            </Box>
          </HStack>
          <Flex alignItems="center">
            <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
              {links.map((link) => (
                <NavLink key={link.href} link={link} />
              ))}
            </HStack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as="nav" spacing={4}>
              {links.map((link) => (
                <NavLink key={link.href} link={link} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      <Box paddingTop={16} />
      {children}
    </>
  );
};
