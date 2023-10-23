// Components
import { Link } from "react-router-dom";
import Message from "../../components/Message/Message";

// Hooks
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Redux
import { loginClient, reset } from "../../slices/clientAuthSlice";

const Login = () => {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  const dispacth = useDispatch();

  const { loading, error } = useSelector((state) => state.authClient);

  const handleSubmit = (e) => {
    e.preventDefault();

    const client = {
      email,
      senha,
    };

    dispacth(loginClient(client));
  };

  useEffect(() => {
    dispacth(reset());
  }, [dispacth]);

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email || ""}
        />
        <input
          type="password"
          placeholder="Senha"
          onChange={(e) => setSenha(e.target.value)}
          value={senha || ""}
        />
        {!loading && <input type="submit" value="Entrar" />}
        {loading && <input type="submit" value="Carregando" disabled />}
        {error && <Message msg={error} type="error" />}
      </form>
    </div>
  );
};

export default Login;
