/* eslint-disable jsx-a11y/alt-text */
import Logo from './assets/logo1.png';
const Header = () => {
  return (
    <header>
      <nav className="">
        <div className="navbar-brand"><a href="/" className="navbar-brand">Inicio</a></div>
      </nav>
      <img src={Logo} />


    </header>
  )
}
export default Header

