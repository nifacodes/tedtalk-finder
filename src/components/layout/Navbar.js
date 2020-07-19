import React from 'react';
import { Navbar as BSNavbar, Nav, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
//internal
import Search from './../tedtalks/Search';

const Navbar = ({ title, icon }) => {

    return (
        <BSNavbar collapseOnSelect expand="lg" className="bg-custom" variant="dark">
            <Link to="/">
                <BSNavbar.Brand className="brand">
                    <i className={icon} /> {title}
                </BSNavbar.Brand>
            </Link>
            <BSNavbar.Toggle aria-controls="responsive-navbar-nav" />

            <BSNavbar.Collapse id="responsive-navbar-nav">
                <Search />
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

Navbar.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string,
}

export default Navbar;