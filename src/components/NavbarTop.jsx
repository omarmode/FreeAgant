import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faSearch } from "@fortawesome/free-solid-svg-icons";

const NavbarTop = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{ height: "50px" }}>
      <Container>
        <Navbar.Collapse className="justify-content-end">
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ color: "#fff", marginRight: "20px" }}>
              You have 30 free days
            </span>
            <Button variant="outline-light" className="me-2">
              Get started
            </Button>
            <Button style={{ background: "white" }} className="me-3">
              <span style={{ color: "rgb(0, 105, 191)" }}>Subscribe today</span>
            </Button>
            {/* <FontAwesomeIcon
              icon={faSearch}
              style={{ color: "white", marginRight: "15px", cursor: "pointer" }}
            />
            <FontAwesomeIcon
              icon={faBell}
              style={{ color: "white", marginRight: "15px", cursor: "pointer" }}
            />
            <span style={{ color: "#fff", cursor: "pointer" }}>null</span> */}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarTop;
