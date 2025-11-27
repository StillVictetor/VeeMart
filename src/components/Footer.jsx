import React from 'react'
import '../Styles/footer.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import pay from '../assets/payment.png'

export default function Footer() {
  return (
    <footer>
      {/* MAIN FOOTER */}
      <div className="footer-area">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="footer-container"
        >
          {/* CONTACT */}
          <div className="footer-section">
            <h3 className="footer-title title-border">Contact Us</h3>
            <motion.ul
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="footer-contact"
            >
              <li>
                <span>Address :</span>
                Unicus, Warri,
                <br />
                Delta State, Nigeria
              </li>
              <li>
                <span>Cell-Phone :</span>+234 7035731997
              </li>
              <li>
                <span>Email :</span>veemart@gmail.com
              </li>
            </motion.ul>
          </div>

          {/* ACCOUNTS */}
          <div className="footer-section">
            <h3 className="footer-title title-border">Accounts</h3>
            <motion.ul
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="footer-menu"
            >
              <li>
                <Link to="/" >Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/about" >About</Link>
              </li>
              <li>
                <Link to="/checkout">My Cart</Link>
              </li>
              <li>
                <Link to="/checkout">Check Out</Link>
              </li>
            </motion.ul>
          </div>

          {/* SHIPPING */}
          <div className="footer-section">
            <h3 className="footer-title title-border">Shipping</h3>
            <motion.ul
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="footer-menu"
            >
              <li>
                <a href="#">New Products</a>
              </li>
              <li>
                <a href="#">Top Sellers</a>
              </li>
              <li>
                <a href="#">Manufacturers</a>
              </li>
              <li>
                <a href="#">Suppliers</a>
              </li>
              <li>
                <a href="#">Specials</a>
              </li>
            </motion.ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title title-border">Quick Links</h3>
            <motion.ul
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="footer-menu"
            >
              <li>
                <a href="#">My Account</a>
              </li>
              <li>
                <a href="#">My Wishlist</a>
              </li>
              <li>
                <a href="#">My Cart</a>
              </li>
              <li>
                <Link to="/">Terms and Condition</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
            </motion.ul>
          </div>
        </motion.div>
      </div>

      {/* COPYRIGHT */}
      <div className="copyright-area">
        <div className="copyright-container">
          <p className="copyright">
            &copy; CodeCarnival 2022. All Rights Reserved.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="payment"
          >
            <img src={pay} alt="Payment Methods" />
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
