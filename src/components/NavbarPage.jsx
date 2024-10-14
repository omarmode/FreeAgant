import React from "react";
import { Button } from "react-bootstrap";

const NavbarPage = ({ title, showButton }) => {
  return (
    <div
      className="page-navbar"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 0",
      }}
    >
      <h4>{title}</h4>
      {showButton && <Button variant="success">Add new</Button>}
    </div>
  );
};

export default NavbarPage;
