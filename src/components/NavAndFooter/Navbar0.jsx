import "./Navbar.css";

// Components
import { Link, NavLink } from "react-router-dom";

// Hooks
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar0 = () => {
  const { auth } = useAuth();
  const { client } = useSelector((state) => state.authClient);

  return (
    <nav className="navbar0">
      <div className="titulo">
        <h1>O melhor está aqui</h1>
      </div>
      {auth ? (
        <>
          <div className="titulo1">
            <Link to="/">Ajuda</Link>
            {client && (
              <p>
                <NavLink to={`/clients/${client.id}`}>Minha conta</NavLink>
              </p>
            )}
            <p>
              <NavLink to={`/profile`}>Profile</NavLink>
            </p>
            <p>Sair</p>
          </div>
        </>
      ) : (
        <>
          <div className="titulo2">
            Ajuda | Junte-se a nós | <Link to="/login">Entrar</Link>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar0;
