import React from 'react'
import '../Styles/home.css'
import banner from "../assets/bg.png"

const Home = () => {

    const IMAGES = [
        {id: 1, src: banner, alt: "Banner 1", name: "SHOP"  },
    ]


  return (
    <div>
        <section className="home" id="home">
            {IMAGES.map((image) => (
                <div className="home-banner" key={image.id}>
                    <h1>{image.name}</h1>
                    <img className='img' src={image.src} alt={image.alt} />
                </div>
            ))}
        </section>
    </div>
  )
}

export default Home