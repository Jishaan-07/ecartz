import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const SideNavbar = () => {
  return (
    <Navbar
      expand="md"
      className="bg-body-tertiary mb-5 shadow-sm border-bottom p-3"
    >
      <Container>
        {/* Brand / Logo */}
        <Navbar.Brand className="fw-bold  fs-3 text-primary">
        <i class="fa-solid fa-user-tie"></i> Admin
        </Navbar.Brand>

        {/* Mobile Toggle Button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible Navigation Menu */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            <NavLink
              to="/admin/purchased-list"
              className={({ isActive }) =>
                `mx-2 px-3 py-2 fw-semibold text-decoration-none rounded ${
                  isActive ? "bg-primary text-white" : "text-dark"
                }`
              }
            >
              <i class="fa-solid fa-boxes-stacked"></i>Orders
            </NavLink>

            <NavLink
              to="/admin/home"
              className={({ isActive }) =>
                `mx-2 px-3 py-2 fw-semibold text-decoration-none rounded ${
                  isActive ? "bg-primary text-white" : "text-dark"
                }`
              }
            >
             <i class="fa-solid fa-plus"></i>Add Products
            </NavLink>

          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SideNavbar;
