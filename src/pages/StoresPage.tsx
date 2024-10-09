import React, { useState } from 'react';

interface Store {
  id: number;
  name: string;
  imageUrl: string;
  products: Product[];
}

interface Product {
  id: number;
  name: string;
  price: number;
}

const stores: Store[] = [
  {
    id: 1,
    name: 'Loja Nike',
    imageUrl: 'https://via.placeholder.com/100', // Substitua pelo link da imagem da loja
    products: [
      { id: 1, name: 'Nike Air Max', price: 299.99 },
      { id: 2, name: 'Nike Revolution', price: 199.99 },
    ],
  },
  {
    id: 2,
    name: 'Loja Adidas',
    imageUrl: 'https://via.placeholder.com/100', // Substitua pelo link da imagem da loja
    products: [
      { id: 1, name: 'Adidas Ultraboost', price: 349.99 },
      { id: 2, name: 'Adidas Superstar', price: 249.99 },
    ],
  },
  // Adicione mais lojas e produtos conforme necessário
];

const StoresPage: React.FC = () => {
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);

  const handleStoreClick = (store: Store) => {
    setSelectedStore(store);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Lojas</h1>

      {/* Grid de Lojas */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
        {stores.map((store) => (
          <div
            key={store.id}
            className={`p-4 text-center border rounded-lg cursor-pointer ${selectedStore?.id === store.id ? 'border-blue-500' : 'border-gray-300'
              }`}
            onClick={() => handleStoreClick(store)}
          >
            <img
              src={store.imageUrl}
              alt={store.name}
              className="w-24 h-24 rounded-full mx-auto mb-2"
            />
            <h2 className="text-lg font-semibold">{store.name}</h2>
          </div>
        ))}
      </div>

      {/* Listagem de Produtos da Loja Selecionada */}
      {selectedStore && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-center mb-4">
            Produtos da {selectedStore.name}
          </h2>
          <ul className="space-y-4">
            {selectedStore.products.map((product) => (
              <li
                key={product.id}
                className="flex justify-between items-center p-4 bg-white shadow-lg rounded-lg"
              >
                <span>{product.name}</span>
                <span className="text-gray-700 font-semibold">R$ {product.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default StoresPage;
