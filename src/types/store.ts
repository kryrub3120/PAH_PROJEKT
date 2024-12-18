export interface Product {
  id: string;
  slug: string;
  title: string;
  description: string;
  price: number;
  coverImage: string;
  downloadUrl?: string;
  type: 'ebook' | 'dataset' | 'template';
}