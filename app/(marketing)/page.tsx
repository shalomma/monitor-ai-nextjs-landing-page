'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
} from '@chakra-ui/react'
import { Br, Link } from '@saas-ui/react'
import type { NextPage } from 'next'
import Image from 'next/image'
import {
    FiArrowRight,
    FiBox,
    FiCheck,
    FiCode,
    FiCopy,
    FiFlag,
    FiGrid,
    FiLock,
    FiSearch,
    FiSliders,
    FiSmile,
    FiTerminal,
    FiThumbsUp,
    FiToggleLeft,
    FiTrendingUp,
    FiUserPlus,
    FiFilter,
    FiMonitor,
    FiCheckSquare,
    FiAward,
} from 'react-icons/fi'

import * as React from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from '#components/highlights'
import { ChakraLogo, NextjsLogo } from '#components/logos'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Pricing } from '#components/pricing/pricing'
import { Testimonial, Testimonials } from '#components/testimonials'
import { Em } from '#components/typography'
import faq from '#data/faq'
import pricing from '#data/pricing'
import testimonials from '#data/testimonials'
const Home: NextPage = () => {
  return (
    <Box>
      <HeroSection />

      <HighlightsSection />

      <FeaturesSection />

      <TestimonialsSection />

      <PricingSection />

      <FaqSection />
    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
              id="home"
              justifyContent="flex-start"
              px="0"
              title={
                <FallInPlace>
                  Simplify compliance
                  <Br /> monitoring instantly
                </FallInPlace>
              }
              description={
                <FallInPlace delay={0.4} fontWeight="medium">
                  monitor.ai is an <Em>intelligent monitoring system</Em>
                  <Br /> that streamlines your regulatory compliance and <Br />{' '}
                  helps you win tenders with precision.
                </FallInPlace>
              }
          >
          <FallInPlace delay={0.8}>
              <HStack pt="4" pb="12" spacing="8">
                <NextjsLogo height="28px" /> <ChakraLogo height="20px" />
              </HStack>

              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink
                    // colorScheme="primary"
                    size="lg"
                    href="/signup"
                >
                  Login
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="/signup"
                  variant="solid"
                  colorScheme="primary"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: 'common',
                        transitionDuration: 'normal',
                        '.chakra-button:hover &': {
                          transform: 'translate(5px)',
                        },
                      }}
                    />
                  }
                >
                  Request a demo
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            left={{ lg: '60%', xl: '55%' }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/list.png"
                  width={1200}
                  height={762}
                  alt="Screenshot of a ListPage in Saas UI Pro"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

        <Features
            id="benefits"
            columns={[1, 2, 4]}
            iconSize={4}
            innerWidth="container.xl"
            pt="20"
            features={[
                {
                    title: 'Smart Filtering',
                    icon: FiFilter,
                    description: 'AI-powered system learns your needs and delivers only relevant information.',
                    iconPosition: 'left',
                    delay: 0.6,
                },
                {
                    title: 'Automated Monitoring',
                    icon: FiMonitor,
                    description:
                        'Continuous scanning of multiple sources for regulations and tenders that matter to you.',
                    iconPosition: 'left',
                    delay: 0.8,
                },
                {
                    title: 'Compliance Tracking',
                    icon: FiCheckSquare,
                    description:
                        'Generate actionable checklists and track your regulatory compliance progress automatically.',
                    iconPosition: 'left',
                    delay: 1,
                },
                {
                    title: 'Tender Success',
                    icon: FiAward,
                    description:
                        'Streamline tender submissions with AI-generated documents and deadline tracking.',
                    iconPosition: 'left',
                    delay: 1.1,
                },
            ]}
            reveal={FallInPlace}
        />
    </Box>
  )
}

