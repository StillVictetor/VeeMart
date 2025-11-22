import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import '../Styles/featuredProduct.css'
import wear from '../assets/wears1.jfif'
import { Star, BookmarkIcon, SearchIcon } from 'lucide-react'
import ProductQuickView from './ProductQuickView'
import { useCart } from '../context/CartContext'

const FeaturedProduct = () => {
  const [quick, setQuick] = useState(null)

  const FEATUREDPRODUCTS = [
    {
      id: 1,
      name: 'Wear 1',
      oldPrice: 2000,
      newPrice: 49000,
      discount: 2,
      src: wear,
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
      oldPrice: 2000,
      newPrice: 49000,
      discount: 2,
      src: wear,
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
      oldPrice: 2000,
      newPrice: 49000,
      discount: 2,
      src: wear,
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
      oldPrice: 2000,
      newPrice: 49000,
      discount: 2,
      src: wear,
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
      name: 'Wear 4',
      oldPrice: 2000,
      newPrice: 49000,
      discount: 2,
      src: wear,
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
      name: 'Wear 4',
      oldPrice: 2000,
      newPrice: 49000,
      discount: 2,
      src: wear,
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
      name: 'Wear 4',
      oldPrice: 2000,
      newPrice: 49000,
      discount: 2,
      src: wear,
      category: 'top',
      description:
        'Comfortable and stylish premium hoodie perfect for casual wear. Made from high-quality fabric with excellent durability.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Gray', 'Navy'],
      rating: 4.5,
      reviews: 128,
    },
  ]
  const carouselRef = useRef(null)

  const scroll = (direction) => {
    if (!carouselRef.current) return
    const { scrollLeft, clientWidth } = carouselRef.current
    const scrollAmount = clientWidth * 0.8
    carouselRef.current.scrollTo({
      left:
        direction === 'left'
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount,
      behavior: 'smooth',
    })
  }
  const handleAddToCart = (product) => {
    // placeholder: wire this to your cart logic
    console.log('Add to cart', product)
  }
  const { toggleWishlist, isWishlisted } = useCart()

  return (
    <div>
      <section className="featured-container" id="flash">
        <h1>Featured Product</h1>
        <div className="featured">
          <Link className="arrow-left" onClick={() => scroll('left')}>
            <p>P</p>
            <p>R</p>
            <p>E</p>
            <p>V</p>
          </Link>

          <motion.div
            className="carousel-container"
            ref={carouselRef}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            {FEATUREDPRODUCTS.map((item) => (
              <div key={item.id} className="featured-card">
                <div>
                  <img
                    src={item.src}
                    alt={item.name}
                    className="featured-image"
                  />
                  <span className="p-price">${item.oldPrice}</span>
                </div>

                <h3 className="p-name">{item.name}</h3>

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
                      className={`bookmark-btn ${isWishlisted(item.id) ? 'active' : ''}`}
                      onClick={() => toggleWishlist(item)}
                      aria-pressed={isWishlisted(item.id)}
                      title={
                        isWishlisted(item.id)
                          ? 'Remove from wishlist'
                          : 'Add to wishlist'
                      }
                    >
                      <BookmarkIcon
                        size={17}
                        color={isWishlisted(item.id) ? '#fff' : '#000'}
                      />
                    </button>
                  </li>
                  <li>
                    <SearchIcon
                      size={17}
                      color="#000"
                      style={{ cursor: 'pointer' }}
                      onClick={() => setQuick(item)}
                    />
                  </li>
                  <button
                    className="button-two style-2"
                    data-text="View Details"
                  >
                    View Details
                  </button>
                </ul>
              </div>
            ))}
          </motion.div>

          <Link className="arrow-right" onClick={() => scroll('right')}>
            <p>N</p>
            <p>E</p>
            <p>X</p>
            <p>T</p>
          </Link>
        </div>
      </section>
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

export default FeaturedProduct
