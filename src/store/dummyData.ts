import { Article, ContactForm, Event, GalleryItem, Rating } from '../types';

export const dummyArticles: Article[] = [
  {
    id: '1',
    title: 'Advancements in AI-powered Automation',
    content: 'Automation through AI is transforming industries at an unprecedented rate...',
    date: '2024-03-20',
    author: 'Alex Turner',
    imageUrl: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf',
    views: 220,
  },
  {
    id: '2',
    title: 'Deep Learning Breakthroughs to Watch',
    content: 'Recent breakthroughs in deep learning algorithms have opened up new possibilities...',
    date: '2024-03-18',
    author: 'Emily Davis',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    views: 130,
  },
  {
    id: '3',
    title: 'AI Ethics: Navigating the Moral Landscape',
    content: 'As AI becomes more prevalent, ethical considerations are paramount...',
    date: '2024-03-12',
    author: 'Samantha Lee',
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df',
    views: 210,
  },
  {
    id: '4',
    title: 'Natural Language Processing Trends',
    content: 'Latest advancements in NLP are breaking language barriers...',
    date: '2024-03-22',
    author: 'Michael Green',
    imageUrl: 'https://images.unsplash.com/photo-1497493292307-31c376b6e479',
    views: 160,
  },
  {
    id: '5',
    title: 'AI in Cybersecurity',
    content: 'How AI is enhancing cybersecurity measures and threat detection...',
    date: '2024-03-25',
    author: 'Olivia Brown',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    views: 140,
  },
];

export const dummyEvents: Event[] = [
  {
    id: '1',
    title: 'Global AI Conference 2024',
    description: 'An international conference on the future of AI technologies',
    date: '2024-07-01',
    type: 'upcoming',
    location: 'New York Convention Center',
    imageUrl: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa',
    views: 250,
  },
  {
    id: '2',
    title: 'AI Workshop for Developers',
    description: 'Interactive workshop on building AI models',
    date: '2024-03-15',
    type: 'happening',
    location: 'Online Event',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1664299935896-8b7638a6f105',
    views: 110,
  },
  {
    id: '3',
    title: 'Past Seminar: AI in Education',
    description: 'Exploring the impact of AI on educational systems',
    date: '2024-02-28',
    type: 'completed',
    location: 'San Francisco Tech Center',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    views: 190,
  },
  {
    id: '4',
    title: 'AI Ethics Panel Discussion',
    description: 'Panel discussion on ethical considerations in AI',
    date: '2024-03-30',
    type: 'upcoming',
    location: 'Cambridge University',
    imageUrl: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70',
    views: 130,
  },
  {
    id: '5',
    title: 'AI in Finance Meetup',
    description: 'Networking event for AI professionals in finance',
    date: '2024-04-10',
    type: 'upcoming',
    location: 'London Financial District',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1705267936187-aceda1a6c1a6',
    views: 160,
  },
];

export const dummyRatings: Rating[] = [
  {
    id: '1',
    rating: 4.8,
    comment: 'Turbo Farm has completely transformed the way we approach agriculture. With its AI-driven insights and automation, we’ve seen a significant boost in crop yields while reducing resource usage. The real-time monitoring system is a game-changer, allowing us to address issues before they become problems. Not only has it made our operations more efficient, but it’s also helped us embrace sustainable farming practices. Turbo Farm is truly the future of agriculture!',
    userName: 'David Wisseman',
    date: '2024-03-10',
  },
  {
    id: '2',
    rating: 4.2,
    comment: 'Log AI has revolutionized our inventory management system. The AI-driven optimization has helped us maintain perfect stock levels, reducing both overstock and stockouts. The real-time tracking and predictive analytics have made our supply chain more efficient, and we’re now able to make data-driven decisions that save both time and money. The seamless integration with our existing systems was a huge plus. Log AI is a must-have for any business looking to streamline inventory operations and stay ahead of the competition!',
    userName: 'Michael Reed',
    date: '2024-03-08',
  },
  {
    id: '3',
    rating: 4.9,
    comment: 'As an investor, Stockk has completely changed the way I approach trading. The AI-powered insights and real-time market analysis have given me a huge advantage in making informed decisions. The automated trading feature has helped me execute trades at the right moments, even when I’m not able to monitor the market. Whether you’re a beginner or an experienced trader, Stockk simplifies the process while maximizing potential returns. It\'s an essential tool in my investment strategy!',
    userName: 'Sarah Lampard',
    date: '2024-03-05',
  },
  {
    id: '4',
    rating: 4.7,
    comment: 'LaundriQ is a groundbreaking innovation that perfectly complements Samsung’s commitment to smart home solutions. As a regional manager, I’ve seen firsthand how this AI-powered tool enhances the laundry experience for our customers. By intelligently detecting fabric quality and optimizing detergent usage, LaundriQ not only ensures superior cleaning results but also supports eco-friendly practices. This collaboration with LaundriQ aligns with our vision of creating smarter, more sustainable home appliances. It’s truly a game-changer in the world of laundry care.',
    userName: 'James Lee',
    date: '2024-03-12',
  },
];

