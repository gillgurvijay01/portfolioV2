import React from 'react'
import css from './navbar.module.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
{/* <nav className={`navbar navbar-expand-lg ${css.navbar}`}>
  <div className="container-fluid ">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse">
      <div className={`navbar-nav ${css.navLinkDiv}`}>
        <a className={`nav-link ${css.link}`} href="#home">Home</a>
        <a className={`nav-link ${css.link}`} href="#about">About</a>
        <a className={`nav-link ${css.link}`} href="#timelne">Timeline</a>
       </div>
    </div>
  </div>
</nav> */}
    return (

<Navbar >
<Container>
  <Nav>
    <Nav.Link href="#home">Home</Nav.Link>
    <Nav.Link href="#about">About</Nav.Link>
    <Nav.Link href="#work">Work</Nav.Link>
    <Nav.Link href="Projects">Projects</Nav.Link>
  </Nav>
</Container>
</Navbar>
  )
}

export default Header