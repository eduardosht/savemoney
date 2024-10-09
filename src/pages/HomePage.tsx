import React from 'react';
import ProductGrid from '../components/ProductGrid';

import ImageDesconto from '../assets/desconto.jpg'

const HomePage: React.FC = () => {
  return (
    <div>
      <header className="w-full h-screen flex">
        {/* Imagem à esquerda, ocupando 50% */}
        <div className="w-1/2 h-full">
          <img
            src={ImageDesconto}
            alt="Promoção"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Sessão de Texto à direita, ocupando 50% */}
        <div className="w-1/2 h-full flex items-center justify-center bg-gray-100">
          <div className="p-8 text-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">Descontos de até 50%</h1>
            <p className="text-xl text-gray-600">
              Os produtos mais procurados com os preços mais baixos
            </p>
          </div>
        </div>
      </header>

      <ProductGrid />
    </div>
  );
};

export default HomePage;
