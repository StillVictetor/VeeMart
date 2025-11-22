import React, { useState } from "react";
import "../Styles/checkout.css";
import '../Styles/home.css'
import banner from "../assets/bg.png"
import img1 from "../assets/shoe1.png";
import { useCart } from '../context/CartContext'

const CheckoutPage = () => {
  const [activeTab, setActiveTab] = useState("wishlist");

  const { wishlist, removeFromWishlist, addItem, items: cartItems, totalPrice, updateQty, removeItem, clearCart } = useCart()

  const transactionHistory = [
    {
      id: 1,
      date: "2025-01-05",
      items: 3,
      total: "$150",
      status: "Success",
    },
    {
      id: 2,
      date: "2025-01-12",
      items: 2,
      total: "$89",
      status: "Success",
    },
  ];

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

              <td>${(item.newPrice ?? item.price ?? '')}</td>
              <td>{item.stock ?? 'IN STOCK'}</td>
              <td>
                <button className="cart-btn" onClick={() => { addItem(item, 1); removeFromWishlist(item.id); }}>
                  🛒
                </button>
              </td>
              <td>
                <button className="remove-btn" onClick={() => removeFromWishlist(item.id)}>✖</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

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

              <td>${(i.product.newPrice ?? i.product.price ?? 0)}</td>
              <td>
                <div className="qty-controls">
                  <button onClick={() => updateQty(i.id, i.qty - 1)}>-</button>
                  <span>{i.qty}</span>
                  <button onClick={() => updateQty(i.id, i.qty + 1)}>+</button>
                </div>
              </td>
              <td>${((i.product.newPrice ?? i.product.price ?? 0) * i.qty)}</td>
              <td>
                <button className="remove-btn" onClick={() => removeItem(i.id)}>✖</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cart-summary">
        <div className="summary-row">Total: <strong>${totalPrice.toFixed(2)}</strong></div>
        <div className="summary-actions">
          <button className="checkout-btn" onClick={() => clearCart()}>Clear Cart</button>
        </div>
      </div>
    </div>
  );

  const renderCheckoutForm = () => (
    <div className="form-container">
      <h2>Checkout Form</h2>

      <form>
        <label>Full Name</label>
        <input type="text" placeholder="Enter your name" />

        <label>Email</label>
        <input type="email" placeholder="Enter email" />

        <label>Address</label>
        <input type="text" placeholder="Enter address" />

        <label>City</label>
        <input type="text" placeholder="Enter city" />

        <label>Payment Method</label>
        <select>
          <option>Credit Card</option>
          <option>Bank Transfer</option>
          <option>Cash on Delivery</option>
        </select>

        <button type="submit" className="checkout-btn">
          Complete Order
        </button>
      </form>
    </div>
  );

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
  );

  
      const IMAGES = [
          {id: 1, src: banner, alt: "Banner 1", name: "CHECKOUT"  },
      ]

  return (
    <div>
        <div>
        <section className="home" id="home">
            {IMAGES.map((image) => (
                <div className="home-banner" key={image.id}>
                    <h1>{image.name}</h1>
                    <img className='img' src={image.src} alt={image.alt} />
                </div>
            ))}
        </section>
    </div>
        

    <div className="checkout-page">
      {/* TABS */}
      <div className="tabs">
        <button
          className={activeTab === "cart" ? "active" : ""}
          onClick={() => setActiveTab("cart")}
        >
          SHOPPING CART
        </button>

        <button
          className={activeTab === "wishlist" ? "active" : ""}
          onClick={() => setActiveTab("wishlist")}
        >
          WISHLIST
        </button>

        <button
          className={activeTab === "checkout" ? "active" : ""}
          onClick={() => setActiveTab("checkout")}
        >
          CHECKOUT
        </button>

        <button
          className={activeTab === "complete" ? "active" : ""}
          onClick={() => setActiveTab("complete")}
        >
          ORDER COMPLETE
        </button>
      </div>

      {/* PAGE CONTENT */}
      {activeTab === "wishlist" && renderWishlist()}
      {activeTab === "cart" && renderCart()}
      {activeTab === "checkout" && renderCheckoutForm()}
      {activeTab === "complete" && renderOrderComplete()}
    </div>
    </div>
  );
};

export default CheckoutPage;