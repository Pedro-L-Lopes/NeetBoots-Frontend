import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar0 = () => {
  return (
    <nav className="navbar0">
      <div className="titulo">
        <h1>O melhor está aqui</h1>
      </div>
      <div className="titulo2">
        Ajuda | Junte-se a nós | <Link to="/login">Entrar</Link>
      </div>
    </nav>
  );
};

export default Navbar0;
