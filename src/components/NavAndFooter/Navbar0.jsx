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
    <nav className="flex justify-between items-center bg-sBlack h-8">
      <div className="text-white ml-2">
        <h1>O melhor está aqui</h1>
      </div>
      {auth ? (
        <>
          <div className="flex gap-2 text-white mr-2">
            <Link to="/">Ajuda</Link>
            <p>|</p>
            {client && (
              <p>
                <NavLink to={`/clients/${client.id}`}>Minha conta</NavLink>
              </p>
            )}
            {/* <span onClick={handleLogout} className="sair">
              Sair
            </span> */}
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
