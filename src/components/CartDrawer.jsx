import React from 'react'
import '../Styles/CartDrawer.css'
import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { X, TrashIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function CartDrawer({ open, onClose }) {
  const { items, totalItems, totalPrice, updateQty, removeItem, clearCart } =
    useCart()
  const navigate = useNavigate()

  if (!open) return null

  return (
    <div className="cart-overlay" onClick={onClose}>
      <aside
        className="cart-drawer"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="cart-header">
          <h3>Shopping Cart {totalItems}</h3>
        </div>

        <div className="cart-body">
          {items.length === 0 ? (
            <div className="empty">Your cart is empty</div>
          ) : (
            <ul className="cart-list">
              {items.map((i) => (
                <motion.li
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: false }}
                  key={i.id}
                  className="cart-item"
                >
                  <img
                    src={i.product.src || i.product.img}
                    alt={i.product.name}
                  />
                  <div className="ci-info">
                    <div className="ci-name">{i.product.name}</div>
                    <div className="ci-price">
                      ₦
                      {(
                        i.product.newPrice ??
                        i.product.price ??
                        0
                      ).toLocaleString()}
                    </div>
                    <div className="ci-qty">
                      <button onClick={() => updateQty(i.id, i.qty - 1)}>
                        -
                      </button>
                      <span>{i.qty}</span>
                      <button onClick={() => updateQty(i.id, i.qty + 1)}>
                        +
                      </button>
                      <button
                        className="remove"
                        onClick={() => removeItem(i.id)}
                      >
                        <TrashIcon size={20} />
                      </button>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          )}
        </div>

        <div className="cart-footer">
          <div className="cart-total">
            Total: <strong>₦{totalPrice.toLocaleString()}</strong>
          </div>
          <div className="cart-actions">
            <button
              className="btn"
              onClick={() => {
                clearCart()
                onClose()
              }}
            >
              Clear
            </button>
            <button
              className="btn primary"
              onClick={() => {
                onClose()
                navigate('/checkout')
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      </aside>
    </div>
  )
}
