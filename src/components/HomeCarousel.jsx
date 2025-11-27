import React, { useRef, useCallback, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import '../Styles/homeCarousel.css'
import imgM2 from '../assets/shoe1.png'
import imgM3 from '../assets/bg.png'

const IMAGES = [
  { id: 1, name: 'Wear 1', src: imgM2 },
  { id: 2, name: 'Wear 2', src: imgM3 },
]

export default function HomeCarousel() {
  const carouselRef = useRef(null)
  const boxRef = useRef(null)
  const runningTimeRef = useRef(null)
  const timeoutRef = useRef(null)
  const autoNextRef = useRef(null)

  const [currentIndex, setCurrentIndex] = useState(0)

  const timeRunning = 3000
  const timeAutoNext = 7000

  // Animation bar reset
  const resetTimeAnimation = useCallback(() => {
    if (!runningTimeRef.current) return
    const bar = runningTimeRef.current
    bar.style.animation = 'none'
    bar.offsetHeight // force reflow
    bar.style.animation = 'runningTime 7s linear forwards'
  }, [])

  // Show slider function
  const showSlider = useCallback(
    (type) => {
      const box = boxRef.current
      if (!box) return
      const items = box.querySelectorAll('.item')
      if (type === 'next') {
        box.appendChild(items[0])
        setCurrentIndex((p) => (p + 1) % IMAGES.length)
      } else {
        box.prepend(items[items.length - 1])
        setCurrentIndex((p) => (p === 0 ? IMAGES.length - 1 : p - 1))
      }
      clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => {
        carouselRef.current?.classList.remove('next', 'prev')
      }, timeRunning)
      clearTimeout(autoNextRef.current)
      autoNextRef.current = setTimeout(() => showSlider('next'), timeAutoNext)
      resetTimeAnimation()
    },
    [resetTimeAnimation, timeRunning, timeAutoNext]
  )

  // Go to slide function
  const goToSlide = (index) => {
    if (index === currentIndex) return
    let diff = index - currentIndex
    if (diff > 0) {
      while (diff--) showSlider('next')
    } else {
      while (diff++) showSlider('prev')
    }
  }

  // useEffect after all hooks are declared
  useEffect(() => {
    resetTimeAnimation()
    autoNextRef.current = setTimeout(() => showSlider('next'), timeAutoNext)
    return () => {
      clearTimeout(timeoutRef.current)
      clearTimeout(autoNextRef.current)
    }
  }, [resetTimeAnimation, showSlider, timeAutoNext])

  return (
    <section className="sec1" ref={carouselRef}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="box1"
        ref={boxRef}
      >
        {IMAGES.map((img) => (
          <div key={img.id} className="item">
            <div className="content">
              <div className="imgBox">
                <img src={img.src} alt="" />
              </div>
              <div className="textBox">
                <div className="des">{img.description}</div>
                <div className="title">Search Less. Live More</div>
                <div className="name">{img.name}</div>
                {/* NOTE FOR COLLABORATOR: Passing demo item through location.state.
                    For direct URL access implement server-side product lookup. */}
                <Link
                  to={`/product/${img.id}`}
                  state={img}
                  className="button-two style-2"
                  data-text="View Details"
                  onClick={() => {
                    try {
                      sessionStorage.setItem(
                        `product_${img.id}`,
                        JSON.stringify(img)
                      )
                    } catch {
                      /* ignore storage errors */
                    }
                  }}
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      <div className="dots-container">
        {IMAGES.map((_, idx) => (
          <div
            key={idx}
            className={`dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(idx)}
          ></div>
        ))}
      </div>

      <div className="timeRunning" ref={runningTimeRef}></div>
    </section>
  )
}
