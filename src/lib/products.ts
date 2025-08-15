export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: 'mens' | 'womens' | 'kids';
  subcategory: 'hoodies' | 'tees' | 'pants' | 'dresses' | 'jackets' | 'accessories';
  sizes: string[];
  colors: string[];
  images: string[];
  inStock: boolean;
  featured: boolean;
  badge?: 'HOT' | 'NEW' | 'SALE' | 'LIMITED';
  tags: string[];
}

export const products: Product[] = [
  // Men's Collection
  {
    id: 'mens-trusted-hoodie-black',
    name: 'TRUSTED SIGNATURE HOODIE',
    description: 'Premium heavyweight cotton hoodie with embroidered TRUSTED logo. Street culture meets luxury comfort in this essential piece.',
    price: 120,
    originalPrice: 150,
    category: 'mens',
    subcategory: 'hoodies',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Concrete Gray', 'Orange'],
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1000&auto=format&fit=crop',
    ],
    inStock: true,
    featured: true,
    badge: 'HOT',
    tags: ['streetwear', 'premium', 'signature', 'urban'],
  },
  {
    id: 'mens-street-culture-tee',
    name: 'STREET CULTURE TEE',
    description: 'Bold graphic tee celebrating NYC street art culture. 100% organic cotton with water-based ink prints.',
    price: 45,
    category: 'mens',
    subcategory: 'tees',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Gray'],
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583743089650-ca86b1e1ef78?q=80&w=1000&auto=format&fit=crop',
    ],
    inStock: true,
    featured: true,
    badge: 'NEW',
    tags: ['graphics', 'culture', 'nyc', 'organic'],
  },
  {
    id: 'mens-urban-cargo-pants',
    name: 'URBAN CARGO PANTS',
    description: 'Tactical-inspired cargo pants with multiple pockets and adjustable straps. Perfect for the streets.',
    price: 85,
    category: 'mens',
    subcategory: 'pants',
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: ['Black', 'Olive', 'Concrete'],
    images: [
      'https://images.unsplash.com/photo-1506629905607-206b4dbe8b9b?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000&auto=format&fit=crop',
    ],
    inStock: true,
    featured: true,
    badge: 'SALE',
    tags: ['cargo', 'tactical', 'utility', 'streetwear'],
  },
  {
    id: 'mens-graffiti-bomber',
    name: 'GRAFFITI BOMBER JACKET',
    description: 'Limited edition bomber jacket featuring exclusive graffiti artwork by NYC street artists.',
    price: 200,
    category: 'mens',
    subcategory: 'jackets',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Concrete'],
    images: [
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop',
    ],
    inStock: true,
    featured: true,
    badge: 'LIMITED',
    tags: ['bomber', 'graffiti', 'artist', 'limited'],
  },

  // Women's Collection
  {
    id: 'womens-trusted-crop-hoodie',
    name: 'TRUSTED CROP HOODIE',
    description: 'Cropped fit hoodie with bold TRUSTED branding. Street luxury redefined for the modern woman.',
    price: 95,
    category: 'womens',
    subcategory: 'hoodies',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Orange', 'White'],
    images: [
      'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544966503-7cc5ac882d5d?q=80&w=1000&auto=format&fit=crop',
    ],
    inStock: true,
    featured: true,
    badge: 'NEW',
    tags: ['crop', 'women', 'luxury', 'streetwear'],
  },
  {
    id: 'womens-culture-dress',
    name: 'CULTURE BODYCON DRESS',
    description: 'Form-fitting dress with abstract street art prints. Perfect for urban nights out.',
    price: 75,
    category: 'womens',
    subcategory: 'dresses',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Gray'],
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566479179817-5ba9f9c5e6b0?q=80&w=1000&auto=format&fit=crop',
    ],
    inStock: true,
    featured: false,
    tags: ['dress', 'bodycon', 'streetart', 'urban'],
  },
  {
    id: 'womens-oversized-tee',
    name: 'OVERSIZED GRAPHIC TEE',
    description: 'Relaxed fit tee with exclusive TRUSTED graphics. Comfortable and stylish.',
    price: 50,
    category: 'womens',
    subcategory: 'tees',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Gray', 'Orange'],
    images: [
      'https://images.unsplash.com/photo-1582162833780-51e9c66b9f84?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586035758139-96b621a30da9?q=80&w=1000&auto=format&fit=crop',
    ],
    inStock: true,
    featured: false,
    tags: ['oversized', 'graphics', 'comfort', 'casual'],
  },

  // Kids Collection
  {
    id: 'kids-mini-trusted-hoodie',
    name: 'MINI TRUSTED HOODIE',
    description: 'Kid-sized version of our signature hoodie. Future culture leaders start here.',
    price: 60,
    category: 'kids',
    subcategory: 'hoodies',
    sizes: ['2T', '3T', '4T', '5T', '6', '8', '10', '12'],
    colors: ['Black', 'Gray', 'Orange'],
    images: [
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519554318711-a702c7d4d7ee?q=80&w=1000&auto=format&fit=crop',
    ],
    inStock: true,
    featured: true,
    tags: ['kids', 'mini', 'signature', 'culture'],
  },
  {
    id: 'kids-future-leader-tee',
    name: 'FUTURE LEADER TEE',
    description: 'Inspiring graphic tee for the next generation of culture creators.',
    price: 30,
    category: 'kids',
    subcategory: 'tees',
    sizes: ['2T', '3T', '4T', '5T', '6', '8', '10', '12'],
    colors: ['Black', 'White', 'Gray'],
    images: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1000&auto=format&fit=crop',
    ],
    inStock: true,
    featured: false,
    tags: ['kids', 'future', 'leader', 'inspiration'],
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: 'mens' | 'womens' | 'kids'): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product =>
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};
