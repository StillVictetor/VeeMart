import React, { useState } from "react";
import "../Styles/navbar.css";
import logo from "../assets/logo.png";
import { Menu, ShoppingCart, X, MenuIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <button className="icon-btn1" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu size={30} />
          </button>
        </div>

        <div className="navbar-center">
          <a href="/"> <img src={logo} alt="Veemart logo" /></a>
        </div>

        <div className="navbar-right">
          <button className="icon-btn1" aria-label="Cart">
            <ShoppingCart size={30} />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* Side Menu */}
      <aside className={`side-menu ${open ? "open" : ""}`}>
        <div className="side-header">
          <button className="icon-btn" onClick={() => setOpen(false)} aria-label="Close menu">
            <X size={30} />
          </button>
        </div>

        <ul className="menu-items">
          <li><Link to="/" className="button-one style-2" data-text="Home">Home</Link></li>
          <li><Link to="/Shop" className="button-one style-2" data-text="Shop">Shop</Link></li>
          <li><a href="#collections" className="button-one style-2" data-text="Collections">Collections</a></li>
          <li><Link to="/" className="button-one style-2" data-text="New Arrivals">New Arrivals</Link></li>
          <li><a href="#contact" className="button-one style-2" data-text="Contact">Contact</a></li>
          <li><a href="#contact" className="button-one style-2" data-text="Blogs">Blogs</a></li>
          <li><a href="#contact" className="button-one style-2" data-text="About">About</a></li>
          <li><a href="#contact" className="button-one style-2" data-text="FAQs">FAQs</a></li>
        </ul>
      </aside>
    </>
  );
}