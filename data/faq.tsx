import * as React from 'react'

const faq = {
  title: 'Frequently asked questions',
  // description: '',
  items: [
    {
      q: 'How does monitor.ai learn my organization\'s specific needs?',
      a: (
        <>
          monitor.ai uses advanced AI to analyze your existing documents, past tenders,
          and regulatory requirements. The system continuously learns from your team's
          interactions and feedback to improve its accuracy and relevance. This ensures
          you only receive information that matters to your organization.
        </>
      ),
    },
    {
      q: 'What types of sources does monitor.ai monitor?',
      a: "We monitor a wide range of sources including government databases, official regulatory websites, tender platforms, industry-specific portals, and legislative updates. Our system can also integrate with your existing document repositories to provide comprehensive coverage.",
    },
    {
      q: 'How does the partnership program work?',
      a: 'Our partnership program is designed for accounting firms, legal consultancies, and other professional service providers. Partners can offer monitor.ai to their clients either as a white-labeled solution or as part of their service package. We provide full training, support, and competitive revenue sharing models.',
    },
    {
      q: 'Can monitor.ai integrate with our existing compliance tools?',
      a: 'Yes, monitor.ai is designed to complement your existing tools and workflows. We can integrate with common document management systems, CRMs, and task management platforms. For enterprise clients, we offer custom integration solutions to meet specific requirements.',
    },
    {
      q: 'What kind of support and training do you provide?',
      a: 'We provide comprehensive onboarding support to ensure your team gets maximum value from monitor.ai. This includes initial setup, team training, and ongoing technical support. Enterprise clients receive dedicated support managers, while partners get specialized training for client management.',
    },
    {
      q: 'Is monitor.ai suitable for startups?',
      a: 'Absolutely! We have tailored solutions for startups that help manage regulatory compliance without overwhelming their resources. Our AI-powered system grows with your business, helping you stay compliant and competitive from day one.',
    }
  ],
}

export default faq
