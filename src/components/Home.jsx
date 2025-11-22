import React from 'react'
import '../Styles/home.css'
import { motion } from 'framer-motion'
import banner from '../assets/bg.png'

const Home = () => {
  const IMAGES = [{ id: 1, src: banner, alt: 'Banner 1', name: 'SHOP' }]

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
    >
      <section className="home" id="home">
        {IMAGES.map((image) => (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="home-banner"
            key={image.id}
          >
            <h1>{image.name}</h1>
            <motion.img
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="img"
              src={image.src}
              alt={image.alt}
            />
          </motion.div>
        ))}
      </section>
    </motion.div>
  )
}

export default Home
