import {
  Box,
  Container,
  Heading,
  Text,
  VStack
} from '@chakra-ui/react'

const TermsOfService = () => {
  return (
      <Box position="relative" overflow="hidden">
        <Container maxW="container.xl" pt={{ base: 20, lg: 40 }} pb="40">
          <VStack spacing={8} align="stretch">
          <Box>
            <Heading as="h1" size="xl" mb={4}>
              Terms of Service
            </Heading>
            <Text color="gray.600" mb={2}>
              Last Updated: December 13, 2024
            </Text>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={4}>
              Introduction
            </Heading>
            <Text mb={4}>
              Welcome to monitor.ai. By accessing our website, you agree to be bound by these Terms of Service.
              Please read these terms carefully before accessing or using our website.
            </Text>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={4}>
              Website Usage and Content
            </Heading>
            <Text mb={4}>
              All content on this website, including but not limited to text, graphics, logos, images, and software,
              is the property of monitor.ai and is protected by intellectual property laws. No content from this
              website may be copied, reproduced, distributed, or transmitted in any form or by any means without
              our express written permission.
            </Text>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={4}>
              Demo Registration
            </Heading>
            <Text mb={4}>
              When registering for a demo, you agree to provide accurate, current, and complete information.
              We reserve the right to refuse service, terminate accounts, or cancel demonstrations at our discretion.
            </Text>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={4}>
              Intellectual Property Rights
            </Heading>
            <Text mb={4}>
              The monitor.ai name, logo, website design, and all content displayed on this website are owned by
              monitor.ai and are protected by copyright, trademark, and other intellectual property laws. You may
              not use any of our intellectual property without our express written consent.
            </Text>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={4}>
              Disclaimers and Limitations of Liability
            </Heading>
            <Text mb={2}>
              To the maximum extent permitted by law:
            </Text>
            <VStack align="stretch" pl={4} mb={4}>
              <Text>- Our website is provided "as is" without any warranties, express or implied</Text>
              <Text>- We do not guarantee that our website will be uninterrupted, timely, secure, or error-free</Text>
              <Text>- We are not liable for any indirect, incidental, special, consequential, or punitive damages</Text>
              <Text>- Our total liability for any claims arising from these terms or your use of the website shall not exceed the amount paid by you, if any, for accessing our website</Text>
            </VStack>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={4}>
              Governing Law
            </Heading>
            <Text mb={4}>
              These Terms of Service shall be governed by and construed in accordance with the laws of the European Union
              and your country of residence, without regard to its conflict of law provisions. Any disputes arising from
              these terms or your use of our website shall be subject to the exclusive jurisdiction of the courts in the
              relevant jurisdiction.
            </Text>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={4}>
              Dispute Resolution
            </Heading>
            <Text mb={4}>
              Any dispute arising from these terms or your use of our website shall first be attempted to be resolved
              through good faith negotiations. If the dispute cannot be resolved through negotiation, it shall be
              submitted to mediation or arbitration in accordance with the applicable laws of your jurisdiction.
            </Text>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={4}>
              Changes to Terms
            </Heading>
            <Text mb={4}>
              We reserve the right to modify these Terms of Service at any time. Any changes will be effective
              immediately upon posting on this website. Your continued use of the website after any such changes
              constitutes your acceptance of the new Terms of Service.
            </Text>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={4}>
              Contact Information
            </Heading>
            <Text mb={4}>
              If you have any questions about these Terms of Service, please contact us at:{' '}
              <Text as="span" fontWeight="bold">
                contact@monitorai.com
              </Text>
            </Text>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={4}>
              Severability
            </Heading>
            <Text mb={4}>
              If any provision of these Terms of Service is found to be unenforceable or invalid, that provision
              shall be limited or eliminated to the minimum extent necessary so that these Terms of Service shall
              otherwise remain in full force and effect and enforceable.
            </Text>
          </Box>
        </VStack>
        </Container>
      </Box>
  )
}

export default TermsOfService