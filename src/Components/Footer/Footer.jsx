import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer({ items = ["about", "text"], link = ["/", "/about"] }) {
  return (
    <footer className="footer">
      <div className="footer__copyright">
        &copy;2022-2023 Navicon
      </div>
      <div className="footer__items-group">
        {items.map(item => (
          <div className="footer__item">
            <Link to={link} className="footer__link">{item}</Link>
          </div>
        ))}
      </div>
      <div className="footer__item">
        Построено на 
        <Link href="#" className="footer__link">OpenCRM</Link>
      </div>
    </footer>
  );
}

export default Footer;
