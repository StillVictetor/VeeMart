import { motion, useScroll, useTransform } from 'framer-motion'
import React, { use, useRef } from 'react'
import img1 from '../assets/wears1.jfif'

const ProductRotate = () => {
  const containerRef = useRef(null)

  // Track scroll inside this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2])

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5])



  // Convert scroll progress to rotation degrees
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  return (
    <div
      ref={containerRef}
      style={{
        height: '200vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f8f8f8',
      }}
    >
      <motion.img
        src={img1}
        alt="Rotating Product"
        style={{
          width: '350px',
          rotate,
          scale,
          opacity,
        }}
      />
    </div>
  )
}

export default ProductRotate
