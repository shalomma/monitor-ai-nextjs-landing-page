// import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
// import { FaGithub, FaTwitter } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'monitor.ai',
    description: 'Stay Ahead of the Curve.',
  } as NextSeoProps,
  termsUrl: '/terms',
  privacyUrl: '/privacy-policy',
  header: {
    links: [
      {
        id: 'features',
        label: 'Features',
      },
      {
        id: 'pricing',
        label: 'Pricing',
      },
      {
        id: 'faq',
        label: 'FAQ',
      },
      {
        label: 'Login',
        href: '/login',
      },
      {
        label: 'Sign Up',
        href: '/signup',
        variant: 'primary',
      },
    ],
  },
  footer: {
    // copyright: (
    //   <>
    //     Built by{' '}
    //     <Link href="https://www.linkedin.com/in/maayanshalom/">Maayan Shalom</Link>
    //   </>
    // ),
    links: [
      {
        label: 'Terms of Use',
        href: '/terms',
      },
      {
        label: 'Privacy Policy',
        href: '/privacy-policy',
      },
      {
        href: 'mailto:maayan@monitorai.co',
        label: 'Contact',
      },
      // {
      //   href: 'https://twitter.com/saas_js',
      //   label: <FaTwitter size="14" />,
      // },
      // {
      //   href: 'https://github.com/Monitor-ai-code',
      //   label: <FaGithub size="14" />,
      // },
    ],
  },
  signup: {
    title: 'Transform your compliance process',
    features: [
      {
        icon: FiCheck,
        title: 'Smart Monitoring',
        description: 'AI-powered system that automatically tracks relevant regulations and tenders across multiple sources.',
      },
      {
        icon: FiCheck,
        title: 'Time Saving',
        description:
            'Reduce document review time by up to 70% with intelligent filtering and automated compliance checklists.',
      },
      {
        icon: FiCheck,
        title: 'Risk Reduction',
        description:
            'Never miss critical regulatory updates or tender deadlines with proactive alerts and risk assessments.',
      },
      {
        icon: FiCheck,
        title: 'Competitive Edge',
        description:
            'Stay ahead of opportunities with AI-assisted tender analysis and automated submission preparation.',
      },
    ],
  },
}

export default siteConfig
