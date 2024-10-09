import React from 'react';

interface Product {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  originalPrice: number;
  discountedPrice: number;
}

const products: Product[] = [
  {
    id: 1,
    title: 'Nike Air Max',
    category: 'Tênis Masculino',
    imageUrl: 'https://static.nike.com.br/Hermes/rendering/446x446px/air-max.jpg',
    originalPrice: 999.99,
    discountedPrice: 799.99,
  },
  {
    id: 2,
    title: 'Nike Revolution',
    category: 'Tênis Feminino',
    imageUrl: 'https://static.nike.com.br/Hermes/rendering/446x446px/nike-revolution.jpg',
    originalPrice: 399.99,
    discountedPrice: 299.99,
  },
  {
    id: 3,
    title: 'Nike Zoom Fly',
    category: 'Tênis Unissex',
    imageUrl: 'https://static.nike.com.br/Hermes/rendering/446x446px/nike-zoom-fly.jpg',
    originalPrice: 1099.99,
    discountedPrice: 849.99,
  },
  {
    id: 4,
    title: 'Nike Zoom Fly',
    category: 'Tênis Unissex',
    imageUrl: 'https://static.nike.com.br/Hermes/rendering/446x446px/nike-zoom-fly.jpg',
    originalPrice: 1099.99,
    discountedPrice: 849.99,
  },
  {
    id: 5,
    title: 'Nike Zoom Fly',
    category: 'Tênis Unissex',
    imageUrl: 'https://static.nike.com.br/Hermes/rendering/446x446px/nike-zoom-fly.jpg',
    originalPrice: 1099.99,
    discountedPrice: 849.99,
  },
  {
    id: 6,
    title: 'Nike Zoom Fly',
    category: 'Tênis Unissex',
    imageUrl: 'https://static.nike.com.br/Hermes/rendering/446x446px/nike-zoom-fly.jpg',
    originalPrice: 1099.99,
    discountedPrice: 849.99,
  },
  {
    id: 7,
    title: 'Nike Zoom Fly',
    category: 'Tênis Unissex',
    imageUrl: 'https://static.nike.com.br/Hermes/rendering/446x446px/nike-zoom-fly.jpg',
    originalPrice: 1099.99,
    discountedPrice: 849.99,
  },
];

const ProductGrid: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Produtos em Promoção</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-lg bg-white">
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-64 object-cover mb-4"
            />
            <h2 className="text-lg font-bold mb-2">{product.title}</h2>
            <p className="text-gray-500 mb-2">{product.category}</p>
            <div className="flex items-center justify-between">
              <p className="text-gray-500 line-through">R$ {product.originalPrice.toFixed(2)}</p>
              <p className="text-red-500 font-bold">R$ {product.discountedPrice.toFixed(2)}</p>
            </div>
            <p className="text-green-600 font-semibold">
              {Math.round(
                ((product.originalPrice - product.discountedPrice) / product.originalPrice) * 100
              )}% OFF
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
