import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className="nav-item nav-link"
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className="nav-item nav-link"
                        to="/dc"
                    >
                        DC
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className='nav-item nav-link text-info'>Edier</span>

                    <button
                        className="btn nav-item nav-link"
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;
