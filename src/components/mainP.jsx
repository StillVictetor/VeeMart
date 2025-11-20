import React from 'react'
import '../Styles/mainP.css'
import bg from '../assets/bg.png'
import bg2 from '../assets/Old money.jfif'
import { Star } from 'lucide-react'

const mainP = () => {

    const IMAGES =[
        {id: 1, src: bg, name: "Design By VeeMart Modern -2025"}
    ]

    const PRODUCTS =[
        {
        id: 1,
        name: 'Old Money Fashion',
        oldPrice: 2000,
        newPrice: 49000,
        discount: 2,
        src: bg2,
      },
    ] 


  return (
    <div className='main-page' >
        <section className="main-section" id="main">
            {PRODUCTS.map((prod) =>(
                <div className='promo-card' key={prod.id}>
                    <div>
                        <img src={prod.src} alt={prod.name} className="product-image" />
                    </div>
                    
                    <h3 className="p-name">{prod.name}</h3>

                    <div className="p-stars">
                        <Star size={16} fill="#c8a165" stroke="#c8a165" />
                        <Star size={16} fill="#c8a165" stroke="#c8a165" />
                        <Star size={16} fill="#c8a165" stroke="#c8a165" />
                        <Star size={16} fill="#c8a165" stroke="#c8a165" />
                        <Star size={16} fill="none" stroke="#c8a165" />
                    </div>
                </div>
            )
            )}
            
            {IMAGES.map((image) => (
                <div className="main-grid" key={image.id}>
                    <img className='img' src={image.src} alt={image.alt} />
                    <h1>Design By <br/> VeeMart <br/> Modern <br/> -2025</h1>
                </div>
            ))}
        </section>
    </div>
  )
}

export default mainP