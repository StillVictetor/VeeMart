import React, { useState } from 'react'
import '../Styles/categories.css'

const Categories = () => {
  const categoriesData = [
    { id: 1, name: 'Category' },
    { id: 2, name: 'Price' },
    { id: 3, name: 'Color' },
    { id: 4, name: 'Size' },
  ]

  const [openId, setOpenId] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 })
  const [selectedColor, setSelectedColor] = useState(null)
  const [selectedSize, setSelectedSize] = useState(null)
  const [applied, setApplied] = useState(false)

  const togglePanel = (id) => {
    setOpenId(openId === id ? null : id)
  }

  const colors = [
    { hex: '#c8a165', name: 'Beige' },
    { hex: '#f28b82', name: 'Pink' },
    { hex: '#8bd3c7', name: 'Teal' },
    { hex: '#a59cff', name: 'Lavender' },
    { hex: '#ffd166', name: 'Yellow' },
  ]
  const categoryOptions = ['Shirt', 'Trouser', 'Watches', 'Shoes']
  const sizes = ['XS', 'S', 'M', 'L', 'XL']

  return (
    <div className="categories">
      <div className="categories-container">
        <div className="categories-list">
          {categoriesData.map((category) => (
            <div
              key={category.id}
              className="category-item"
              onClick={() => togglePanel(category.id)}
            >
              <button type="button" className="category-button">
                {category.name}
              </button>

              <div
                className={`panel ${openId === category.id ? 'open' : ''}`}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Category options */}
                {category.name === 'Category' && (
                  <div className="options-list">
                    {categoryOptions.map((opt) => (
                      <div
                        key={opt}
                        className={`option ${selectedCategory === opt ? 'selected' : ''}`}
                        onClick={() => setSelectedCategory(opt)}
                      >
                        {opt}
                      </div>
                    ))}
                  </div>
                )}

                {/* Price inputs */}
                {category.name === 'Price' && (
                  <div className="price-panel">
                    <div className="range-row">
                      <div className="range-label">
                        Min: <strong>{priceRange.min}</strong>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={1000}
                        value={priceRange.min}
                        onChange={(e) => {
                          const val = Number(e.target.value)
                          // ensure min <= max
                          setPriceRange((prev) => ({
                            min: Math.min(val, prev.max),
                            max: prev.max,
                          }))
                        }}
                      />
                    </div>
                    <div className="range-row">
                      <div className="range-label">
                        Max: <strong>{priceRange.max}</strong>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={1000}
                        value={priceRange.max}
                        onChange={(e) => {
                          const val = Number(e.target.value)
                          // ensure max >= min
                          setPriceRange((prev) => ({
                            min: prev.min,
                            max: Math.max(val, prev.min),
                          }))
                        }}
                      />
                    </div>
                  </div>
                )}

                {/* Color swatches */}
                {category.name === 'Color' && (
                  <div className="swatches-vertical">
                    {colors.map((c) => (
                      <div
                        key={c.hex}
                        className={`swatch-item ${selectedColor === c.hex ? 'active' : ''}`}
                        onClick={() => setSelectedColor(c.hex)}
                      >
                        <div
                          className={`swatch`}
                          style={{ backgroundColor: c.hex }}
                          aria-hidden="true"
                        />
                        <div className="swatch-name">{c.name}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Size options */}
                {category.name === 'Size' && (
                  <div className="options-list">
                    {sizes.map((s) => (
                      <div
                        key={s}
                        className={`option ${selectedSize === s ? 'selected' : ''}`}
                        onClick={() => setSelectedSize(s)}
                      >
                        {s}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div>
          <button
            className={`apply-filters-button ${applied ? 'active' : ''}`}
            onClick={() => setApplied((prev) => !prev)}
          >
            {applied ? 'Applied' : 'Apply'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Categories
