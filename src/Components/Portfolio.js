import React from 'react'

const Portfolio = () => {
  return (
    <div className='port-div' id="portfolio">
          <div className='porto-container'>
            <div className='porto-title'>
              <h1>Portfolio</h1>
            </div>
            <ul className='porto-scroll'>
            
                  <li className='card'>
                      <h1 className='port-name'>ProCo</h1>
                      <p className='porto-description'>
                      A fullstack Javascript application for consulting firms and their employees. As a consultant you can register your availability and view your schedule, which is handled by the consulting firm. Consulting firms can use ProCo to assign consultants to companies, view their availability, and schedule them to work. They can also add companies and consultants to their roster. Authentication is required for use of ProCo, which is done through JSON web tokens.

                      </p>
                  </li>
                  <li className='card'>
                      <h1 className='port-name'>EZlog *In progress*</h1>
                      <p className='porto-description'>
                      A fullstack application using the PERN techstack. EZlog is a ticket system for bugs. As a user you can either create or join an organisation. The organisation consists of members, projects and tickets. You can open or close tickets and you can add individual users to tickets. 
                      </p>
                  </li>
                  <li className='card'>
                      <h1 className='port-name'>E-Commerce</h1>
                      <p className='porto-description'>
                      A fullstack e-commerce webapplication built with the MERN techstack. React front-end sends GET requests to server side API and fetches products. On The client side I used Redux to dynamically display content on the page. The app comes a cart where you can add, update and remove products. 
                      </p>
                  </li>
                  <li className='card'>
                      <h1 className='port-name'>The Pizza Place</h1>
                      <p className='porto-description'>
                      A pizza ordering app built with TypeScript and React-Redux. Using an external api, the app gets a list of restaurants. The restaurants get rendered in a list, ordered by distance by comparing latitude and longtitude of the user and each restaurant. Clicking on a restaurant navigates you to the restaurants page where you get a menu. You can add, remove and change quantity of each product to your cart and place an order.
                      </p>
                  </li>
                  <li className='card'>
                      <h1 className='port-name'>Atlas</h1>
                      <p className='porto-description'>Atlas is a SPA wikipedia-esque website that gathers data from several different APIs. The data inside API calls are used to call furthers APIs. This app is created with React Redux and uses a state management. The API calls are done through a backend built with express. </p>
                  </li>
                  <li className='card'>
                      <h1 className='port-name'>Todo App</h1>
                      <p className='porto-description'>
                        The famous "Hello world" of coding projects. A CRUD todo app where you can create, read, update and delete todos from your todo list. Created with React-Redux
                      </p>
                  </li>
              
            </ul>

          </div>
      </div>
  )
}

export default Portfolio
