import { api, requestConfig } from "../utils/config";

// Pegar todos os produtos
const getAllProducts = async () => {
  const config = requestConfig("GET");

  try {
    const res = await fetch(api + "/produtos/", config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const searchProducts = async (query, limit = 20, offset = 0) => {
  const config = requestConfig("GET");

  try {
    const encodedQuery = encodeURIComponent(query);
    const res = await fetch(
      api +
        `/produtos/searchProducts?q=${encodedQuery}&limit=${limit}&offset=${offset}`,
      config
    )
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const promotionProducts = async () => {
  const config = requestConfig("GET");

  try {
    const res = await fetch(api + "/produtos/promotion", config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const productService = {
  getAllProducts,
  searchProducts,
  promotionProducts,
};

export default productService;
