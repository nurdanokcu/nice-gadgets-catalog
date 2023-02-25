import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import cn from 'classnames'
import logo from '../../images/niceGadgets.svg'
import './Navbar.scss'

export const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <header className="Header">
      <Link onClick={toggleMenu} to="/">
        <img className="Header__logo" src={logo} alt="" />
      </Link>
      <nav className={cn('Nav', { 'Nav--active': showMenu })}>
        <ul className="Nav__list">
          <li className="Nav__item">
            <NavLink className="Nav__link" to="/" onClick={toggleMenu}>
              Home
            </NavLink>
          </li>
          <li className="Nav__item">
            <NavLink
              className="Nav__link"
              to="/products/phones"
              onClick={toggleMenu}
            >
              Phones
            </NavLink>
          </li>
          <li className="Nav__item">
            <NavLink
              className="Nav__link"
              to="/products/tablets"
              onClick={toggleMenu}
            >
              Tablets
            </NavLink>
          </li>
          <li className="Nav__item">
            <NavLink
              className="Nav__link"
              to="/products/accessories"
              onClick={toggleMenu}
            >
              Accessories
            </NavLink>
          </li>
        </ul>
        <div className="Header__actions">
          <NavLink
            className="Header__actions__button"
            to="/favorites"
            onClick={toggleMenu}
          >
            <span className="icon icon-fav" />
          </NavLink>
          <NavLink
            className="Header__actions__button"
            to="/cart"
            onClick={toggleMenu}
          >
            <span className="icon icon-cart" />
          </NavLink>
        </div>
      </nav>
      <button
        onClick={toggleMenu}
        className={cn('menu__buttons', {
          'menu__buttons--active': !showMenu,
        })}
      >
        <span className="icon icon-menu" />
      </button>
      <button
        onClick={toggleMenu}
        className={cn('menu__buttons', {
          'menu__buttons--active': showMenu,
        })}
      >
        <span className="icon icon-close" />
      </button>
    </header>
  )
}
