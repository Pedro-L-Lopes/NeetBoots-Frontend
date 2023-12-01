import React from "react";
import { uploads } from "../../utils/config";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/produto/${product.id_produto}`}>
      <div className="flex flex-col gap-2 w-72 h-80">
        <div className="">
          {product &&
            product.imagens.length > 0 &&
            product.imagens.map((imagem, index) => (
              <img
                key={index}
                width={150}
                src={`${uploads}/produtos/${imagem.imagem}`}
                alt={`Imagem do produto ${product.nome}`}
                className="w-72"
              />
            ))}
        </div>
        <div className="font-bold text-lg ml-2 mt-2">
          <h2>{product.nome}</h2>
          {product.em_promocao === 0 ? (
            <p>R$ {product.preco}</p>
          ) : (
            <section className="flex gap-2">
              <p className="opacity-30 line-through">R$ {product.preco}</p>
              <p className="text-green-600">R$ {product.preco_promocional}</p>
            </section>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
