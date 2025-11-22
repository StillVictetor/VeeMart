import React from 'react'
import '../Styles/home.css'
import banner from '../assets/bg.png'
import { motion } from 'framer-motion'
import { LocateFixedIcon, PhoneIcon, MailIcon } from 'lucide-react'

const ContactHome = () => {
  const IMAGES = [{ id: 1, src: banner, alt: 'Banner 1', name: 'CONTACT' }]

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
      <div className="contact">
        <div className="contact-grid">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="contact-details"
          >
            <div>
              <h2>Contact Details</h2>
              <p>
                {' '}
                <LocateFixedIcon
                  color="#333"
                  className="icons"
                  size={20}
                />{' '}
                Unicus, PTI, ||| Warri, Delta State
              </p>

              <p>
                {' '}
                <PhoneIcon color="#333" className="icons" size={20} /> +234
                7035731997 ||| +234 9011789933
              </p>
              <p>
                {' '}
                <MailIcon color="#333" className="icons" size={20} />{' '}
                veemart@gmail.com ||| victetor.dev@gamil.com
              </p>
            </div>

            <h2>Send Message</h2>
            <form className="send-message">
              <input type="text" name="Name" placeholder="eg. Victor Stephen" />
              <input
                type="email"
                name="Email"
                placeholder="example@gmail.com"
              />
              <textarea
                name="Message"
                id="message"
                placeholder="Message"
                rows={5}
                cols={40}
              ></textarea>
              <input type="submit" className="btn" />
            </form>
          </motion.div>

          <div style={{ width: '100%', height: '450px' }}>
            <iframe
              title="Unicus Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4046.7449301153943!2d5.792933885479099!3d5.572379767667599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1041ad474139fc7d%3A0xa148b5d02aabe1a6!2sUnicus!5e0!3m2!1sen!2sng!4v1763713831092!5m2!1sen!2sng"
              style={{ border: 0, width: '100%', height: '100%' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ContactHome
