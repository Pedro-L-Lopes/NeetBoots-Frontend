import "./Navbar.css";

// Components
import { Link, useNavigate } from "react-router-dom";

// Image
import logo from "../../assets/Images/logo.png";

// Icons
import { IoBagHandleOutline, IoHeartOutline, IoSearch } from "react-icons/io5";

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
        <div className="ml-5">
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
            <li>Marcas</li>
          </ul>
        </div>
        <div className="flex items-center justify-between gap-14 mr-5">
          <form
            onSubmit={handleSearch}
            className="flex items-center justify-between bg-white rounded-md"
          >
            <input
              type="text"
              placeholder="O que você está procurando?"
              className="p-1 rounded-md transition-all border border-l focus:outline-none"
              style={{ width: "140%" }}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button>
              <IoSearch size={25} className="text-gray-400" />
            </button>
          </form>
          <div className="flex gap-4 text-white">
            <div className="fav">
              <IoHeartOutline size={28} />
            </div>
            <div className="cart">
              <IoBagHandleOutline size={28} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
