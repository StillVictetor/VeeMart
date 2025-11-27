import React from 'react'
import '../Styles/home.css'
import { motion } from 'framer-motion'
import banner from '../assets/bg.png'
import aboutPic from '../assets/aboutpic.jfif'
import team1 from '../assets/team1.jfif'
import team2 from '../assets/team2.jfif'
import team3 from '../assets/team3.jfif'
import team4 from '../assets/team4.jfif'

const AboutHome = () => {
  const IMAGES = [{ id: 1, src: banner, alt: 'Banner 1', name: 'ABOUT' }]

  const TEAM = [
    {
      id: 1,
      src: team1,
      name: 'Victor Stephen',
      title: 'Founder & Creative Director',
      description:
        'Leads the brand vision of Veemart, focusing on creating a timeless and elegant fashion experience inspired by classic style.',
    },

    {
      id: 2,
      src: team2,
      name: 'Michael Lawson',
      title: 'Head of Marketing',
      description:
        'Oversees brand communication and customer outreach, ensuring Veemart stays connected with its audience in a meaningful way.',
    },

    {
      id: 3,
      src: team3,
      name: 'Daniel Okoro',
      title: 'Operations Manager',
      description:
        'Handles day-to-day management, product organization, and smooth workflow to keep the platform running efficiently.',
    },

    {
      id: 4,
      src: team4,
      name: 'Samuel Adeyemi',
      title: 'Style & Branding Lead',
      description:
        'Shapes the visual identity of Veemart, curating the old-money aesthetic and guiding the overall fashion direction.',
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
    >
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="home"
        id="home"
      >
        {IMAGES.map((image) => (
          <div className="home-banner" key={image.id}>
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
          </div>
        ))}
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="about"
      >
        <div className="about-grid">
          <img className="about-pic" src={aboutPic} alt="aboutpic" />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <h3>ABOUT VEEMART</h3>
            <p>
              Veemart is a men's fashion brand created to bring a sense of
              class, confidence, and timeless style to modern shoppers. Inspired
              by the old-money aesthetic, the brand focuses on clean designs,
              calm colors, and a luxurious yet simple shopping experience. Every
              piece showcased on Veemart is selected with the idea of elegance
              and long lasting fashion, giving men the chance to look sharp
              without trying too hard.
            </p>

            <p>
              Our mission is to make high-quality fashion accessible and
              enjoyable. Veemart represents a blend of classic taste and modern
              presentation, offering a smooth and organized way to browse
              through clothing that suits different occasions, moods, and
              personalities. We believe style should feel effortless, and our
              collection reflects that belief through carefully curated items.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="team"
        >
          <h2>Team Member</h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="team-grid"
          >
            {TEAM.map((team) => (
              <div className="team-card" key={team.id}>
                <img className="profile" src={team.src} alt={team.alt} />
                <h1>{team.name}</h1>
                <h3>{team.title}</h3>
                <p>{team.description}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default AboutHome
