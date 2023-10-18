import "./Navbar.css";

// Image
import logo from "../../assets/Images/logo.png";

// Components
import Navbar0 from "./Navbar0";

const Navbar = () => {
  return (
    <>
      <Navbar0 />
      <nav className="navbar">
        <div className="logo">
          <img width={70} src={logo} alt="Logo NeetBoots" />
        </div>
        <div>
          <ul className="links">
            <li>Categorias</li>
            <li>Masculino</li>
            <li>Feminino</li>
            <li>Futebol</li>
            <li>Corrida</li>
          </ul>
        </div>
        <div className="seacrh-fav-cart">
          <div className="search">
            <input type="text" placeholder="O que você está procurando?" />
          </div>
          <div className="fav">fav</div>
          <div className="cart">cart</div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
