import "./Navbar.css";
import { useState,  useEffect, useRef } from "react";
import logo from "../images/logo-cuba.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showMenu]);

  return (
    <nav ref={menuRef}>
      <div className="navigation">
        <div className="nav-header">           
            <NavLink to="/">
            <img className="logo" src={logo} alt="Logo" />
          </NavLink>                     
          <button onClick={(e) => { 
            e.stopPropagation(); // Zastaví šíření eventu, aby se menu nezavřelo hned po otevření
            setShowMenu(!showMenu);
          }}>
            <GiHamburgerMenu  className="hamburger-icon" />
          </button>
        </div>

        <div className={`${showMenu ? "nav-list show" : "nav-list hide"}`}>
          <ul>
            <li>
              <NavLink to="/" onClick={() => setShowMenu(false)}>
                DOMŮ
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" onClick={() => setShowMenu(false)}>
                GALERIE
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" onClick={() => setShowMenu(false)}>
               SLUŽBY
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setShowMenu(false)}>
               KONTAKT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
