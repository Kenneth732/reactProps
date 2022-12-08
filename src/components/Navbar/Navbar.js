import React from "react";
import Logo from './logo.2810a88b.svg';
import './Navbar.css';
function Navbar() {
    return (
        <nav className="navbar">
            <img src={Logo} />
            <ul className="nav-links">
                <input type="checkbox" id="checkbox_toggle" />
                <label for="checkbox_toggle" className="hamburger">&#9776;</label>
                <div className="menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li className="services">
                        <a href="/">Services</a>
                        <ul className="dropdown">

                            <li><a href="/">Dropdown 1 </a></li>

                            <li><a href="/">Dropdown 2</a></li>

                            <li><a href="/">Dropdown 2</a></li>

                            <li><a href="/">Dropdown 3</a></li>

                            <li><a href="/">Dropdown 4</a></li>
                        </ul>
                    </li>
                    <li><a href="/">Pricing</a></li>
                    <button className="btn">LogIn</button>
                </div>
            </ul>
        </nav>
    )
}
export default Navbar;