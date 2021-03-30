import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Navbar = ({icon, title}) => {
    return (
        <nav className="navbar bg-dark">
            <h1>
                <i className={icon}></i> {title} 
            </h1>

            <div>
                <Link className="btn btn-dark" to="/">Home</Link>
                <Link className="btn btn-dark" to="/about">About</Link>
            </div>
            
        </nav>
    );
}

Navbar.defaultProps = {
    icon : 'fab fa-github',
    title : 'Github Finder'
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    icon : PropTypes.string.isRequired
}

export default Navbar