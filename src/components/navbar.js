import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
    return (
        <nav className="nav">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/characters">Characters</Link>
            <Link className="nav-link" to="/comics">Comics</Link>
        </nav>
    )
}

export default Navbar;