import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'




function NavbarAppComponent() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto  mr-5">
            
                <Nav.Link className="pr-4" href="/">Home</Nav.Link>
                <Nav.Link className="pr-4" href="/ourservices">Our Services</Nav.Link>
                <Nav.Link className="pr-4" href="/scheduleservice">Schedule Service</Nav.Link>
                <Nav.Link className="pr-4" href="/contactus">Contact us</Nav.Link>
                <Nav.Link className="pr-4" href="/Adminlogin">Admin Login</Nav.Link>
                <Nav.Link className="pr-4" href="/Inquiries">Customer's Inquiries</Nav.Link>
          
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
    )
}

export default NavbarAppComponent
