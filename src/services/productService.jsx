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

const productService = {
  getAllProducts,
};

export default productService;
