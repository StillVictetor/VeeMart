import React, { useState } from 'react'
import '../Styles/navbar.css'
import { motion } from 'framer-motion'
import logo from '../assets/logo.png'
import { Menu, ShoppingCart, X, MenuIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import CartDrawer from './CartDrawer'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const cart = useCart()

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="navbar"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="navbar-left"
        >
          <button
            className="icon-btn1"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={30} />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="navbar-center"
        >
          <a href="/">
            {' '}
            <img src={logo} alt="Veemart logo" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="navbar-right"
        >
          <button
            className="icon-btn1"
            aria-label="Cart"
            onClick={() => setCartOpen(true)}
          >
            <ShoppingCart size={30} />
            {cart?.totalItems > 0 && (
              <span className="cart-badge">{cart.totalItems}</span>
            )}
          </button>
        </motion.div>
      </motion.nav>

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className={`overlay ${open ? 'show' : ''}`}
        onClick={() => setOpen(false)}
      />

      {/* Side Menu */}
      <aside
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className={`side-menu ${open ? 'open' : ''}`}
      >
        <div className="side-header">
          <button
            className="icon-btn"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X size={30} />
          </button>
        </div>

        <ul className="menu-items">
          <li>
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="button-one style-2"
              data-text="Home"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Shop"
              onClick={() => setOpen(false)}
              className="button-one style-2"
              data-text="Shop"
            >
              Shop
            </Link>
          </li>
          <li>
            <a
              href="#collections"
              onClick={() => setOpen(false)}
              className="button-one style-2"
              data-text="Collections"
            >
              Collections
            </a>
          </li>
          <li>
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="button-one style-2"
              data-text="New Arrivals"
            >
              New Arrivals
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="button-one style-2"
              data-text="Blogs"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="button-one style-2"
              data-text="About"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="button-one style-2"
              data-text="Contact"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/checkout"
              onClick={() => setOpen(false)}
              className="button-one style-2"
              data-text="Checkout"
            >
              Checkout
            </Link>
          </li>
          <li>
            <a
              href="#"
              onClick={() => setOpen(false)}
              className="button-one style-2"
              data-text="FAQs"
            >
              FAQs
            </a>
          </li>
        </ul>
      </aside>
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}
