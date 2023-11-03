// Hooks
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Redux
import { promotionProducts } from "../../slices/productSlice";

// Components
import Navbar from "../../components/NavAndFooter/Navbar";
import ProductCard from "../../components/Product/ProductCard";
import ImageCarousel from "../../components/Carousel/Carousel";

// Image
import banner from "../../assets/Images/home/banner.jpg";
import futebol from "../../assets/Images/home/Futebol.jpg";

const Home = () => {
  const { products, loading } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(promotionProducts());
  }, [dispatch]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  const carouselImages = [banner, futebol];

  console.log(products);

  return (
    <main>
      <Navbar />
      <div className="flex items-center justify-center p-2 bg-gray-200">
        <p>Frete grátis</p>
      </div>
      <ImageCarousel images={carouselImages} />
      <div className="m-16">
        <div className="flex gap-2">
          {products && products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id_produto} product={product} />
            ))
          ) : (
            <p>Não foram encontrados produtos!</p>
          )}
        </div>
      </div>
      <div className="">
        <img
          src={futebol}
          style={{ maxHeight: "80vh", width: "100%" }}
          alt="Banner com frase"
        />
      </div>
      <div className="m-16">
        <div className="flex gap-2">
          {products && products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id_produto} product={product} />
            ))
          ) : (
            <p>Não foram encontrados produtos!</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