export const dummyGallery: GalleryItem[] = [
  {
    id: '1',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998',
    title: 'AI Summit 2024',
    description: 'Keynote presentation at our annual summit',
    date: '2024-03-15',
    category: 'event',
  },
  {
    id: '2',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
    title: 'Team Innovation Day',
    description: 'Our team working on new AI solutions',
    date: '2024-03-10',
    category: 'company',
  },
  {
    id: '3',
    type: 'video',
    url: 'https://example.com/demo-video.mp4',
    title: 'Product Demo',
    description: 'Demonstration of our latest AI platform',
    date: '2024-03-05',
    category: 'company',
  },
  {
    id: '4',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f',
    title: 'AI Workshop',
    description: 'Participants at our recent AI workshop',
    date: '2024-03-18',
    category: 'event',
  },
  {
    id: '5',
    type: 'video',
    url: 'https://example.com/interview.mp4',
    title: 'Client Testimonial',
    description: 'Interview with a satisfied client about our AI services',
    date: '2024-03-20',
    category: 'testimonial',
  },
];


export const dummyContactForms: ContactForm[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    message: 'Hello, I would like to know more about your AI services.',
    date: '2024-03-20',
    phone: '123-456-7890',
    company: 'Doe Enterprises',
    country: 'USA',
    jobTitle: 'CEO',
    jobDetails: 'Oversees company operations',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    message: 'Could you please provide additional info regarding pricing?',
    date: '2024-03-22',
    phone: '123-456-7890',
    company: 'Acme Corporation',
    country: 'Canada',
    jobTitle: 'Data Scientist',
    jobDetails: 'Specializes in machine learning and data analysis'
  },
  {
    id: '3',
    name: 'Mark Johnson',
    email: 'mark@example.com',
    message: 'I’m interested in a custom AI solution for my business.',
    date: '2024-03-25',
    phone: '555-123-4567',
    company: 'Example Inc.',
    country: 'USA',
    jobTitle: 'Software Engineer',
    jobDetails: 'Experienced in JavaScript, React, and Node.js'
  },
];

export const dummyPastportfolios = [
  {
    id: '1',
    title: 'Turbo Farm',
    description: 'Turbo Farm is an advanced agricultural solution that leverages the power of artificial intelligence (AI) to revolutionize traditional farming methods. Designed to optimize efficiency, sustainability, and productivity, Turbo Farm integrates cutting-edge technologies to transform every aspect of farming operations.',
    keyFeatures: [
      'Real-time monitoring and analysis of soil health, crop conditions, and weather patterns.',
      'Automated decision-making for irrigation.'
    ]
  },
  {
    id: '2',
    title: 'Log AI',
    description: 'An innovative inventory management solution powered by artificial intelligence, designed to streamline and optimize inventory operations for businesses of all sizes. With intelligent automation, real-time analytics, and predictive capabilities, Log AI transforms how organizations manage stock, supply chains, and operational logistics.',
    keyFeatures: [
      'Automatically adjusts inventory levels based on demand forecasting and sales trends.',
      'Tracks inventory across warehouses, stores, and delivery networks with precision.',
      'Leverages AI to forecast future demand patterns and seasonal trends.',
      'Seamlessly integrates with existing ERP, POS, and supply chain systems.'
    ]
  },
  {
    id: '3',
    title: 'Stockk',
    description: 'Stockk is an AI-powered stock trading and investment tool designed to empower traders and investors with intelligent insights, real-time market analysis, and automated strategies. Whether you\'re a beginner or a seasoned investor, Stockk simplifies the complexities of stock trading while maximizing opportunities for growth and minimizing risks.',
    keyFeatures: [
      'Leverages advanced algorithms to analyze market trends, news, and historical data.',
      'Provides actionable insights and forecasts to help users make informed investment decisions.',
      'Suggests portfolio adjustments based on risk tolerance, goals, and market conditions.',
      'Accessible on multiple devices for seamless trading on the go.'
    ]
  },
  {
    id: '4',
    title: 'LaundriQ',
    description: 'LaundriQ is a cutting-edge AI-powered solution designed to redefine laundry care by delivering unparalleled convenience, precision, and fabric protection. Developed in collaboration with Samsung washing machines, LaundriQ leverages advanced artificial intelligence to analyze fabric quality, optimize detergent usage, and select the ideal washing mode for every load.',
    keyFeatures: [
      'Uses AI to assess fabric type, condition, and quality in real-time.',
      'Ensures gentle yet effective care tailored to each garment.',
      'Precisely calculates the required detergent amount based on load size, fabric sensitivity, and soil level.',
      'Minimizes water and energy usage through smart load assessment and cycle adjustments.',
      'Connects with Samsung SmartThings for remote control and monitoring.'
    ]
  }

];