import React, {useState} from "react";
import {Menu, X, Home, User, Settings, Mail, LogIn} from 'lucide-react'
import "../CSS/commonCSS/Header.css"

const Navbar = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuItems = [
        { name : "Login", href : "#Form", icon : LogIn},
        { name : "Accueil", href : "#home", icon : Home},
        { name : "Settings", href : "#settings", icon : Settings},
        { name : " A propos", href : "#about", icon : User},
        { name : "Contact", href : "#contact", icon : Mail}
    ];

    return (
        <nav className="NavBar">
                <div className="element1">
                    <div className="element2">
                        <div className="logo">
                                <h1>TaskQuest</h1>
                        </div>

                       

          {/* Bouton menu mobile */}
          <div className="elementsToggle">
            <button
              onClick={toggleMenu}
              className="MenuBurger"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="elementsToggle">
          <div>
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="elementsToggleOpen"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <IconComponent className="w-5 h-5 mr-3" />
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
                   



