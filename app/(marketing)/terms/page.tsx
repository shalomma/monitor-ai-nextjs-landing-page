'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react'
import { BackgroundGradient } from '#components/gradients/background-gradient'

const TermsPage = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 20, lg: 40 }} pb="40">
        <VStack spacing={8} align="stretch">
          <Heading as="h1" size="2xl">
            Terms of Use
          </Heading>
          
          <Text fontSize="lg" color="muted">
            Last updated: [Current Date]
          </Text>

          <VStack spacing={6} align="stretch">
            <Box>
              <Heading as="h2" size="lg" mb={4}>
                1. Acceptance of Terms
              </Heading>
              <Text>
                By accessing and using monitor.ai, you agree to be bound by these Terms of Use and all applicable laws and regulations.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                2. Use License
              </Heading>
              <UnorderedList spacing={2} pl={4}>
                <ListItem>
                  Permission is granted to temporarily access the materials within monitor.ai for personal or business use.
                </ListItem>
                <ListItem>
                  This license shall automatically terminate if you violate any of these restrictions.
                </ListItem>
              </UnorderedList>
            </Box>

            {/* Add more sections as needed */}
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}

export default TermsPage
