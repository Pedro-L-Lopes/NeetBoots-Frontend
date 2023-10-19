// Components
import { Link } from "react-router-dom";

// Hooks
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Redux
import { registerClient, reset } from "../../slices/clientAuthSlice";

const Register = () => {
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [confirmacaoSenha, setconfirmacaoSenha] = useState();
  const [telefone, setTelefone] = useState();
  const [dataNascimento, setDataNascimento] = useState();
  const [genero, setGenero] = useState();

  const dispacth = useDispatch();

  const { loading, error } = useSelector((state) => state.authClient);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      nome,
      email,
      senha,
      confirmacaoSenha,
      telefone,
      dataNascimento,
      genero,
    };

    console.log(user);

    dispacth(registerClient(user));
  };

  useEffect(() => {
    dispacth(reset());
  }, [dispacth]);

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          onChange={(e) => setNome(e.target.value)}
          value={nome || ""}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email || ""}
        />
        <input
          type="password"
          placeholder="Senha"
          onChange={(e) => setSenha(e.target.value)}
          value={senha || ""}
        />
        <input
          type="password"
          placeholder="Confirme a senha"
          onChange={(e) => setconfirmacaoSenha(e.target.value)}
          value={confirmacaoSenha || ""}
        />
        <input
          type="text"
          placeholder="Telefone ex: 33 99154741"
          onChange={(e) => setTelefone(e.target.value)}
          value={telefone || ""}
        />
        <input
          type="date"
          placeholder="Data nascimento"
          onChange={(e) => setDataNascimento(e.target.value)}
          value={dataNascimento || ""}
        />
        <div>
          <label>Gênero:</label>
          <label>
            <input
              type="radio"
              name="genero"
              value="Masculino"
              onChange={(e) => setGenero(e.target.value)}
              checked={genero === "Masculino"}
            />
            Masculino
          </label>
          <label>
            <input
              type="radio"
              name="genero"
              value="Feminino"
              onChange={(e) => setGenero(e.target.value)}
              checked={genero === "Feminino"}
            />
            Feminino
          </label>
          <label>
            <input
              type="radio"
              name="genero"
              value="Outro"
              onChange={(e) => setGenero(e.target.value)}
              checked={genero === "Outro"}
            />
            Outro
          </label>
        </div>

        <input type="submit" value="Cadastrar" />
      </form>
    </div>
  );
};

export default Register;
