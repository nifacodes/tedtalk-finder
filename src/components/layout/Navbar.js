import React from 'react';
import { Navbar as BSNavbar, Nav, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
//internal
import Search from './../tedtalks/Search';

const Navbar = ({ title, icon, setAlert }) => {

    return (
        <BSNavbar collapseOnSelect expand="lg" className="bg-custom" variant="dark">
            <BSNavbar.Brand href="/" className="brand">
                <i className={icon} /> {title}
            </BSNavbar.Brand>
            <BSNavbar.Toggle aria-controls="responsive-navbar-nav" />

            <BSNavbar.Collapse id="responsive-navbar-nav">
                <Search setAlert={setAlert} />
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
    setAlert: PropTypes.func
}

export default Navbar;