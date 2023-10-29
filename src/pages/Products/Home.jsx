// Hooks
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Redeux
import { getAllProducts } from "../../slices/productSlice";

// Components
import Navbar from "../../components/NavAndFooter/Navbar";
import ProductCard from "../../components/Product/ProductCard";

// Image
import jordan from "../../assets/Images/home/jordan3.png";

const Home = () => {
  const { products, loading } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <main>
      <Navbar />
      <div className="flex items-center justify-center w-full bg-sBlack h-96">
        <div className="flex flex-col gap-2">
          <p className="font-extrabold text-white">Air Jordan 1 Retro</p>
          <div className="text-center font-extrabold rounded-sm bg-white p-2">
            Compre agora
          </div>
        </div>
        <img
          src={jordan}
          style={{ maxHeight: "80vh", width: "25%" }}
          alt="Banner com frase"
        />
      </div>
      <div>
        {products.data && products.data.length > 0 ? (
          products.data.map((product) => (
            <ProductCard key={product.id_produto} product={product} />
          ))
        ) : (
          <p>Não foram encontrados produtos!</p>
        )}
      </div>
    </main>
  );
};

export default Home;
