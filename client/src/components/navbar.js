import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle"
import { NavLink } from "react-router-dom";


export default function Navbar() {
    return (
        <div>
            <nav className=" navbar navbar-expand-lg navbar-light bg-light p-2">
                <NavLink className="navbar-brand" to="/">
                    <img style={{ "width": "55%" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8fM0A5X5hPHJnlvcJ0nYUK5HaDu0phP2hlQ&s" alt="Logo"></img>
                </NavLink>
                  <p>Континуирана интеграција и испорака</p>
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
                                Create Record
                            </NavLink>
                        </button>
                    </ul>
                </div>
            </nav>
        </div>
    );
}