import { sitePaths, withBase } from '../utils/sitePaths'

const portfolio = {
  identity: {
    name: 'Anupam Moharana',
    role: 'Full-Stack Web Developer',
    location: 'Bengaluru, India',
    email: 'anupam205@outlook.com',
    availability: 'Open to full-stack, backend, and product engineering roles',
  },
  navigation: [
    { id: 'home', label: 'Home', href: sitePaths.home },
    { id: 'experience', label: 'Experience', href: sitePaths.experience },
    { id: 'projects', label: 'Projects', href: sitePaths.projects },
    { id: 'lab', label: 'Lab', href: sitePaths.lab },
  ],
  hero: {
    eyebrow: 'Full-Stack Web Developer // Web Apps, APIs, Product Systems',
    headline: 'Building thoughtful web products from frontend polish to backend scale.',
    summary:
      'I work across frontend experiences, backend systems, APIs, and scalable product flows, with a strong focus on clean architecture, reliability, and user-facing clarity.',
    primaryCta: {
      label: 'Explore Experience',
      href: sitePaths.experience,
    },
    secondaryCta: {
      label: 'Open Projects',
      href: sitePaths.projects,
    },
    orbitNotes: [
      '10M+ secure sync operations/month',
      '92% test coverage on critical systems',
      'Cross-functional work in healthcare, fintech, and consulting',
    ],
  },
  about: {
    lead:
      'I work across modern frontend interfaces, backend services, integrations, and product-focused engineering. I care about shipping web experiences that feel polished on the surface and dependable underneath.',
    points: [
      'Java, Spring Boot, REST APIs, SQL, ReactJS, Material UI, JavaScript',
      'Test-driven development with JUnit and Mockito',
      'Cloud integration, workflow automation, and data processing pipelines',
    ],
  },
  focusAreas: [
    {
      title: 'Full-Stack Delivery',
      text: 'I like connecting frontend experience, backend logic, and product intent into one coherent flow.',
    },
    {
      title: 'System Reliability',
      text: 'Testing, automation, and predictable operational behavior are always part of the design.',
    },
    {
      title: 'Product-Aware Engineering',
      text: 'I like connecting technical implementation to how the product is used in the real world.',
    },
  ],
  portraits: {
    home: {
      title: 'Hero Scene',
      note: 'Reserved for a cinematic landing-page portrait generated from your reference photo.',
      variant: 'hero',
      image: withBase('images/anupam-hero.png'),
    },
    experience: {
      title: 'Timeline Mode',
      note: 'Use a sharper professional portrait here with a darker editorial treatment.',
      variant: 'timeline',
      image: withBase('images/anupam-experience.png'),
    },
    projects: {
      title: 'Builder Mode',
      note: 'Good spot for a futuristic desk or code-lab style portrait background.',
      variant: 'project',
      image: withBase('images/anupam-projects.png'),
    },
    lab: {
      title: 'Experimental Mode',
      note: 'This one can be playful, neon, surreal, or more stylized than the rest.',
      variant: 'lab',
      image: withBase('images/anupam-lab.png'),
    },
  },
  experience: [
    {
      company: 'GE HealthCare',
      logo: withBase('images/logos/ge-healthcare.png'),
      title: 'Software Engineer',
      location: 'Bengaluru',
      start: '2024-07',
      end: null,
      type: 'Full-time',
      summary:
        'Owning backend services, transformation pipelines, and quality improvements for healthcare systems with high-throughput synchronization needs.',
      highlights: [
        'Engineered scalable backend services using Java, Spring Boot, and REST APIs, supporting 10M+ secure data sync operations per month.',
        'Built transformation pipelines for structured and semi-structured formats, improving processing efficiency by 30% and accuracy by 60%.',
        'Raised unit and integration test coverage from 55% to 92% using JUnit, Mockito, and test-driven practices.',
        'Automated scheduled data fetching and generation workflows, reducing manual operations by 70%.',
      ],
      stack: ['Java', 'Spring Boot', 'REST APIs', 'ReactJS', 'Material UI'],
    },
    {
      company: 'Infinisync Consulting',
      logo: withBase('images/logos/infinisync-consulting.png'),
      title: 'Software Consultant',
      location: 'New Delhi',
      start: '2024-04',
      end: '2025-03',
      type: 'Consulting',
      summary:
        'Worked with an international client on integration-heavy delivery and marketplace system design.',
      highlights: [
        'Led delivery across an EDI integration initiative and a marketplace platform digitizing an offline business.',
        'Architected the system design for the marketplace platform, including schema, APIs, services, and third-party integrations.',
        'Improved transaction scalability by 3x through backend and API design decisions.',
      ],
      stack: ['Java', 'Spring Boot', 'REST APIs', 'Cloud Integration'],
    },
    {
      company: 'GE HealthCare',
      logo: withBase('images/logos/ge-healthcare.png'),
      title: 'Software Development Intern',
      location: 'Bengaluru',
      start: '2023-09',
      end: '2024-06',
      type: 'Internship',
      summary:
        'Built backend capabilities for Portrait Mobile and supported healthcare telemetry workflows.',
      highlights: [
        'Implemented and maintained backend for Portrait Mobile using Java, Microservices, and Go.',
        'Improved NTP process handling and reduced latency by 20% with more scalable process logic.',
      ],
      stack: ['Java', 'Microservices', 'Go'],
    },
    {
      company: 'HighRadius Technologies',
      logo: withBase('images/logos/highradius-technologies.png'),
      title: 'Product and Engineering Intern',
      location: 'Bhubaneswar',
      start: '2023-04',
      end: '2023-09',
      type: 'Internship',
      summary:
        'Worked on AI-enabled fintech workflows and product-oriented engineering delivery.',
      highlights: [
        'Delivered an AI-enabled FinTech cloud application with integrated ML pipelines, improving credit decision accuracy by 45%.',
        'Led the CRD-Dev project and cut credit processing time by 50%.',
      ],
      stack: ['AI', 'ML', 'Product Engineering'],
    },
  ],
  projects: [
    {
      name: 'Portrait Mobile',
      category: 'Healthcare Backend',
      period: 'Sep 2023 - Jun 2024',
      highlight: 'Real-time telemetry support',
      description:
        'Developed and maintained backend services for a mobile healthcare telemetry application with reliable real-time data synchronization.',
      details: [
        'Focused on backend service maintenance and telemetry-aligned workflows.',
        'Improved processing behavior and reduced latency by 20% through systems-level optimization.',
      ],
      stack: ['Java', 'Microservices', 'Go'],
      status: 'Shipped',
    },
    {
      name: 'AI-Enabled FinTech B2B Cloud App',
      category: 'FinTech + AI',
      period: 'Apr 2023 - Sep 2023',
      highlight: '45% improvement in decision accuracy',
      description:
        'An AI-driven cloud application built to automate credit decisions and streamline workflow-heavy financial operations.',
      details: [
        'Integrated ML pipelines into the product flow instead of treating intelligence as a separate layer.',
        'Reduced workflow processing time by 50% through engineering and product process improvements.',
      ],
      stack: ['AI', 'ML', 'Cloud App'],
      status: 'Shipped',
    },
    {
      name: 'Weather Prediction from Geo-Spectral Images',
      category: 'Research Project',
      period: 'Jan 2023 - Sep 2023',
      highlight: 'RNN-based prediction workflow',
      description:
        'Built an RNN-based model to predict weather patterns from geo-spectral image data with improved preprocessing and tuning.',
      details: [
        'Worked on model parameter optimization and cleaner preprocessing pipelines.',
        'Kept the build academic but structured enough to speak about system thinking, not just experimentation.',
      ],
      stack: ['Python', 'RNN', 'Data Preprocessing'],
      status: 'Explored',
    },
    {
      name: 'Next Case Study',
      category: 'Placeholder',
      period: 'To be added',
      highlight: 'Reserved for a future deep-dive',
      description:
        'Use this card for a polished case study with architecture diagrams, API design notes, screenshots, or delivery tradeoffs.',
      details: [
        'Placeholder: add a project with a stronger end-to-end system story here.',
        'Placeholder: include links, repo notes, or design decisions when you are ready.',
      ],
      stack: ['Placeholder', 'Architecture', 'Storytelling'],
      status: 'Coming Soon',
    },
  ],
  experiments: [
    {
      id: 'signal',
      title: 'Signal Room',
      hint: 'Click to reveal what I optimize for.',
      reveal: 'I care most about reliability, clarity, and systems that stay calm under load.',
    },
    {
      id: 'portal',
      title: 'Portal Log',
      hint: 'A hidden note from the engineering floor.',
      reveal: 'The best backend work is often invisible until it fails, so I build it to fail less loudly.',
    },
    {
      id: 'artifact',
      title: 'Future Artifact',
      hint: 'Reserved for a deeper case study later.',
      reveal: 'Placeholder unlocked: add a system design walkthrough, production incident story, or architecture sketch here.',
    },
  ],
  contact: {
    title: 'Let’s Connect',
    summary:
      'I am open to software engineering roles and collaborations involving backend systems, APIs, cloud-connected products, and scalable application development.',
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anupam-moharana/' },
      { label: 'GitHub', href: 'https://github.com/anupam5972' },
      { label: 'Email', href: 'mailto:anupam205@outlook.com' },
    ],
  },
}

export default portfolio
