import React from 'react'
import { useLocation, useParams, useNavigate } from 'react-router-dom'
import '../Styles/details.css'
import { useCart } from '../context/CartContext'

export default function Details() {
  const location = useLocation()
  const params = useParams()
  const navigate = useNavigate()
  const cart = useCart()

  const product = location.state || {}

  // if there's no product in state, we still show the id from params
  if (!product || Object.keys(product).length === 0) {
    return (
      <div className="details-page">
        <div className="details-card">
          <h2>Product details</h2>
          <p>
            No product data available for id: <strong>{params.id}</strong>
          </p>
          <p>
            If you navigated here directly, the product data wasn't passed. Go
            back to the shop to select a product.
          </p>
          <button className="button-two style-2" onClick={() => navigate(-1)}>
            Back
          </button>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    if (cart && cart.addItem) cart.addItem(product, 1)
    navigate('/checkout')
  }

  return (
    <div className="details-page">
      <div className="details-card">
        <div className="details-media">
          <img src={product.src || product.img} alt={product.name} />
        </div>
        <div className="details-info">
          <h1 className="details-title">{product.name}</h1>
          {product.category && (
            <div className="details-category">{product.category}</div>
          )}
          <div className="details-price">
            ₦{product.newPrice ?? product.price}
          </div>
          {product.discount && (
            <div className="details-discount">{product.discount}% off</div>
          )}
          {product.description && (
            <p className="details-desc">{product.description}</p>
          )}

          {product.sizes && (
            <div className="details-sizes">
              <strong>Sizes:</strong> {product.sizes.join(', ')}
            </div>
          )}

          {product.colors && (
            <div className="details-colors">
              <strong>Colors:</strong> {product.colors.join(', ')}
            </div>
          )}

          <div className="details-actions">
            <button className="button-two style-2" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="button-two" onClick={() => navigate(-1)}>
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
