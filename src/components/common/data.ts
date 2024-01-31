import { StaticImageData } from 'next/image'
import { PlanItem, PricingCard } from './types'

//images
import avatar1 from '@/assets/images/avatars/img-1.jpg'
import avatar2 from '@/assets/images/avatars/img-2.jpg'

type Testimonials = {
  name: string
  position: string
  description: string
  image: StaticImageData
}

type AccordionData = {
  title: string
  description: string
}

type FooterLink = {
  [title: string]: {
    links: string[]
  }
}

const testimonials: Testimonials[] = [
  {
    name: 'John SD',
    position: 'Engineering Director',
    description:
      'Have been working with CSS for over ten years and Tailwind just makes my life easier. It is still CSS and you use flex, grid, etc. but just quicker to write and maintain.',
    image: avatar1,
  },
  {
    name: 'Cersei Lannister',
    position: 'Senior Project Manager',
    description:
      'I was bad at front-end until I discovered with Tailwind CSS. I have learnt a lot more about design and CSS itself after I started working with Tailwind. Creating web pages is 5x faster now.',
    image: avatar2,
  },
  {
    name: 'John Stark',
    position: 'Engineering Director',
    description:
      'Have been working with CSS for over ten years and Tailwind just makes my life easier. It is still CSS and you use flex, grid, etc. but just quicker to write and maintain.',
    image: avatar1,
  },
  {
    name: 'Cersei Lannister',
    position: 'Senior Project Manager',
    description:
      'I was bad at front-end until I discovered with Tailwind CSS. I have learnt a lot more about design and CSS itself after I started working with Tailwind. Creating web pages is 5x faster now.',
    image: avatar2,
  },
]

const FAQContent: AccordionData[] =[
  {
    title: "What sets BlockPeer Tech apart in the field of blockchain development?",
    description:
      "BlockPeer Tech is distinguished by its commitment to innovation, expertise in scalable solutions, and a track record of delivering transparent and secure blockchain applications. Our focus on decentralized finance and smart contract development contributes to our industry leadership.",
  },
  {
    title: "How does BlockPeer Tech ensure compliance in financial solutions?",
    description:
      "Compliance is integral to our approach. BlockPeer Tech specializes in Meeting Legal, Ethical, and Regulatory (MLETR) requirements. Our compliance solutions for trade documents streamline processes, mitigate risks, and ensure adherence to the highest standards.",
  },
  {
    title: "What AI services does BlockPeer Tech offer for the financial sector?",
    description:
      "BlockPeer Tech provides a range of AI solutions tailored for the financial industry. From predictive analytics to machine learning models, our services optimize processes, automate tasks, and offer valuable insights to keep financial institutions competitive in a dynamic landscape.",
  },
  {
    title: "Can BlockPeer Tech assist in building decentralized applications (DApps)?",
    description:
      "Absolutely. BlockPeer Tech has extensive experience in developing decentralized applications (DApps). Whether you're starting from scratch or integrating blockchain into an existing infrastructure, our team has the expertise to drive success in the decentralized world.",
  },
  {
    title: "How does BlockPeer Tech prioritize security in its solutions?",
    description:
      "Security is non-negotiable for BlockPeer Tech. Our solutions adhere to the highest industry standards, ensuring data integrity and robust security measures. We implement cutting-edge security protocols to safeguard financial transactions and sensitive information.",
  },
  {
    title: "Can BlockPeer Tech's solutions be customized to suit specific business needs?",
    description:
      "Yes, indeed. Every project is unique, and at BlockPeer Tech, we pride ourselves on offering tailor-made solutions. Our team works closely with clients to understand their specific needs and goals, delivering customized solutions that align with their business objectives.",
  },
];

const plans: PlanItem[] = [
  {
    id: 1,
    name: 'Starter',
    price: '49',
    duration: '/ month',
    features: [
      'Up to 600 minutes usage time',
      'Use for personal only',
      'Add up to 10 attendees',
      'Technical support via email',
    ],
    isRecommended: false,
  },
  {
    id: 2,
    name: 'Professional',
    price: '99',
    duration: '/ month',
    features: [
      'Up to 6000 minutes usage time',
      'Use for personal or a commercial client',
      'Add up to 100 attendees',
      'Up to 5 teams',
      'Technical support via email',
    ],
    isPopular: true,
    isRecommended: true,
  },
  {
    id: 3,
    name: 'Enterprise',
    price: '599',
    duration: '/ month',
    features: [
      'Unlimited usage time',
      'Use for personal or a commercial client',
      'Add Unlimited attendees',
      '24x7 Technical support via phone',
      'Technical support via email',
    ],
    isRecommended: false,
  },
]

const pricingCards: PricingCard = {
  Starter: {
    duration: 500,
    price: '49',
    features: [
      'Up to 600 minutes usage time',
      'Use for personal only',
      'Add up to 10 attendees',
      'Technical support via email',
    ],
  },
  Professional: {
    duration: 700,
    price: '99',
    features: [
      'Up to 6000 minutes usage time',
      'Use for personal or a commercial',
      'Add up to 100 attendees',
      'Up to 5 teams',
      'Technical support via email',
    ],
  },
  Enterprise: {
    duration: 900,
    price: '599',
    features: [
      'Unlimited usage time',
      'Use for personal or a commercial',
      'Add Unlimited attendees',
      '24x7 Technical support via phone',
      'Technical support via email',
    ],
  },
}

const footerLinks: FooterLink = {
  'Products': {
    links: ['Blockpeer-Tech', 'Easy BL',],
  },
  company: {
    links: ['About us', 'Contact Us'],
  },
  legal: {
    links: ['Usage Policy', 'Privacy Policy', 'Terms of Service', 'Trust'],
  },
}

export { testimonials, plans, FAQContent, footerLinks, pricingCards }