const HighlightsSection = () => {
  const {onCopy, hasCopied } = useClipboard('yarn add @saas-ui/react')

  return (
      <Highlights>
          <HighlightsItem colSpan={[1, null, 2]} title="AI-Powered Monitoring">
              <VStack alignItems="flex-start" spacing="8">
                  <Text color="muted" fontSize="xl">
                      Experience the power of <Em>intelligent document processing</Em>.
                      Our AI agents continuously scan multiple sources, including government websites,
                      databases, and APIs, to capture every regulation and tender that matters to your business.
                  </Text>

                  <Flex
                      rounded="full"
                      borderWidth="1px"
                      flexDirection="row"
                      alignItems="center"
                      py="1"
                      ps="8"
                      pe="2"
                      bg="primary.900"
                      _dark={{ bg: 'gray.900' }}
                  >
                      <Box>
                          <Text color="yellow.400" display="inline">
                              Try monitor.ai
                          </Text>{' '}
                          <Text color="cyan.300" display="inline">
                              Free for 30 days
                          </Text>
                      </Box>
                      <IconButton
                          icon={<FiArrowRight />}
                          aria-label="Get started"
                          variant="ghost"
                          ms="4"
                          isRound
                          color="white"
                      />
                  </Flex>
              </VStack>
          </HighlightsItem>
          <HighlightsItem title="Smart Learning System">
              <Text color="muted" fontSize="lg">
                  Our system learns from your documents and preferences, continuously improving
                  its ability to identify relevant opportunities and compliance requirements
                  specific to your business needs.
              </Text>
          </HighlightsItem>
          <HighlightsTestimonialItem
              name="Sarah Chen"
              description="Compliance Manager"
              avatar="/static/images/avatar.jpg"
              gradient={['purple.600', 'blue.800']}
          >
              "monitor.ai transformed our compliance workflow completely. We went from
              spending hours scanning documents to receiving perfectly filtered updates
              and automated compliance checklists. It's like having an extra team member
              who never sleeps."
          </HighlightsTestimonialItem>
          <HighlightsItem
              colSpan={[1, null, 2]}
              title="Complete Compliance & Tender Solution"
          >
              <Text color="muted" fontSize="lg">
                  From monitoring to submission, we provide all the tools you need to stay
                  compliant and win more tenders.
              </Text>
              <Wrap mt="8">
                  {[
                      'regulatory monitoring',
                      'tender tracking',
                      'document analysis',
                      'compliance checklists',
                      'deadline alerts',
                      'submission templates',
                      'risk assessment',
                      'progress tracking',
                      'automated updates',
                      'custom filtering',
                      'requirement matching',
                      'insights reports',
                      'source verification',
                      'document generation',
                      'audit trails',
                      'collaboration tools',
                      'priority scoring'
                  ].map((value) => (
                      <Tag
                          key={value}
                          variant="subtle"
                          colorScheme="purple"
                          rounded="full"
                          px="3"
                      >
                          {value}
                      </Tag>
                  ))}
              </Wrap>
          </HighlightsItem>
      </Highlights>
  )
}

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="left"
          as="p"
        >
          Not your standard
          <Br /> dashboard template.
        </Heading>
      }
      description={
        <>
          Saas UI Pro includes everything you need to build modern frontends.
          <Br />
          Use it as a template for your next product or foundation for your
          design system.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: '#components.',
          icon: FiBox,
          description:
            'All premium components are available on a private NPM registery, no more copy pasting and always up-to-date.',
          variant: 'inline',
        },
        {
          title: 'Starterkits.',
          icon: FiLock,
          description:
            'Example apps in Next.JS, Electron. Including authentication, billing, example pages, everything you need to get started FAST.',
          variant: 'inline',
        },
        {
          title: 'Documentation.',
          icon: FiSearch,
          description:
            'Extensively documented, including storybooks, best practices, use-cases and examples.',
          variant: 'inline',
        },
        {
          title: 'Onboarding.',
          icon: FiUserPlus,
          description:
            'Add user onboarding flows, like tours, hints and inline documentation without breaking a sweat.',
          variant: 'inline',
        },
        {
          title: 'Feature flags.',
          icon: FiFlag,
          description:
            "Implement feature toggles for your billing plans with easy to use hooks. Connect Flagsmith, or other remote config services once you're ready.",
          variant: 'inline',
        },
        {
          title: 'Upselling.',
          icon: FiTrendingUp,
          description:
            '#components and hooks for upgrade flows designed to make upgrading inside your app frictionless.',
          variant: 'inline',
        },
        {
          title: 'Themes.',
          icon: FiToggleLeft,
          description:
            'Includes multiple themes with darkmode support, always have the perfect starting point for your next project.',
          variant: 'inline',
        },
        {
          title: 'Generators.',
          icon: FiTerminal,
          description:
            'Extend your design system while maintaininig code quality and consistency with built-in generators.',
          variant: 'inline',
        },
        {
          title: 'Monorepo.',
          icon: FiCode,
          description: (
            <>
              All code is available as packages in a high-performance{' '}
              <Link href="https://turborepo.com">Turborepo</Link>, you have full
              control to modify and adjust it to your workflow.
            </>
          ),
          variant: 'inline',
        },
      ]}
    />
  )
}

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t)

        return columns
      },
      [[], [], []],
    )
  }, [])

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  )
}

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        VAT may be applicable depending on your location.
      </Text>
    </Pricing>
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

export default Home
