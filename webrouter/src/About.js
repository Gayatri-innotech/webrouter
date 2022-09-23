import React from 'react'
import {NavLink} from "react-router-dom"

const About = () => {
  return (
    <>
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">About Us </NavLink>
            </li>
          <li>
            <NavLink to = "/contact">Contact</NavLink>
            </li>
          <li>
            <NavLink to="/messages">Messages </NavLink>
            </li>
        </ul>
      </nav>
    </header>
    <section>
    <h1>Home Page</h1>
  </section>
  </>
  )
}

export default About;