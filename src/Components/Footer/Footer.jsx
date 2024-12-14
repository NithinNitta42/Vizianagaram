import {
  ExternalLink,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube
} from 'lucide-react';
import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-sections">
          {/* About Section */}
          <div className="footer-section">
            <h3 className="footer-title">Vizianagaram</h3>
            <p className="footer-description">
            Where history meets heritage and tradition weaves its charm.
            </p>
            <div className="social-icons">
              <a href="#" className="social-link">
                <Facebook className="icon" />
              </a>
              <a href="#" className="social-link">
                <Twitter className="icon" />
              </a>
              <a href="#" className="social-link">
                <Instagram className="icon" />
              </a>
              <a href="#" className="social-link">
                <Youtube className="icon" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#" className="footer-link"><ExternalLink className="icon" /> Explore</a></li>
              <li><a href="#" className="footer-link"><ExternalLink className="icon" /> Notable persons</a></li>
              <li><a href="#" className="footer-link"><ExternalLink className="icon" /> Administrative Setup</a></li>
              <li><a href="#" className="footer-link"><ExternalLink className="icon" /> About</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer-section">
            <h3 className="footer-title">HelpLines</h3>
            <ul className="contact-info">
              <li className="contact-item"><MapPin className="icon" /> 4C85+2QW, Kaspa West, Vizianagaram, Andhra Pradesh 535001</li>
              <li className="contact-item"><Phone className="icon" /> 108 / 104 / 100</li>
              <li className="contact-item"><Mail className="icon" /> Vizianagaram.ap.gov.in</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="copyright">
            © {currentYear} Jntu-GV,Vizianagaram. All rights reserved.
          </div>
          <div className="policy-links">
            <a href="#" className="policy-link">Privacy Policy</a>
            <a href="#" className="policy-link">Terms of Service</a>
            <a href="#" className="policy-link">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
