import { ResearchArea } from './types';
import { ResearchIcons } from './icons';

export const researchAreas: Omit<ResearchArea, 'icon'>[] = [
  {
    iconKey: 'talent',
    title: 'Talent Identification in Football',
    description: 'Comprehensive research on factors influencing football success, including physical attributes, motor skills, and developmental timing.',
    color: 'bg-blue-50',
  },
  {
    iconKey: 'development',
    title: 'Motor Development in Children and Adolescents',
    description: 'Analysis of physical and motor development patterns and their impact on sports performance across different age groups.',
    color: 'bg-green-50',
  },
  {
    iconKey: 'growth',
    title: 'Peak Height Velocity (PHV)',
    description: 'Investigation of growth spurts and their role in athlete progression, focusing on optimal training adaptations during key developmental phases.',
    color: 'bg-purple-50',
  },
];