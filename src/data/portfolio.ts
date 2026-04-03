export const site = {
  name: 'Kasim Ishaque Ghanchi',
  title: 'Machine Learning Engineer | AI Researcher | Deep Learning Systems',
  tagline:
    'Building intelligent AI systems using deep learning, computer vision, and NLP to solve real-world problems at scale.',
} as const

export const about = {
  paragraphs: [
    'I am a Machine Learning-focused Computer Engineering undergraduate at Vidyalankar Institute of Technology, currently working as an Undergraduate Researcher in Deep Learning and AI systems. My work revolves around designing, training, and evaluating modern neural architectures including CNNs and transformer-based models.',
    'I have hands-on experience in building end-to-end machine learning pipelines—from data preprocessing and feature engineering to model training, evaluation, and deployment. I actively work with frameworks like PyTorch and TensorFlow to implement scalable AI solutions across domains such as computer vision and natural language processing.',
    'Currently, I am developing a deep learning–based skin disease detection system and exploring advanced architectures to improve model generalization and real-world applicability. My goal is to contribute to impactful AI research and build production-ready intelligent systems.',
  ],
} as const

export const currentRole = {
  title: 'Undergraduate Researcher — Machine Learning & Deep Learning',
  org: 'Vidyalankar Institute of Technology, Mumbai',
  duration: 'June 2025 – Present',
  highlights: [
    'Developing skin disease detection system (23 classes)',
    'Building full deep learning pipeline: preprocessing, augmentation, train–validation split',
    'Training CNN models using PyTorch & TensorFlow',
    'Evaluating using accuracy, precision / recall, and confusion matrix',
    'Creating web-based inference system',
  ],
} as const

export type Project = {
  id: string
  name: string
  badge: string
  domain: string
  summary: string
  highlights: readonly string[]
  impact: string
}

export const projects: readonly Project[] = [
  {
    id: 'skin-disease',
    name: 'Skin Disease Detection System',
    badge: 'Research',
    domain: 'Computer Vision · Deep Learning',
    summary:
      'Built a multi-class dermatological image classification system using deep learning to detect 23 different skin diseases.',
    highlights: [
      'Dataset preprocessing & augmentation',
      'CNN model design and training',
      'Performance evaluation using advanced metrics',
      'Real-time prediction interface (web-based)',
    ],
    impact:
      'Demonstrates applied AI in healthcare with real-world deployment capability.',
  },
  {
    id: 'eit-scoring',
    name: 'Automated EIT Scoring System',
    badge: 'NLP',
    domain: 'NLP · AI Evaluation',
    summary:
      'Developed an automated scoring system for language proficiency evaluation using Natural Language Processing.',
    highlights: [
      'Text normalization & tokenization pipeline',
      'Alignment-based scoring system',
      'Error analysis + linguistic metrics',
      'Synthetic dataset generation',
      "Reliability testing using Cohen's Kappa",
    ],
    impact: 'Shows strong understanding of NLP pipelines and evaluation systems.',
  },
  {
    id: 'fossee-openfoam',
    name: 'FOSSEE OpenFOAM GUI + Blender Integration',
    badge: 'Systems',
    domain: 'Python · 3D · Scientific Software',
    summary:
      'Built tools integrating data structures and Blender API for automated 3D mesh generation and manipulation.',
    highlights: [
      'Binary tree implementation',
      'YAML parsing & serialization',
      'Blender UI plugin development',
      'Dynamic mesh generation algorithms',
    ],
    impact: 'Unique project combining data structures, graphics, and real-world application.',
  },
] as const

export const skillGroups = [
  {
    title: 'Programming',
    icon: 'code' as const,
    items: ['Python', 'C', 'Java', 'SQL'],
  },
  {
    title: 'AI / ML / DL',
    icon: 'brain' as const,
    items: ['PyTorch', 'TensorFlow', 'scikit-learn', 'ANN, CNN, Transformers'],
  },
  {
    title: 'Data Science',
    icon: 'chart' as const,
    items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Tableau', 'Power BI'],
  },
  {
    title: 'Tools',
    icon: 'wrench' as const,
    items: ['Jupyter Notebook', 'Google Colab', 'Git & GitHub', 'Kaggle'],
  },
  {
    title: 'Backend / Deployment',
    icon: 'server' as const,
    items: ['Flask', 'FastAPI'],
  },
  {
    title: 'Data Collection',
    icon: 'globe' as const,
    items: ['BeautifulSoup', 'Selenium', 'Requests'],
  },
] as const

export const education = [
  {
    title: 'B.Tech in Computer Engineering',
    place: 'Vidyalankar Institute of Technology, Mumbai',
    period: '2024–2028',
  },
  {
    title: 'HSC: 75%',
    place: 'Pace Science Junior College',
    period: '',
  },
  {
    title: 'SSC: 85%',
    place: 'Mount Mary High School',
    period: '',
  },
] as const

export const certifications = [
  'Machine Learning Specialization — Andrew Ng',
  'Deep Learning Specialization — Andrew Ng (Ongoing)',
] as const

export const researchInterests = [
  'Machine Learning',
  'Deep Learning Architectures',
  'Natural Language Processing',
  'Computer Vision',
  'AI Evaluation Systems',
] as const

export const contact = {
  email: 'kasimghanchi672@gmail.com',
  phone: '+91 7021516505',
  phoneHref: 'tel:+917021516505',
  github: 'https://github.com/kasim672',
  linkedin: 'https://www.linkedin.com/in/kasimghanchi/',
} as const

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'role', label: 'Role' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
] as const
