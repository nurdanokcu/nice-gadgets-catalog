import {Link, NavLink} from 'react-router-dom';
import logo from '../../images/niceGadgets.svg';
import './Navbar.scss';

export const Navbar = () => {
  return (
    <header className="Header">
      <Link to="/">
        <img
          className="Header__logo"
          src={logo}
          alt=""
        />
      </Link>
      <nav className="Nav">
        <ul className="Nav__list">
          <li className="Nav__item">
            <NavLink
              className="Nav__link"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="Nav__item">
            <NavLink
              className="Nav__link"
              to="/products/phones"
            >
              Phones
            </NavLink>
          </li>
          <li className="Nav__item">
            <NavLink
              className="Nav__link"
              to="/products/tablets"
            >
              Tablets
            </NavLink>
          </li>
          <li className="Nav__item">
            <NavLink
              className="Nav__link"
              to="/products/accessories"
            >
              Accessories
            </NavLink>
          </li>
        </ul>
      </nav>
      <div
        className="Header__actions"
      >
        <NavLink
          className="Header__actions__button"
          to="/favorites"
        >
          <span className="icon icon-fav" />
        </NavLink>

        <NavLink
          className="Header__actions__button"
          to="/cart"
        >
          <span className="icon icon-cart" />
        </NavLink>
      </div>
    </header>
  );
};
