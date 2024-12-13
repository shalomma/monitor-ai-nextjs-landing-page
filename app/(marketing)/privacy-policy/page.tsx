import {
    Box,
    Container,
    Heading,
    Text,
    VStack
} from '@chakra-ui/react'

const PrivacyPolicyPage = () => {
    return (
        <Box position="relative" overflow="hidden">
            <Container maxW="container.xl" pt={{ base: 20, lg: 40 }} pb="40">
            <VStack spacing={8} align="stretch">
                <Box>
                    <Heading as="h1" size="xl" mb={4}>
                        Privacy Policy
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
                        monitor.ai ("we," "us," or "our") is committed to protecting the privacy of visitors to our website.
                        This Privacy Policy explains how we collect, use, store, and protect personal information obtained through our landing page.
                    </Text>
                </Box>

                <Box>
                    <Heading as="h2" size="lg" mb={4}>
                        Information We Collect
                    </Heading>
                    <Text mb={2}>
                        We collect the following personal information when you sign up for a demo:
                    </Text>
                    <VStack align="stretch" pl={4} mb={4}>
                        <Text>- Full name</Text>
                        <Text>- Email address</Text>
                        <Text>- Phone number</Text>
                    </VStack>
                </Box>

                <Box>
                    <Heading as="h2" size="lg" mb={4}>
                        How We Use Your Information
                    </Heading>
                    <Text mb={2}>
                        The personal information we collect is solely used to:
                    </Text>
                    <VStack align="stretch" pl={4} mb={4}>
                        <Text>- Contact you regarding your demo request</Text>
                        <Text>- Respond to your inquiries</Text>
                        <Text>- Maintain a record of our communications</Text>
                    </VStack>
                </Box>

                <Box>
                    <Heading as="h2" size="lg" mb={4}>
                        Data Storage and Security
                    </Heading>
                    <Text mb={4}>
                        Your information is stored in our secure cloud infrastructure. We implement appropriate technical
                        and organizational measures to protect your personal data against unauthorized access, alteration,
                        disclosure, or destruction.
                    </Text>
                </Box>

                <Box>
                    <Heading as="h2" size="lg" mb={4}>
                        Data Sharing
                    </Heading>
                    <Text mb={4}>
                        We do not share, sell, rent, or trade your personal information with any third parties.
                    </Text>
                </Box>

                <Box>
                    <Heading as="h2" size="lg" mb={4}>
                        Cookies
                    </Heading>
                    <Text mb={4}>
                        Our landing page does not use cookies.
                    </Text>
                </Box>

                <Box>
                    <Heading as="h2" size="lg" mb={4}>
                        Your Rights
                    </Heading>
                    <Text mb={2}>
                        You have the right to:
                    </Text>
                    <VStack align="stretch" pl={4} mb={4}>
                        <Text>- Request access to your personal data</Text>
                        <Text>- Request deletion of your personal data</Text>
                        <Text>- Withdraw your consent at any time</Text>
                        <Text>- Request correction of any inaccurate data we hold about you</Text>
                    </VStack>
                    <Text mb={4}>
                        To exercise any of these rights, please contact us using the information provided below.
                    </Text>
                </Box>

                <Box>
                    <Heading as="h2" size="lg" mb={4}>
                        International Data Transfer
                    </Heading>
                    <Text mb={4}>
                        As our services target both EMEA and US markets, your data may be processed in these regions.
                        We ensure appropriate safeguards are in place to protect your information in accordance with
                        applicable data protection laws, including GDPR.
                    </Text>
                </Box>

                <Box>
                    <Heading as="h2" size="lg" mb={4}>
                        Contact Information
                    </Heading>
                    <Text mb={4}>
                        For any privacy-related concerns or requests, please contact us at:{' '}
                        <Text as="span" fontWeight="bold">
                            contact@monitor.ai.com
                        </Text>
                    </Text>
                </Box>

                <Box>
                    <Heading as="h2" size="lg" mb={4}>
                        Changes to This Policy
                    </Heading>
                    <Text mb={4}>
                        We reserve the right to update this Privacy Policy at any time. Any changes will be posted on
                        this page with an updated revision date.
                    </Text>
                </Box>

                <Box>
                    <Heading as="h2" size="lg" mb={4}>
                        Specific Regional Rights
                    </Heading>

                    <Heading as="h3" size="md" mb={3}>
                        For European Users (GDPR)
                    </Heading>
                    <Text mb={2}>
                        Under the General Data Protection Regulation, you have additional rights including:
                    </Text>
                    <VStack align="stretch" pl={4} mb={4}>
                        <Text>- Right to data portability</Text>
                        <Text>- Right to restrict processing</Text>
                        <Text>- Right to object to processing</Text>
                        <Text>- Right to lodge a complaint with a supervisory authority</Text>
                    </VStack>

                    <Heading as="h3" size="md" mb={3}>
                        For California Users (CCPA)
                    </Heading>
                    <Text mb={2}>
                        Under the California Consumer Privacy Act, California residents have specific rights regarding
                        their personal information:
                    </Text>
                    <VStack align="stretch" pl={4} mb={4}>
                        <Text>- Right to know what personal information is collected</Text>
                        <Text>- Right to know whether personal information is sold or disclosed</Text>
                        <Text>- Right to opt-out of the sale of personal information</Text>
                        <Text>- Right to request deletion of personal information</Text>
                    </VStack>
                    <Text>
                        Note: We do not sell personal information as defined under the CCPA.
                    </Text>
                </Box>
            </VStack>
            </Container>
        </Box>
    )
}

export default PrivacyPolicyPage
