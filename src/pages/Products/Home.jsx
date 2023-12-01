// Hooks
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Redux
import { promotionProducts } from "../../slices/productSlice";
import { getAllBrands } from "../../slices/brandSlice";

// Components
import Navbar from "../../components/NavAndFooter/Navbar";
import ProductCard from "../../components/Product/ProductCard";
import ImageCarousel from "../../components/Carousel/Carousel";
import Carouselcoupon from "../../components/Carousel/carouselcoupon";
import CarouselBrands from "../../components/Carousel/CarouselBrands";

// Image
import banner from "../../assets/Images/home/banner.jpg";
import futebol from "../../assets/Images/home/Futebol.jpg";

// Icons
import { RiCoupon2Line } from "react-icons/ri";
import { LiaShippingFastSolid } from "react-icons/lia";

const Home = () => {
  const { products, loading } = useSelector((state) => state.product);
  const { brands, loading: brandsLoading } = useSelector(
    (state) => state.brand
  );

  console.log(brands);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(promotionProducts());
    dispatch(getAllBrands());
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
      icon: <LiaShippingFastSolid size={25} />,
      text: "Frete grátis nas compras acima de R$ 199,99",
      link: "/",
    },
    {
      icon: <RiCoupon2Line size={25} />,
      text: "20% de desconto com o cupom: gordaometodologias",
      link: "/",
    },
  ];

  return (
    <main>
      <Navbar />
      <Carouselcoupon itens={carouselCoupons} />
      <ImageCarousel images={carouselImages} />
      <div className="m-16">
        <h1>
          Ultimas Ofertas <span className="text-blue-600 ml-1">ver mais</span>
        </h1>
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
      {/* <CarouselBrands brands={brands.data} /> */}
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
