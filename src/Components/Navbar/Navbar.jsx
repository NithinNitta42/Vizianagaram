import { useState } from 'react';
import { FaBuilding, FaCompass, FaEnvelope, FaHome, FaUsers } from 'react-icons/fa'; // Import specific icons
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
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={`nav-menu ${menuOpen ? 'show' : ''}`}>
                <Link to="/" onClick={() => setMenuOpen(false)} aria-label="Go to Home">
                    <FaHome /> Home
                </Link>
                <Link to="/explore" onClick={() => setMenuOpen(false)} aria-label="Explore">
                    <FaCompass /> Explore
                </Link>
                <Link to="/administration" onClick={() => setMenuOpen(false)} aria-label="Administration">
                    <FaBuilding /> Administration
                </Link>
                <Link to="/persons" onClick={() => setMenuOpen(false)} aria-label="Notable Persons">
                    <FaUsers /> Notable Persons
                </Link>
                <Link to="/contact" onClick={() => setMenuOpen(false)} aria-label="Contact">
                    <FaEnvelope /> Contact
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
