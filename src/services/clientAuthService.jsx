import { api, requestConfig } from "../utils/config";

// Registrar cliente
const registerClient = async (data) => {
  const config = requestConfig("POST", data);

  try {
    const res = await fetch(api + "/clientes/cadastro", config)
      .then((res) => res.json())
      .catch((err) => err);

    if (res.id) {
      localStorage.setItem("cliente", JSON.stringify(res));
    }

    return res;
  } catch (error) {
    console.log(error);
  }
};

// Sair da conta
const logout = () => {
  localStorage.removeItem("cliente");
};

// Entrar na conta
const login = async (data) => {
  const config = requestConfig("POST", data);

  try {
    const res = await fetch(api + "/clientes/login", config)
      .then((res) => res.json())
      .catch((err) => err);

    if (res.id) {
      localStorage.setItem("cliente", JSON.stringify(res));
    }

    return res;
  } catch (error) {
    console.log(error);
  }
};

const authService = {
  registerClient,
  logout,
  login,
};

export default authService;
