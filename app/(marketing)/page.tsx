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
} from '@chakra-ui/react'
import { Br, Link } from '@saas-ui/react'
import type { NextPage } from 'next'
import Image from 'next/image'
import {
    FiArrowRight,
    FiCode,
    FiFilter,
    FiMonitor,
    FiCheckSquare,
    FiAward,
    FiDatabase,
    FiPieChart,
    FiShield,
    FiTrello,
    FiUsers,
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
                    <Text fontSize={{ base: '4xl', md: '5xl' }}>
                      Simplify compliance
                      <Br /> monitoring instantly
                    </Text>
                </FallInPlace>
              }
              description={
                <FallInPlace delay={0.4} fontWeight="medium">
                  monitor.ai is an <Em>intelligent monitoring system</Em> {' '}
                  that streamlines your regulatory compliance and {' '}
                  helps you win tenders with precision.
                </FallInPlace>
              }
          >
          <FallInPlace delay={0.8}>
              <HStack pt="4" pb="6" spacing="8"></HStack>
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
              <Box overflow="hidden" height="100%" borderRadius="lg">
                <Image
                  src="/static/screenshots/list.png"
                  width={1200}
                  height={762}
                  alt="Screenshot of a space in monitor.ai"
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
                          <Text color="yellow.400" display={{ base: 'block', md: 'inline' }}>
                              Try monitor.ai
                          </Text>{' '}
                          <Text color="cyan.300" display={{ base: 'block', md: 'inline' }}>
                              Free trial available
                          </Text>
                      </Box>
                      <IconButton
                          as={Link}
                          href="/signup"
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
              gradient={['purple.600', 'blue.500']}
          >
              <Text color="white" _dark={{ color: 'black' }} fontSize="xl">
                  &quot;monitor.ai transformed our compliance workflow completely. We went from
                  spending hours scanning documents to receiving perfectly filtered updates
                  and automated compliance checklists. It&apos;s like having an extra team member
                  who never sleeps.&quot;
              </Text>
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
                  Not just another
                  <Br /> monitoring tool.
              </Heading>
          }
          description={
              <>
                  monitor.ai brings intelligent automation to regulatory compliance.
                  <Br />
                  Transform how you handle regulations and tenders with AI-powered precision.
              </>
          }
          align="left"
          columns={[1, 2, 3]}
          iconSize={4}
          features={[
              {
                  title: 'Smart Collection.',
                  icon: FiDatabase,
                  description:
                      'Advanced AI agents continuously gather data from multiple sources, including government websites, databases, and official channels.',
                  variant: 'inline',
              },
              {
                  title: 'Adaptive Learning.',
                  icon: FiCode,
                  description:
                      'System learns from your documents and feedback, continuously improving its ability to identify relevant regulations and opportunities.',
                  variant: 'inline',
              },
              {
                  title: 'Precision Filtering.',
                  icon: FiFilter,
                  description:
                      'Sophisticated algorithms ensure you only see updates and opportunities that are relevant to your business sector.',
                  variant: 'inline',
              },
              {
                  title: 'Auto Checklists.',
                  icon: FiCheckSquare,
                  description:
                      'Automatically generate compliance checklists from regulatory documents, breaking down requirements into actionable tasks.',
                  variant: 'inline',
              },
              {
                  title: 'Risk Assessment.',
                  icon: FiShield,
                  description:
                      'Proactive identification of compliance risks and gaps, with automated alerts and priority scoring for critical issues.',
                  variant: 'inline',
              },
              {
                  title: 'Tender Assistant.',
                  icon: FiAward,
                  description:
                      'Smart tools for tender analysis, requirement matching, and automated document generation to streamline your submission process.',
                  variant: 'inline',
              },
              {
                  title: 'Progress Tracking.',
                  icon: FiTrello,
                  description:
                      'Comprehensive dashboard for monitoring compliance status, tender deadlines, and team progress in real-time.',
                  variant: 'inline',
              },
              {
                  title: 'Team Collaboration.',
                  icon: FiUsers,
                  description:
                      'Built-in tools for task assignment, document sharing, and progress tracking to keep your entire team aligned.',
                  variant: 'inline',
              },
              {
                  title: 'Analytics.',
                  icon: FiPieChart,
                  description: (
                      <>
                          Detailed insights into your compliance performance, tender success rates,
                          and opportunities for improvement through advanced analytics.
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
        {/*VAT may be applicable depending on your location.*/}
      </Text>
    </Pricing>
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

export default Home
