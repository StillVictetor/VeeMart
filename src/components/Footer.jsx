import React from 'react'
import '../Styles/footer.css'
import { motion } from 'framer-motion'
import pay1 from '../assets/react.svg'
import pay2 from '../assets/react.svg'
import pay3 from '../assets/react.svg'
import pay4 from '../assets/react.svg'

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
                <a href="#">My Account</a>
              </li>
              <li>
                <a href="#">My Wishlist</a>
              </li>
              <li>
                <a href="#">My Cart</a>
              </li>
              <li>
                <a href="#">Sign In</a>
              </li>
              <li>
                <a href="#">Check Out</a>
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
            <a href="#">
              <img src={pay1} alt="payment" />
            </a>
            <a href="#">
              <img src={pay2} alt="payment" />
            </a>
            <a href="#">
              <img src={pay3} alt="payment" />
            </a>
            <a href="#">
              <img src={pay4} alt="payment" />
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
