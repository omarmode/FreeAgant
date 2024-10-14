import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faSearch } from "@fortawesome/free-solid-svg-icons";
import Estimates from "../pages/Estimates";
import Invoices from "../pages/Invoices";

const NavbarMain = () => {
  return (
    <Navbar
      // bg="primary"
      variant="dark"
      expand="sm"
      style={{
        background: "rgb(0, 105, 191)",
        height: "45px",
        padding: "0 15px",
      }}
    >
      <Container>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Overview
          </Nav.Link>
          <Nav.Link as={Link} to="/contacts">
            Contacts
          </Nav.Link>
          <NavDropdown title="Work" id="work-dropdown">
            <NavDropdown.Item as={Link} to="/work/ Estimates">
              Estimates
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/work/Projects">
              Projects
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/work/Time Tracking">
              Time Tracking
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/work/Invoices">
              Invoices
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/work/Recurring Invoice Profiles">
              Recurring Invoice Profiles
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/bills">
            Bills
          </Nav.Link>
          <Nav.Link as={Link} to="/expenses">
            Expenses
          </Nav.Link>
          <NavDropdown title="Banking" id="banking-dropdown">
            <NavDropdown.Item as={Link} to="/banking/accounts">
              Accounts
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/banking/transactions">
              Transactions
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Accounting" id="accounting-dropdown">
            <NavDropdown.Item as={Link} to="/accounting/reports">
              Reports
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/accounting/taxes">
              Taxes
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <div style={{ display: "flex", alignItems: "center" }}>
          <FontAwesomeIcon
            icon={faSearch}
            style={{ color: "white", marginRight: "15px", cursor: "pointer" }}
          />
          <FontAwesomeIcon
            icon={faBell}
            style={{ color: "white", marginRight: "15px", cursor: "pointer" }}
          />
          <span style={{ color: "#fff", cursor: "pointer" }}>null</span>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarMain;
