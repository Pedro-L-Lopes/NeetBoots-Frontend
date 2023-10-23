import "./Navbar.css";

// Components
import { Link, NavLink } from "react-router-dom";

// Hooks
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Redux
import { logout, reset } from "../../slices/clientAuthSlice";

const Navbar0 = () => {
  const { auth } = useAuth();
  const { client } = useSelector((state) => state.authClient);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());

    navigate("/authentication");
  };

  return (
    <nav className="fle">
      <div className="text-white">
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
            <span onClick={handleLogout} className="sair">
              Sair
            </span>
          </div>
        </>
      ) : (
        <>
          <div className="titulo2">
            Ajuda | Junte-se a nós | <Link to="/authentication">Entrar</Link>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar0;
