import React, { useState } from 'react'
import '../Styles/productTabs.css'
import { motion } from 'framer-motion'
import { SearchIcon, BookmarkIcon, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import ProductQuickView from './ProductQuickView'

import img1 from '../assets/Abercrombie & Fitch _ Authentic American clothing since 1892 (1).jfif'
import img2 from '../assets/Available in colors and size’s  Price_250gh.jfif'
import img3 from '../assets/Cotton Zip Sweater Polo.jfif'
import img4 from '../assets/grey trouser.jfif'

// cloths import here
import cloth1 from '../assets/blackPolo.jfif'
import cloth2 from '../assets/brownCloth.jfif'
import cloth3 from '../assets/darkblackPolo.jfif'
import cloth4 from '../assets/darkPolo.jfif'
import cloth5 from '../assets/wears1.jfif'
import cloth6 from '../assets/grey trouser.jfif'
import cloth7 from '../assets/PoloShirt.jfif'

const data = {
  new: [
    {
      id: 1,
      img: img1,
      badge: 'New',
      name: 'Wear 1',
      price: 18000,
    },
    {
      id: 2,
      img: img2,
      badge: 'New',
      name: 'Wear 2',
      price: 18500,
    },
    {
      id: 3,
      img: img3,
      badge: 'New',
      name: 'Wear 3',
      price: 18000,
    },
    {
      id: 4,
      img: img4,
      badge: 'New',
      name: 'Wear 4',
      price: 18000,
    },
  ],

  bestseller: [
    {
      id: 5,
      img: img2,
      badge: 'Sale',
      name: 'Wear 1',
      price: 18500,
    },
    {
      id: 6,
      img: cloth3,
      badge: 'Sale',
      name: 'Wear 2',
      price: 15000,
    },
    {
      id: 7,
      img: cloth5,
      badge: 'Sale',
      name: 'Wear 3',
      price: 15500,
    },
    {
      id: 8,
      img: cloth6,
      badge: 'Sale',
      name: 'Wear 4',
      price: 17500,
    },
  ],

  mostview: [
    {
      id: 9,
      img: cloth2,
      name: 'wear 1',
      price: 15000,
    },
    {
      id: 10,
      img: cloth4,
      name: 'Wear 2',
      price: 18200,
    },
    {
      id: 11,
      img: cloth5,
      name: 'Wear 3',
      price: 14500,
    },
    {
      id: 12,
      img: cloth7,
      name: 'Wear 4',
      price: 16500,
    },
  ],

  discounts: [
    {
      id: 13,
      img: cloth4,
      badge: 10 + '% Off',
      name: 'Wear 1',
      price: 14000,
    },
    {
      id: 14,
      img: cloth3,
      badge: 5 + '% Off',
      name: 'Wear 2',
      price: 16000,
    },
    {
      id: 15,
      img: cloth2,
      badge: 3 + '% Off',
      name: 'Wear 3',
      price: 15000,
    },
    {
      id: 16,
      img: cloth1,
      badge: 20 + '% Off',
      name: 'Wear 4',
      price: 20000,
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
              <span className="p-price">₦{prod.price}</span>
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
              <Link
                to={`/product/${prod.id}`}
                state={prod}
                className="button-two style-2"
                data-text="View Details"
              >
                View Details
              </Link>
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
