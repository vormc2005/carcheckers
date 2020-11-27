import React, {Fragment, useContext} from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import AuthContext from '../context/auth/authContext';




function NavbarAppComponent() {

    const authContext = useContext(AuthContext);

    const {isAuthenticated, logout, user, token} = authContext;


    const onLogout=e=>{
        e.preventDefault()
        logout();

    }

   
     return (
      
<div>
<Navbar className="myNavBar" collapseOnSelect expand="lg" bg="light" variant="light">
<Navbar.Brand href="#home">Dmitry Voronov</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="ml-auto">
    
  {token ?  (  
  
    <Fragment>
                  <Nav.Link className="pr-4" href="/">Home</Nav.Link>
                  <Nav.Link className="pr-4" href="/scheduleservice">Schedule Service</Nav.Link>
                <Nav.Link className="pr-4" href="/inquiries">Customer's Inquiries</Nav.Link>  
                <Nav.Link className="pr-4" href="/register">Register new admin </Nav.Link>
                <Nav.Link className="pr-4" href="/" onClick={onLogout}><i className="fas fa-sign-out-alt"></i><span className="hide-sm">Logout</span></Nav.Link> 
    </Fragment>
                
                ):(
    <Fragment>
                <Nav.Link className="pr-4" href="/">Home</Nav.Link>
                <Nav.Link className="pr-4" href="/ourservices">Our Services</Nav.Link>
                <Nav.Link className="pr-4" href="/scheduleservice">Schedule Service</Nav.Link>
                <Nav.Link className="pr-4" href="/contactus">Contact us</Nav.Link>
                <Nav.Link className="pr-4" href="/login">Admin Login</Nav.Link>
    
    </Fragment>
                ) }
    
  </Nav>
  
</Navbar.Collapse>
</Navbar>
</div>
    
  

    )
}

export default NavbarAppComponent
