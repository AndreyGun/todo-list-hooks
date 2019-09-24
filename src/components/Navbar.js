import React from 'react';
import { NavLink } from 'react-router-dom';


export const Navbar = () => {
    return(
        <nav className="navbar navbar-dark navbar-expand-lg bg-primary justify-content-start">
            <div className="navbar-brand">
                Note App
            </div>
            <ul className="navbar-nav flex-row">
                <li className="nav-item">
                    <NavLink 
                        className="nav-link pr-4"
                        to="/">
                           Main Page
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        to="/about">
                            About
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}