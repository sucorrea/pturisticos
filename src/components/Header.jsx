/* eslint-disable jsx-a11y/alt-text */
import { FiHome } from "react-icons/fi";
import Logo from "./assets/logo1.png";
const Header = () => {
  return (
    <header>
      <nav className="menu-inicio ">
        <div className="navbar-brand">
          <a href="/" className="navbar-brand">
          <FiHome /> Inicio
          </a>
        </div>
      </nav>
      <img className="img-responsive" src={Logo} />
    </header>
  );
};
export default Header;
