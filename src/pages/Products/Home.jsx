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

// Icons
import { RiCoupon2Line } from "react-icons/ri";
import { LiaShippingFastSolid } from "react-icons/lia";
import Carouselcoupon from "../../components/Carousel/carouselcoupon";

const Home = () => {
  const { products, loading } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(promotionProducts());
  }, [dispatch]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  const carouselImages = [
    { image: banner, link: "/promotion" },
    { image: futebol, link: "/categorias" },
  ];

  const carouselCoupons = [
    {
      icon: <RiCoupon2Line size={25} />,
      text: "Frete grátis nas compras acima de R$ 199,99",
      link: "/",
    },
    {
      icon: <LiaShippingFastSolid size={25} />,
      text: "20% de desconto com o cupom: gordaometodologias",
      link: "/",
    },
  ];

  return (
    <main>
      <Navbar />
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
      <Carouselcoupon itens={carouselCoupons} />
      <div className="flex items-center justify-center">
        <img
          src={futebol}
          className="object-cover"
          style={{ maxHeight: "20vh", width: "70%" }}
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
