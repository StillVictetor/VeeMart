import React, { useState } from 'react'
import '../Styles/checkout.css'
import '../Styles/home.css'
import banner from '../assets/bg.png'
import img1 from '../assets/shoe1.png'
import { useCart } from '../context/CartContext'
import PaymentInstructions from './PaymentInstructions'

export default function CheckoutPage({ onClose, onAddToCart }) {
  const cart = useCart()

  const [activeTab, setActiveTab] = useState('wishlist')

  const {
    wishlist,
    removeFromWishlist,
    items: cartItems,
    totalPrice,
    updateQty,
    removeItem,
    clearCart,
  } = useCart()

  // transaction history (stateful so we can add new transactions)
  const [transactionHistory, setTransactionHistory] = useState([
    {
      id: 1,
      date: '2025-01-05',
      items: 3,
      total: '$150',
      status: 'Success',
    },
  ])

  // payment flow state
  const [paymentDetails, setPaymentDetails] = useState(null)

  // PAGE RENDER FUNCTIONS
  const renderWishlist = () => (
    <div className="list-container">
      <table>
        <thead>
          <tr>
            <th>PRODUCT</th>
            <th>PRICE</th>
            <th>STOCK STATUS</th>
            <th>ADD TO CART</th>
            <th>REMOVE</th>
          </tr>
        </thead>

        <tbody>
          {wishlist.map((item) => (
            <tr key={item.id}>
              <td className="product-info">
                <img src={item.src || item.img || img1} alt="" />
                <div>
                  <h4>{item.name}</h4>
                  {item.color && <p>Color: {item.color}</p>}
                  {item.size && <p>Size: {item.size}</p>}
                </div>
              </td>

              <td>${item.newPrice ?? item.price ?? ''}</td>
              <td>{item.stock ?? 'IN STOCK'}</td>
              <td>
                <button
                  className="button-two style-2"
                  data-text="Add to Cart"
                  onClick={() => {
                    // add the wishlist item to cart
                    if (cart && cart.addItem) cart.addItem(item, 1)
                    else onAddToCart && onAddToCart(item)
                    // close if onClose provided
                    if (onClose) onClose()
                  }}
                >
                  Add to Cart
                </button>
              </td>
              <td>
                <button
                  className="remove-btn"
                  onClick={() => removeFromWishlist(item.id)}
                >
                  ✖
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  const renderCart = () => (
    <div className="list-container">
      <table>
        <thead>
          <tr>
            <th>PRODUCT</th>
            <th>PRICE</th>
            <th>QTY</th>
            <th>SUBTOTAL</th>
            <th>REMOVE</th>
          </tr>
        </thead>

        <tbody>
          {cartItems.map((i) => (
            <tr key={i.id}>
              <td className="product-info">
                <img src={i.product.src || i.product.img || img1} alt="" />
                <div>
                  <h4>{i.product.name}</h4>
                </div>
              </td>

              <td>${i.product.newPrice ?? i.product.price ?? 0}</td>
              <td>
                <div className="qty-controls">
                  <button onClick={() => updateQty(i.id, i.qty - 1)}>-</button>
                  <span>{i.qty}</span>
                  <button onClick={() => updateQty(i.id, i.qty + 1)}>+</button>
                </div>
              </td>
              <td>${(i.product.newPrice ?? i.product.price ?? 0) * i.qty}</td>
              <td>
                <button className="remove-btn" onClick={() => removeItem(i.id)}>
                  ✖
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cart-summary">
        <div className="summary-row">
          Total: <strong>${totalPrice.toFixed(2)}</strong>
        </div>
        <div className="summary-actions">
          <button
            className="button-two style-2"
            data-text="Clear Cart"
            onClick={() => clearCart()}
          >
            Clear Cart
          </button>
          <button
            className="button-two style-2"
            data-text="Checkout"
            onClick={() => setActiveTab('checkout')}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  )

  // Payment instructions moved to PaymentInstructions component

  const renderCheckoutForm = () => (
    <div className="form-container">
      <h2>Checkout Form</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          const form = e.target
          const formData = new FormData(form)
          const details = {
            fullName: formData.get('fullName') || '',
            email: formData.get('email') || '',
            address: formData.get('address') || '',
            city: formData.get('city') || '',
            method: formData.get('method') || 'Bank Transfer',
            amount: totalPrice ?? 0,
          }
          setPaymentDetails(details)
          setActiveTab('payment')
        }}
      >
        <input name="fullName" type="text" placeholder="Enter your name" />

        <input name="email" type="email" placeholder="Enter email" />

        <input name="address" type="text" placeholder="Enter address" />

        <input name="city" type="text" placeholder="Enter city" />

        <select name="method">
          <option>Select Payment Method</option>  
          <option>Credit Card</option>
          <option>Bank Transfer</option>
          <option>Cash on Delivery</option>
        </select>

        <button type="submit" className="checkout-btn">
          Complete Order
        </button>
      </form>
    </div>
  )

  const renderOrderComplete = () => (
    <div className="history-container">
      <h2>Transaction History</h2>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Items</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {transactionHistory.map((t) => (
            <tr key={t.id}>
              <td>{t.date}</td>
              <td>{t.items}</td>
              <td>{t.total}</td>
              <td>{t.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  const IMAGES = [{ id: 1, src: banner, alt: 'Banner 1', name: 'CHECKOUT' }]

  return (
    <div>
      <div>
        <section className="home" id="home">
          {IMAGES.map((image) => (
            <div className="home-banner" key={image.id}>
              <h1>{image.name}</h1>
              <img className="img" src={image.src} alt={image.alt} />
            </div>
          ))}
        </section>
      </div>

      <div className="checkout-page">
        {/* TABS */}
        <div className="tabs">
          <button
            className={activeTab === 'cart' ? 'active' : ''}
            onClick={() => setActiveTab('cart')}
          >
            SHOPPING CART
          </button>

          <button
            className={activeTab === 'wishlist' ? 'active' : ''}
            onClick={() => setActiveTab('wishlist')}
          >
            WISHLIST
          </button>

          <button
            className={activeTab === 'checkout' ? 'active' : ''}
            onClick={() => setActiveTab('checkout')}
          >
            CHECKOUT
          </button>

          <button
            className={activeTab === 'complete' ? 'active' : ''}
            onClick={() => setActiveTab('complete')}
          >
            ORDER COMPLETE
          </button>
        </div>

        {/* PAGE CONTENT */}
        {activeTab === 'wishlist' && renderWishlist()}
        {activeTab === 'cart' && renderCart()}
        {activeTab === 'checkout' && renderCheckoutForm()}
        {activeTab === 'payment' && (
          <PaymentInstructions
            amount={totalPrice}
            payer={paymentDetails?.fullName}
            totalItems={cart.totalItems}
            clearCart={clearCart}
            onTransactionComplete={(tx) => {
              setTransactionHistory((t) => [tx, ...t])
              setActiveTab('complete')
            }}
          />
        )}
        {activeTab === 'complete' && renderOrderComplete()}
      </div>
    </div>
  )
}
