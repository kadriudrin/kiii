import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle"
import { NavLink } from "react-router-dom";


export default function Navbar() {
    return (
        <div>
            <nav className=" navbar navbar-expand-lg navbar-light bg-light p-2">
                <p>Кии</p>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <button className="btn btn btn-success">
                            <NavLink className="nav-link" to="/create">
                                Create
                            </NavLink>
                        </button>
                    </ul>
                </div>
            </nav>
        </div>
    );
}