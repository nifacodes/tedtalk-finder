import React from 'react';
import { Navbar as BSNavbar, Nav, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Search from './../tedtalks/Search';

const Navbar = ({ title, icon, searchTalk, clearResults, setAlert }) => {

    return (
        <BSNavbar collapseOnSelect expand="lg" className="bg-custom" variant="dark">
            <BSNavbar.Brand href="/" className="brand">
                <i className={icon} /> {title}
            </BSNavbar.Brand>
            <BSNavbar.Toggle aria-controls="responsive-navbar-nav" />

            <BSNavbar.Collapse id="responsive-navbar-nav">
                <Search searchTalk={searchTalk} clearResults={clearResults} setAlert={setAlert} />
                <Nav className="ml-auto">
                    <Nav className="m-2 ">
                        <Link to='/'>Home</Link>
                    </Nav>
                    <Nav className="m-2">
                        <Link to='/about'>About</Link>
                    </Nav>
                </Nav>
            </BSNavbar.Collapse>
        </BSNavbar>
    )

};

Navbar.defaultProps = {
    title: 'TED Talks',
    icon: 'fab fa-youtube'
}


export default Navbar;