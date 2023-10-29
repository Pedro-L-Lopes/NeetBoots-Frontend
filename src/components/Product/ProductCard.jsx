import React from "react";
import { uploads } from "../../utils/config";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-red-500 w-24">
      <div className="w-24 h-24">
        {product.imagens.map((imagem, index) => (
          <img
            key={index}
            width={150}
            src={`${uploads}/produtos/${imagem.imagem}`}
            alt={`Imagem do produto ${product.nome}`}
          />
        ))}
      </div>
      <h2>{product.nome}</h2>
      <p>R$ {product.preco}</p>
    </div>
  );
};

export default ProductCard;
