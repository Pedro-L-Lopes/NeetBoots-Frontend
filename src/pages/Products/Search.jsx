import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "../../hooks/useQuery";
import { searchProducts } from "../../slices/productSlice";
import Navbar from "../../components/NavAndFooter/Navbar";
import ProductCard from "../../components/Product/ProductCard";

const Search = () => {
  const query = useQuery();
  const search = query.get("q");

  const dispatch = useDispatch();

  const { products, loading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(searchProducts(search));
  }, [dispatch, search]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  console.log(products);

  return (
    <div>
      <Navbar />
      <div>
        <h2>Resultados para: {search}</h2>
      </div>
      <div className="flex gap-2">
        {products.data && products.data.length > 0 ? (
          products.data.map((product) => (
            <ProductCard key={product.id_produto} product={product} />
          ))
        ) : (
          <p>Não foram encontrados produtos!</p>
        )}
      </div>
    </div>
  );
};

export default Search;
