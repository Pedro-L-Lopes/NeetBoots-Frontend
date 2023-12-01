import { api, requestConfig } from "../utils/config";

// Pegar todos os produtos
const getAllBrands = async () => {
  const config = requestConfig("GET");

  try {
    const res = await fetch(api + "/bc/brands", config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const brandService = {
  getAllBrands,
};

export default brandService;
