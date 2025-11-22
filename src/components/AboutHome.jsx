import React from 'react'
import '../Styles/home.css'
import banner from "../assets/bg.png"
import aboutPic from '../assets/aboutpic.jfif'
import teampic from '../assets/profilepic1.jpg'

const AboutHome = () => {

    const IMAGES = [
        {id: 1, src: banner, alt: "Banner 1", name: "ABOUT"  },
    ]

    const TEAM = [
        {id: 1, src: teampic, name: "VICTOR STEPHEN", title: "CHAIRMAN", description: "There are many variations of passage of Lorem Ipsum available, but the in majority have suffered." },

        {id: 2, src: teampic, name: "VICTOR STEPHEN", title: "CHIEF MARKETING", description: "There are many variations of passage of Lorem Ipsum available, but the in majority have suffered." },

        {id: 3, src: teampic, name: "VICTOR STEPHEN", title: "CHAIRMAN", description: "There are many variations of passage of Lorem Ipsum available, but the in majority have suffered." },

        {id: 4, src: teampic, name: "VICTOR STEPHEN", title: "CHAIRMAN", description: "There are many variations of passage of Lorem Ipsum available, but the in majority have suffered." }
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

        <div className='about' >
            <div className='about-grid' >
                <img className='about-pic' src={aboutPic} alt="aboutpic" />
                <div>
                    <h3>ABOUT VEEMART</h3>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, consequatur esse nobis earum consectetur ratione delectus perspiciatis veniam optio dolores! Asperiores, nemo explicabo molestiae doloremque commodi maxime dignissimos distinctio natus.
                    </p>

                    <p>
                   Id incidunt ratione enim. Maxime minima voluptas quaerat quod voluptatibus, eaque neque qui libero possimus rerum eos repellendus, beatae totam harum recusandae tempora, non unde laudantium eum at dolor. Incidunt.
                   Provident molestias pariatur architecto tempora voluptatem eaque a tempore corporis, commodi quisquam tenetur modi. Dolores, dolorem commodi soluta possimus repellat temporibus ipsam est voluptatibus molestias atque aperiam officia tempore fugit.</p>
                </div>
            </div>
           <div className='team' >
                <h2>Team Member</h2>

                <div className="team-grid">
                {TEAM.map((team) => (
                <div className="team-card" key={team.id}>
                    <img className='profile' src={team.src} alt={team.alt} />
                    <h1>{team.name}</h1>
                    <h3>{team.title}</h3>
                    <p>{team.description}</p>
                </div>
                ))}
               </div>
               </div>
        </div>
    </div>
  )
}

export default AboutHome