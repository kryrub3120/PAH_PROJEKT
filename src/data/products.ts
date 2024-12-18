import { Product } from '../types/store';

export const products: Product[] = [
  {
    id: '1',
    slug: 'height-measurement-guide',
    title: 'How to Measure Height and Sitting Height',
    description: 'A comprehensive guide providing detailed instructions for accurate measurement techniques and data collection methods. Learn professional approaches to ensure reliable height and sitting height measurements for research and monitoring purposes.',
    price: 9,
    coverImage: 'https://images.unsplash.com/photo-1584467541268-b040f83be3fd?auto=format&fit=crop&w=600&h=800',
    type: 'ebook',
  },
  {
    id: '2',
    slug: 'height-dataset-tool',
    title: 'Height Measurement Dataset Tool',
    description: 'A professional tool designed for recording and analyzing height and sitting height measurements. Features automatic chart generation for easy data visualization, trend analysis, and progress tracking.',
    price: 5,
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=800',
    type: 'dataset',
  },
];