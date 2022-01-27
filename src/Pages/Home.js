import React from 'react'
import '../CSS/Home.css'
import Portfolio from '../Components/Portfolio';
import Contact from '../Components/Contact';
import About from '../Components/About';
import {Link as Scroll} from 'react-scroll'

const Home = () => {

  const checkpoint = 300
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    let opacity = 0
    if (currentScroll <= checkpoint) {
       opacity = 1 - currentScroll / checkpoint;
    } else {
      opacity = 0;
    }
    document.querySelector(".home-title").style.opacity = opacity;
  });

 
  return (
    
    <div className='home-page'>
      <div className='page-content'>
        <section>
        <div className='home-title'>
          <h1 className='title-name'>Igor Doroshkevich</h1>
          <h2 className='title-desc'>Fullstack Software Developer</h2>
          <Scroll to="contact" spy={true} smooth={true}><button className='send-btn'>Contact</button></Scroll>
        
        </div>
        </section>


        <section>
         <About />
        </section>

        <section>
          <Portfolio />
        </section>


        <section>
        <Contact />
        </section>
      </div>
    </div>
    
  )
}

export default Home
