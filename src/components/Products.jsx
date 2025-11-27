import React, { useState } from 'react'
import '../Styles/product.css'
import { motion } from 'framer-motion'
import cloth from '../assets/shoe1.png'
import wears from '../assets/wears1.jfif'
import wears2 from '../assets/PoloShirt.jfif'
import wears3 from '../assets/PoloShirt.jfif'
import { SearchIcon, BookmarkIcon, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import ProductQuickView from './ProductQuickView'
import Pagination from './Pagination'

// cloths import here
import cloth1 from '../assets/blackPolo.jfif'
import cloth2 from '../assets/brownCloth.jfif'
import cloth3 from '../assets/darkblackPolo.jfif'
import cloth4 from '../assets/darkPolo.jfif'
import cloth5 from '../assets/wears1.jfif'
import cloth6 from '../assets/grey trouser.jfif'
import cloth7 from '../assets/PoloShirt.jfif'

const Products = () => {
  const [quick, setQuick] = useState(null)

  const handleAddToCart = (product) => {
    // placeholder - wire this to real cart logic
    console.log('Add to cart', product)
  }
  const { toggleWishlist, isWishlisted } = useCart()

  const PRODUCTS = [
    {
      id: 1,
      name: 'Wear 1',
      oldPrice: 2000,
      newPrice: 49000,
      discount: 2,
      src: cloth1,
      category: 'top',
      description:
        'Comfortable and stylish premium hoodie perfect for casual wear. Made from high-quality fabric with excellent durability.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Gray', 'Navy'],
      rating: 4.5,
      reviews: 128,
    },

    {
      id: 2,
      name: 'Wear 2',
      oldPrice: 1500,
      newPrice: 49000,
      discount: 2,
      src: cloth2,
      category: 'top',
      description:
        'Comfortable and stylish premium hoodie perfect for casual wear. Made from high-quality fabric with excellent durability.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Gray', 'Navy'],
      rating: 4.5,
      reviews: 128,
    },

    {
      id: 3,
      name: 'Wear 3',
      oldPrice: 9000,
      newPrice: 49000,
      discount: 2,
      src: cloth3,
      category: 'top',
      description:
        'Comfortable and stylish premium hoodie perfect for casual wear. Made from high-quality fabric with excellent durability.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Gray', 'Navy'],
      rating: 4.5,
      reviews: 128,
    },

    {
      id: 4,
      name: 'Wear 4',
      oldPrice: 999,
      newPrice: 49000,
      discount: 2,
      src: cloth4,
      category: 'top',
      description:
        'Comfortable and stylish premium hoodie perfect for casual wear. Made from high-quality fabric with excellent durability.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Gray', 'Navy'],
      rating: 4.5,
      reviews: 128,
    },

    {
      id: 5,
      name: 'Wear 5',
      oldPrice: 5000,
      newPrice: 49000,
      discount: 2,
      src: cloth5,
      category: 'top',
      description:
        'Comfortable and stylish premium hoodie perfect for casual wear. Made from high-quality fabric with excellent durability.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Gray', 'Navy'],
      rating: 4.5,
      reviews: 128,
    },

    {
      id: 6,
      name: 'Wear 6',
      oldPrice: 6000,
      newPrice: 49000,
      discount: 2,
      src: cloth6,
      category: 'top',
      description:
        'Comfortable and stylish premium hoodie perfect for casual wear. Made from high-quality fabric with excellent durability.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Gray', 'Navy'],
      rating: 4.5,
      reviews: 128,
    },

    {
      id: 7,
      name: 'Wear 7',
      oldPrice: 3000,
      newPrice: 49000,
      discount: 2,
      src: cloth7,
      category: 'top',
      description:
        'Comfortable and stylish premium hoodie perfect for casual wear. Made from high-quality fabric with excellent durability.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Gray', 'Navy'],
      rating: 4.5,
      reviews: 128,
    },

    {
      id: 8,
      name: 'Wear 8',
      oldPrice: 2000,
      newPrice: 49000,
      discount: 2,
      src: cloth1,
      category: 'top',
      description:
        'Comfortable and stylish premium hoodie perfect for casual wear. Made from high-quality fabric with excellent durability.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Gray', 'Navy'],
      rating: 4.5,
      reviews: 128,
    },

    {
      id: 9,
      name: 'Wear 9',
      oldPrice: 1000,
      newPrice: 49000,
      discount: 2,
      src: cloth2,
      category: 'top',
      description:
        'Comfortable and stylish premium hoodie perfect for casual wear. Made from high-quality fabric with excellent durability.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Gray', 'Navy'],
      rating: 4.5,
      reviews: 128,
    },

    {
      id: 10,
      name: 'Wear 10',
      oldPrice: 3500,
      newPrice: 49000,
      discount: 2,
      src: cloth4,
      category: 'top',
      description:
        'Comfortable and stylish premium hoodie perfect for casual wear. Made from high-quality fabric with excellent durability.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Gray', 'Navy'],
      rating: 4.5,
      reviews: 128,
    },

    {
      id: 11,
      name: 'Wear 11',
      oldPrice: 8000,
      newPrice: 49000,
      discount: 2,
      src: cloth5,
      category: 'top',
      description:
        'Comfortable and stylish premium hoodie perfect for casual wear. Made from high-quality fabric with excellent durability.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Gray', 'Navy'],
      rating: 4.5,
      reviews: 128,
    },

    {
      id: 12,
      name: 'Wear 12',
      oldPrice: 5000,
      newPrice: 49000,
      discount: 2,
      src: cloth6,
      category: 'top',
      description:
        'Comfortable and stylish premium hoodie perfect for casual wear. Made from high-quality fabric with excellent durability.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Gray', 'Navy'],
      rating: 4.5,
      reviews: 128,
    },

    {
      id: 13,
      name: 'Wear 13',
      oldPrice: 5000,
      newPrice: 49000,
      discount: 2,
      src: cloth7,
      category: 'top',
      description:
        'Comfortable and stylish premium hoodie perfect for casual wear. Made from high-quality fabric with excellent durability.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Gray', 'Navy'],
      rating: 4.5,
      reviews: 128,
    },

    {
      id: 14,
      name: 'Wear 14',
      oldPrice: 5000,
      newPrice: 49000,
      discount: 2,
      src: cloth1,
      category: 'top',
      description:
        'Comfortable and stylish premium hoodie perfect for casual wear. Made from high-quality fabric with excellent durability.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Gray', 'Navy'],
      rating: 4.5,
      reviews: 128,
    },

    {
      id: 15,
      name: 'Wear 15',
      oldPrice: 5000,
      newPrice: 49000,
      discount: 2,
      src: cloth2,
      category: 'top',
      description:
        'Comfortable and stylish premium hoodie perfect for casual wear. Made from high-quality fabric with excellent durability.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Gray', 'Navy'],
      rating: 4.5,
      reviews: 128,
    },

    {
      id: 16,
      name: 'Wear 16',
      oldPrice: 5000,
      newPrice: 49000,
      discount: 2,
      src: cloth3,
      category: 'top',
      description:
        'Comfortable and stylish premium hoodie perfect for casual wear. Made from high-quality fabric with excellent durability.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Gray', 'Navy'],
      rating: 4.5,
      reviews: 128,
    },

    {
      id: 17,
      name: 'Wear 17',
      oldPrice: 5000,
      newPrice: 49000,
      discount: 2,
      src: cloth4,
      category: 'top',
      description:
        'Comfortable and stylish premium hoodie perfect for casual wear. Made from high-quality fabric with excellent durability.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Gray', 'Navy'],
      rating: 4.5,
      reviews: 128,
    },

    {
      id: 18,
      name: 'Wear 18',
      oldPrice: 5000,
      newPrice: 49000,
      discount: 2,
      src: cloth5,
      category: 'top',
      description:
        'Comfortable and stylish premium hoodie perfect for casual wear. Made from high-quality fabric with excellent durability.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Gray', 'Navy'],
      rating: 4.5,
      reviews: 128,
    },

    {
      id: 19,
      name: 'Wear 19',
      oldPrice: 5000,
      newPrice: 49000,
      discount: 2,
      src: cloth6,
      category: 'top',
      description:
        'Comfortable and stylish premium hoodie perfect for casual wear. Made from high-quality fabric with excellent durability.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Gray', 'Navy'],
      rating: 4.5,
      reviews: 128,
    },

    {
      id: 20,
      name: 'Wear 20',
      oldPrice: 5000,
      newPrice: 49000,
      discount: 2,
      src: cloth7,
      category: 'top',
      description:
        'Comfortable and stylish premium hoodie perfect for casual wear. Made from high-quality fabric with excellent durability.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Gray', 'Navy'],
      rating: 4.5,
      reviews: 128,
    },

    {
      id: 21,
      name: 'Wear 21',
      oldPrice: 5000,
      newPrice: 49000,
      discount: 2,
      src: cloth1,
      category: 'top',
      description:
        'Comfortable and stylish premium hoodie perfect for casual wear. Made from high-quality fabric with excellent durability.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Gray', 'Navy'],
      rating: 4.5,
      reviews: 128,
    },

    {
      id: 22,
      name: 'Wear 22',
      oldPrice: 5000,
      newPrice: 49000,
      discount: 2,
      src: cloth2,
      category: 'top',
      description:
        'Comfortable and stylish premium hoodie perfect for casual wear. Made from high-quality fabric with excellent durability.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Gray', 'Navy'],
      rating: 4.5,
      reviews: 128,
    },

    {
      id: 23,
      name: 'Wear 23',
      oldPrice: 5000,
      newPrice: 49000,
      discount: 2,
      src: cloth3,
      category: 'top',
      description:
        'Comfortable and stylish premium hoodie perfect for casual wear. Made from high-quality fabric with excellent durability.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Gray', 'Navy'],
      rating: 4.5,
      reviews: 128,
    },

    {
      id: 24,
      name: 'Wear 24',
      oldPrice: 5000,
      newPrice: 49000,
      discount: 2,
      src: cloth4,
      category: 'top',
      description:
        'Comfortable and stylish premium hoodie perfect for casual wear. Made from high-quality fabric with excellent durability.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Gray', 'Navy'],
      rating: 4.5,
      reviews: 128,
    },
  ]

  // -------------------------------------
  // PAGINATION LOGIC
  // -------------------------------------
  const ITEMS_PER_PAGE = 8
  const [currentPage, setCurrentPage] = useState(1)

  const lastIndex = currentPage * ITEMS_PER_PAGE
  const firstIndex = lastIndex - ITEMS_PER_PAGE
  const currentItems = PRODUCTS.slice(firstIndex, lastIndex)

  const totalPages = Math.ceil(PRODUCTS.length / ITEMS_PER_PAGE)
  // -------------------------------------

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
      className="products"
    >
      <div className="products-container">
        {/* SHOW ONLY CURRENT PAGE ITEMS */}
        {currentItems.map((product) => (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            key={product.id}
            className="product-card"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              <img
                src={product.src}
                alt={product.name}
                className="product-image"
              />
              <span className="p-price">₦{product.oldPrice}</span>
            </motion.div>

            <h3 className="p-name">{product.name}</h3>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="p-stars"
            >
              <Star size={16} fill="#c8a165" stroke="#c8a165" />
              <Star size={16} fill="#c8a165" stroke="#c8a165" />
              <Star size={16} fill="#c8a165" stroke="#c8a165" />
              <Star size={16} fill="#c8a165" stroke="#c8a165" />
              <Star size={16} fill="none" stroke="#c8a165" />
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              <li>
                <button
                  className={`bookmark-btn ${isWishlisted(product.id) ? 'active' : ''}`}
                  onClick={() => toggleWishlist(product)}
                  aria-pressed={isWishlisted(product.id)}
                >
                  <BookmarkIcon
                    size={17}
                    color={isWishlisted(product.id) ? '#fff' : '#000'}
                  />
                </button>
              </li>
              <li>
                <SearchIcon
                  size={17}
                  color="#000"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setQuick(product)}
                />
              </li>
              <Link
                to={`/product/${product.id}`}
                state={product}
                className="button-two style-2"
                data-text="View Details"
              >
                View Details
              </Link>
            </motion.ul>
          </motion.div>
        ))}
      </div>

      {/* PAGINATION */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => {
          if (page >= 1 && page <= totalPages) {
            setCurrentPage(page)
          }
        }}
      />

      {quick && (
        <ProductQuickView
          product={quick}
          onClose={() => setQuick(null)}
          onAddToCart={handleAddToCart}
        />
      )}
    </motion.div>
  )
}

export default Products
