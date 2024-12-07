import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'Solutions for every organization',
  description:
      'Contact us to discover how monitor.ai can transform your compliance and tender processes.',
  plans: [
    {
      id: 'startup',
      title: 'Startup',
      description: 'Perfect for growing companies navigating regulations.',
      price: 'Contact Us',
      features: [
        {
          title: 'AI-powered regulation monitoring',
        },
        {
          title: 'Basic compliance checklists',
        },
        {
          title: 'Tender opportunity alerts',
        },
        {
          title: 'Document analysis',
        },
        {
          title: 'Email support',
        },
        {
          title: 'Perfect for seed to series A startups',
        },
      ],
      action: {
        href: '#contact',
        label: 'Schedule Demo'
      },
    },
    {
      id: 'partner',
      title: 'Partner Program',
      description: 'For accounting firms and legal consultancies.',
      price: 'Partner With Us',
      isRecommended: true,
      features: [
        {
          title: 'White-label options',
        },
        {
          title: 'Multi-client management',
        },
        {
          title: 'Integration with your services',
        },
        {
          title: 'Co-branding opportunities',
        },
        {
          title: 'Partner success manager',
        },
        {
          title: 'Revenue sharing model',
        },
        {
          title: 'Early access to new features',
        },
      ],
      action: {
        href: '#partner',
        label: 'Become a Partner'
      },
    },
    {
      id: 'enterprise',
      title: 'Enterprise',
      description: 'Custom solutions for large organizations.',
      price: 'Custom Pricing',
      features: [
        {
          title: 'Full platform customization',
        },
        {
          title: 'Dedicated support team',
        },
        {
          title: 'Custom integrations',
        },
        {
          title: 'Advanced analytics',
        },
        {
          title: 'SLA guarantees',
        },
        {
          title: 'On-premise options available',
        },
      ],
      action: {
        href: '#enterprise',
        label: 'Contact Sales'
      },
    },
  ],
}