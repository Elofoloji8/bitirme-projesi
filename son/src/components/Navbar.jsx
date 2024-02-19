import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Bizim Meram</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link" to="/">
              Ana sayfa
            </NavLink>
            <NavLink className="nav-link" to="/pages">
              Çalışmalarımız
            </NavLink>
            <NavLink className="nav-link" to="/sehrimiz">
              Şehrimiz
            </NavLink>
            <NavLink className="nav-link" to="/hakkimizda">
              Hakkımızda
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
