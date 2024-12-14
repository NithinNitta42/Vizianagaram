import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggles the menu state
    };

    return (
        <div className="nav">
            <div className="nav-logo">Mana Vizianagaram</div>
            <div 
                className={`hamburger-menu ${menuOpen ? 'open' : ''}`} 
                onClick={toggleMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={`nav-menu ${menuOpen ? 'show' : ''}`}>
                <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to="/explore" onClick={() => setMenuOpen(false)}>Explore</Link>
                <Link to="/administration" onClick={() => setMenuOpen(false)}>Administration</Link>
                <Link to="/persons" onClick={() => setMenuOpen(false)}>Notable Persons</Link>
                <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </div>
        </div>
    );
};

export default Navbar;
