'use client'

import { useEffect, useState } from 'react'
import { Box, Center, Stack, Text, Heading } from '@chakra-ui/react'
import { Form, FormLayout, SubmitButton } from '@saas-ui/react'
import { NextPage } from 'next'
import NextLink from 'next/link'

import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { PageTransition } from '#components/motion/page-transition'
import { Section } from '#components/section'
import siteConfig from '#data/config'

const Signup: NextPage = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const saveHandler = (data) => {
        console.log(data)
    }

    if (!isMounted) {
        return null
    }

    return (
        <Section height="100vh" innerWidth="container.xl">
            <BackgroundGradient
                zIndex="-1"
                width={{ base: 'full', lg: '50%' }}
                left="auto"
                right="0"
                borderLeftWidth="1px"
                borderColor="gray.200"
                _dark={{
                    borderColor: 'gray.700',
                }}
            />
            <PageTransition height="100%" display="flex" alignItems="center">
                <Stack
                    width="100%"
                    alignItems={{ base: 'center', lg: 'flex-start' }}
                    spacing="20"
                    flexDirection={{ base: 'column', lg: 'row' }}
                >
                    <Box pe="20">
                        <NextLink href="/">
                            <Box
                                as={siteConfig.logo}
                                width="160px"
                                ms="4"
                                mb={{ base: 0, lg: 16 }}
                            />
                        </NextLink>
                        <Features
                            display={{ base: 'none', lg: 'flex' }}
                            columns={1}
                            iconSize={4}
                            flex="1"
                            py="0"
                            ps="0"
                            maxW={{ base: '100%', xl: '80%' }}
                            features={siteConfig.signup.features.map((feature) => ({
                                iconPosition: 'left',
                                variant: 'left-icon',
                                ...feature,
                            }))}
                        />
                    </Box>
                    <Center height="100%" flex="1">
                        <Box width="container.sm" pt="8" px="8">
                            <Form onSubmit={saveHandler}>
                                {({ Field }) => (
                                    <FormLayout>
                                        <Heading size="md">Personal Information</Heading>
                                        <Field name="name" label="Name" />
                                        <Field name="email" label="Email" />
                                        <Field name="phone" label="Phone Number" />
                                        <SubmitButton>Submit</SubmitButton>
                                    </FormLayout>
                                )}
                            </Form>
                            <Text color="muted" fontSize="sm" mt="4">
                                By signing up you agree to our{' '}
                                <NextLink href={siteConfig.termsUrl} passHref>
                                    <Text as="a" color="white">
                                        Terms of Service
                                    </Text>
                                </NextLink>{' '}
                                and{' '}
                                <NextLink href={siteConfig.privacyUrl} passHref>
                                    <Text as="a" color="white">
                                        Privacy Policy
                                    </Text>
                                </NextLink>
                            </Text>
                        </Box>
                    </Center>
                </Stack>
            </PageTransition>
        </Section>
    )
}

export default Signup