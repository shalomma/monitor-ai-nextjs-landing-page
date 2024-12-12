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
        const url = `https://api.clickup.com/api/v2/list/${process.env.CLICKUP_LIST_ID}/task`;
        const options = {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                Authorization: `${process.env.CLICKUP_API_KEY}`
            },
            body: JSON.stringify(
                {
                    name: data.name,
                    description: data.description,
                    status: 'Open',
                    email: data.email,
                    phone: data.phone
                }
            )
        };
        fetch(url, options)
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.error(err));
    };

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
                    <Center height="100vh" flex="1">
                    <Box pe="20">
                        <NextLink href="/">
                            <Box
                                as={siteConfig.logo}
                                width={{ base: '200px', lg: '320px' }}
                                ms={{ base: -10, sm: -130, md: -130, lg: 20}}
                                mb={{ base: -40, sm: -40, md: -40, lg: 'auto'}}
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
                    </Center>
                    <Center height="100vh" flex="1">
                        <Box width={{ base: '100%', sm: 'container.sm' }} pt="8" px="8">
                            <Form onSubmit={saveHandler}>
                                {({ Field }) => (
                                    <FormLayout>
                                        <Heading size="md">Personal Information</Heading>
                                        <Field
                                            name="name"
                                            label="Name"
                                            isRequired={true}
                                        />
                                        <Field
                                            name="email"
                                            label="Email"
                                            type="email"
                                            isRequired={true}
                                        />
                                        <Field
                                            name="phone"
                                            label="Phone Number"
                                            type="number"
                                            inputMode="tel"
                                            placeholder="Optional"
                                            hideStepper={true}
                                        />
                                        <Field
                                            name="description"
                                            type="textarea"
                                            label="Additional information"
                                            placeholder="Optional"
                                        />
                                        <SubmitButton disableIfInvalid>Submit</SubmitButton>
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