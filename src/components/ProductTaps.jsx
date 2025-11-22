import React, { useState } from 'react'
import '../Styles/productTabs.css'
import { motion } from 'framer-motion'
import { SearchIcon, BookmarkIcon, Star } from 'lucide-react'
import { useCart } from '../context/CartContext'
import ProductQuickView from './ProductQuickView'

import img1 from '../assets/Abercrombie & Fitch _ Authentic American clothing since 1892 (1).jfif'
import img2 from '../assets/Available in colors and size’s  Price_250gh.jfif'
import img3 from '../assets/Cotton Zip Sweater Polo.jfif'
import img4 from '../assets/grey trouser.jfif'

// Dummy Product Data
const data = {
  new: [
    {
      id: 1,
      img: img1,
      badge: 'New',
      name: 'Product Name',
      price: 56.2,
      category: 'Furniture',
    },
    {
      id: 2,
      img: img2,
      badge: 'Sale',
      name: 'Product Name',
      price: 36.2,
      category: 'Furniture',
    },
    { id: 3, img: img3, name: 'Name', price: 66.2, category: 'Furniture' },
    { id: 4, img: img4, name: 'Name', price: 57.2, category: 'Furniture' },
  ],
  bestseller: [
    {
      id: 5,
      img: img2,
      badge: 'Sale',
      name: 'Top Seller',
      price: 48.5,
      category: 'Furniture',
    },
    {
      id: 6,
      img: img1,
      badge: 'New',
      name: 'Top Seller',
      price: 75.0,
      category: 'Furniture',
    },
    {
      id: 7,
      img: img1,
      name: 'Top Seller',
      price: 75.0,
      category: 'Furniture',
    },
    {
      id: 8,
      img: img1,
      badge: 'New',
      name: 'Top Seller',
      price: 75.0,
      category: 'Furniture',
    },
  ],
  mostview: [
    {
      id: 9,
      img: img4,
      name: 'Most Viewed',
      price: 44.5,
      category: 'Furniture',
    },
    {
      id: 10,
      img: img3,
      name: 'Most Viewed',
      price: 82.9,
      category: 'Furniture',
    },
    {
      id: 11,
      img: img3,
      name: 'Most Viewed',
      price: 82.9,
      category: 'Furniture',
    },
    {
      id: 12,
      img: img3,
      name: 'Most Viewed',
      price: 82.9,
      category: 'Furniture',
    },
  ],
  discounts: [
    {
      id: 13,
      img: img2,
      badge: 'Sale',
      name: 'Discount Item',
      price: 22.5,
      category: 'Furniture',
    },
    {
      id: 14,
      img: img1,
      badge: 'Sale',
      name: 'Discount Item',
      price: 18.0,
      category: 'Furniture',
    },
  ],
}

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState('new')
  const [quick, setQuick] = useState(null)

  const { toggleWishlist, isWishlisted } = useCart()

  const handleAddToCart = (product) => {
    console.log('Add to cart', product)
  }

  const tabs = [
    { key: 'new', label: 'New Arrivals' },
    { key: 'bestseller', label: 'Best Seller' },
    { key: 'mostview', label: 'Most View' },
    { key: 'discounts', label: 'Discounts' },
  ]

  return (
    <div className="product-tabs">
      <h2 className="section-title">Purchase Online on VeeMart</h2>

      {/* TAB NAVIGATION */}
      <div className="tab-nav">
        {tabs.map((item) => (
          <button
            key={item.key}
            className={`tab-btn ${activeTab === item.key ? 'active' : ''}`}
            onClick={() => setActiveTab(item.key)}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* PRODUCT GRID */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="products-container"
      >
        {data[activeTab].map((prod) => (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="product-card"
            key={prod.id}
          >
            <div style={{ position: 'relative' }}>
              {prod.badge && (
                <span className={`badge ${prod.badge.toLowerCase()}`}>
                  {prod.badge}
                </span>
              )}
              <img src={prod.img} alt={prod.name} className="product-image" />
              <span className="p-price">${prod.price.toFixed(2)}</span>
            </div>

            <h3 className="p-name">{prod.name}</h3>

            <div className="p-stars">
              <Star size={16} fill="#c8a165" stroke="#c8a165" />
              <Star size={16} fill="#c8a165" stroke="#c8a165" />
              <Star size={16} fill="#c8a165" stroke="#c8a165" />
              <Star size={16} fill="#c8a165" stroke="#c8a165" />
              <Star size={16} fill="none" stroke="#c8a165" />
            </div>

            <ul>
              <li>
                <button
                  className={`bookmark-btn ${isWishlisted(prod.id) ? 'active' : ''}`}
                  onClick={() => toggleWishlist(prod)}
                  aria-pressed={isWishlisted(prod.id)}
                >
                  <BookmarkIcon
                    size={17}
                    color={isWishlisted(prod.id) ? '#fff' : '#000'}
                  />
                </button>
              </li>
              <li>
                <SearchIcon
                  size={17}
                  color="#000"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setQuick(prod)}
                />
              </li>
              <button className="button-two style-2" data-text="View Details">
                View Details
              </button>
            </ul>
          </motion.div>
        ))}
      </motion.div>
      {quick && (
        <ProductQuickView
          product={quick}
          onClose={() => setQuick(null)}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  )
}
