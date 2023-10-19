import { api, requestConfig } from "../utils/config";

// Registrar cliente
const registerClient = async (data) => {
  const config = requestConfig("POST", data);

  try {
    const res = await fetch(api + "/clientes/cadastro", config)
      .then((res) => res.json())
      .catch((err) => err);

    if (res) {
      localStorage.setItem("cliente", JSON.stringify(res));
    }
  } catch (error) {
    console.log(error);
  }
};

const authService = {
  registerClient,
};

export default authService;
