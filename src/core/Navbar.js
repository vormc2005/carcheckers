import React, {Fragment, useContext} from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import AuthContext from '../context/auth/authContext';



function NavbarAppComponent() {

    const authContext = useContext(AuthContext);

    const {isAuthenticated, logout, user} = authContext;


    const onLogout=e=>{
        logout()
    }

    const authLinks =(
        <Fragment>
    <li>Hello {user && user.name}</li>
    <li>
        <a href="#!"><i className="fas fa-sign-out-alt"></i></a> <span className="hide-sm">Logout</span>
    </li>
                <Nav.Link className="pr-4" href="/inquiries">Customer's Inquiries</Nav.Link>  
                <Nav.Link className="pr-4" href="/register">Register new admin </Nav.Link>
                <Nav.Link className="pr-4" href="#!" onClick={onLogout}><i className="fas fa-sign-out-alt"></i><span className="hide-sm">Logout</span></Nav.Link> 
    </Fragment>
    )

    const guestLinks =(
        <Fragment>
                <Nav.Link className="pr-4" href="/">Home</Nav.Link>
                <Nav.Link className="pr-4" href="/ourservices">Our Services</Nav.Link>
                <Nav.Link className="pr-4" href="/scheduleservice">Schedule Service</Nav.Link>
                <Nav.Link className="pr-4" href="/contactus">Contact us</Nav.Link>
                <Nav.Link className="pr-4" href="/login">Admin Login</Nav.Link>
    
    </Fragment>
    )

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">CARCHECKERS</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto   mr-5 headfont">  
           
                
                {isAuthenticated ?  authLinks : guestLinks}          
               
                       
          
            </Nav>
   
             </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarAppComponent
