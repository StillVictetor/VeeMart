import React, { useEffect, useRef } from 'react'
import '../Styles/ProductQuickView.css'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function ProductQuickView({ product, onClose, onAddToCart }) {
  const modalRef = useRef(null)
  // cart context
  const cart = useCart()

  useEffect(() => {
    if (!product) return
    const previousActive = document.activeElement
    // focus the modal for accessibility
    const firstFocusable =
      modalRef.current &&
      modalRef.current.querySelector(
        'button, a, [tabindex]:not([tabindex="-1"])'
      )
    firstFocusable?.focus()

    function onKey(e) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab') {
        // simple focus trap
        const focusable = modalRef.current.querySelectorAll(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        )
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      }
    }

    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      previousActive?.focus()
    }
  }, [product, onClose])

  if (!product) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
      className="pqv-overlay pqv-overlay--centered"
      onClick={onClose}
      aria-hidden={false}
    >
      <div
        className="pqv-modal pqv-modal--clean"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={product.name}
        ref={modalRef}
      >
        <button className="pqv-close" onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>

        <div className="pqv-body">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="pqv-image"
          >
            <img src={product.src || product.img} alt={product.name} />
          </motion.div>
          <div className="pqv-info">
            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="pqv-title"
            >
              {product.name}
            </motion.h3>
            {product.category && (
              <div className="pqv-category">{product.category}</div>
            )}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="pqv-prices"
            >
              <span className="pqv-new">₦{product.Price ?? product.price}</span>
            </motion.div>
            {product.description && (
              <p className="pqv-desc">{product.description}</p>
            )}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="pqv-actions"
            >
              <Link
                to={`/product/${product.id ?? ''}`}
                state={product}
                className="button-two style-2"
                data-text="View Details"
                onClick={onClose}
              >
                View Details
              </Link>
              <button
                className="button-two style-2"
                data-text="Add to Cart"
                onClick={() => {
                  if (cart && cart.addItem) cart.addItem(product, 1)
                  else onAddToCart && onAddToCart(product)
                  onClose()
                }}
              >
                Add to Cart
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
