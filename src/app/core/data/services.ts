import { Service } from '../models/service.model';

export const SERVICES: Service[] = [
  {
    id: 'haircuts',
    name: 'Precision Haircuts',
    image: '/images/precision-haircut.png',
    imageAlt: 'Precision haircut performed at Victory Barbershop',
    description:
      'From timeless cuts to modern styles, every haircut is tailored to your look. Expect clean lines, attention to detail, and a finish that leaves you looking sharp.',
    highlights: [
      'Classic & Modern Styles',
      'Fades & Tapers',
      'Personalized Cuts'
    ]
  },
  {
    id: 'razor-shaves',
    name: 'Traditional Straight Razor Shaves',
    image: '/images/victory-barbershop-razor-shaves.jpg',
    imageAlt: 'Traditional straight razor shave at Victory Barbershop',
    description:
      'Experience traditional barbering with a straight razor shave. Enjoy a close, clean finish and the attention to detail that makes this classic service stand out.',
    highlights: [
      'Traditional Technique',
      'Close, Clean Finish',
      'Classic Grooming'
    ]
  },
  {
    id: 'beard-grooming',
    name: 'Beard Grooming & Sculpting',
    image: '/images/victory-barbershop-beard-grooming.jpg',
    imageAlt: 'Professional beard grooming and sculpting',
    description:
      'Keep your beard looking its best with careful shaping, clean lines, and a style that complements your look. Every detail matters.',
    highlights: [
      'Beard Shaping',
      'Clean Lineups',
      'Detailed Finishing'
    ]
  }
];