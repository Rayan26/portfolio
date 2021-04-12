import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigations = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" exact className="hover" activeClassName="nav-active">
                    <li>Acceuil</li>
                </NavLink>

                <li className="nav-portfolio"> Portfolio
                <ul className="nav-projects">
                        <NavLink to="/project-1" activeClassName="nav-active" className="hover">
                            <li>Forum Angular</li>
                        </NavLink>
                        <NavLink to="/project-2" activeClassName="nav-active" className="hover">
                            <li>Logiciel Huffman</li>
                        </NavLink>
                        <NavLink to="/project-3" activeClassName="nav-active" className="hover">
                            <li>LinkedIn</li>
                        </NavLink>
                        <NavLink to="/project-4" activeClassName="nav-active" className="hover">
                            <li>MyNetwork</li>
                        </NavLink>
                    </ul>

                </li>
                <NavLink to="/contact" exact className="hover" activeClassName="nav-active">
                    <li>Contact</li>
                </NavLink>


            </ul>
        </div>
    );
};

export default Navigations;