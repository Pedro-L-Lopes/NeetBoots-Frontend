import "./Navbar.css";

// Components
import { Link, useNavigate } from "react-router-dom";

// Image
import logo from "../../assets/Images/logo.png";

// Components
import Navbar0 from "./Navbar0";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (query) {
      return navigate(`/search?q=${query}`);
    }
  };

  return (
    <>
      <Navbar0 />
      <nav className="flex items-center justify-between bg-pBlack h-20">
        <div className="ml-2">
          <Link to="/">
            <img width={100} src={logo} alt="Logo NeetBoots" />
          </Link>
        </div>
        <div>
          <ul className="flex items-center justify-between gap-2 text-white font-bold">
            <li>Categorias</li>
            <li>Masculino</li>
            <li>Feminino</li>
            <li>Futebol</li>
            <li>Corrida</li>
          </ul>
        </div>
        <div className="flex items-center justify-between gap-2 mr-2">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="O que você está procurando?"
              className="rounded-md h-8 border-none focus:outline-none"
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>
          <div className="flex gap-2 text-white">
            <div className="fav">fav</div>
            <div className="cart">cart</div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
