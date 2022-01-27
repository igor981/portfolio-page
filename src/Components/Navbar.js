import React from 'react'
import {Link as Scroll} from 'react-scroll'

const Navbar = () => {
  return (
    <div>
      <nav className='navigation' id="navnav">
        <div className='navigation-logo'>
          <h3 className='navigation-logo-text'>JakuTech</h3>
        </div>
        <div className='navigation-list'>
          <ul className='navigation-list-ul'>
            <li className='navigation-list-ul-li'>
             <Scroll to="home-page" spy={true} smooth={true}>Top</Scroll>      
            </li>
            <li className='navigation-list-ul-li'>
            <Scroll to="about" spy={true} smooth={true}>About</Scroll>            
            </li>
            <li className='navigation-list-ul-li'>
            <Scroll to="portfolio" spy={true} smooth={true}>Portfolio</Scroll>            

            </li>
            <li className='navigation-list-ul-li'>
            <Scroll to="contact" spy={true} smooth={true}>Contact</Scroll>
            </li>
          </ul>

        </div>

      </nav>
    </div>
  )
}

export default Navbar
