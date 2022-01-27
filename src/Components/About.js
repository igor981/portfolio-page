import React from 'react'

const About = () => {
  return (
    <div className='about-me' id='about'>
          <div className='about-title'>
            <h1 className='about-text-title'>About me</h1>
            <p className='about-paragraph'>
              I'am a Fullstack JS developer based in Stockholm, Sweden. I had 2 years of hobby programming experience before getting selected into 
              one of the hardest Software Developing Bootcamps in Europe. With several hundreds of applications and a grueling interview process I
              was one of the 40 people that got a placement. I'm comfortable in most sides of developing but my interest leans more towards the backend.
              My passion is in the software infrastructure, architecture, databases, userbases.
              I have experience in building simple one page websites to larger projects.
            </p>
          </div>


          <div className='experiences'>
            <div className='tools'>
              <ul className='tools-list'>
                <h3 className='list-title'>
                Backend
                </h3>
                <li>NodeJS</li>
                <li>ExpressJS</li>
                <li>REST</li>
                <li>GraphQL</li>
                <li>MongoDB/PostgreSQL</li>
              </ul>
              <ul className='tools-list'>
              <h3  className='list-title'>
                Frontend
                </h3>
                <li>React</li>
                <li>Redux</li>
                <li>HTML</li>
                <li>jQuery</li>
                <li>CSS/SASS</li>
              </ul>
              <ul className='tools-list'>
              <h3  className='list-title'>
                Tools
                </h3>
                <li>VS Code</li>
                <li>Handlebars</li>
                <li>Mocha/Jest</li>
                <li>Git+github</li>
                <li>AWS</li>
                <li>Cloud Platforms</li>
                <li>TDD</li>
                <li>Agile work methods</li>
              </ul>
            </div>
          </div>
        </div>
  )
}

export default About
