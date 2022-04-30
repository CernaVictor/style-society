import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import SignUpModal from "./SignUpModal";
import { AppContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";

const NavigationBar = () => {
  const { user } = React.useContext(AppContext);

  return (
    <Navbar
      style={{
        backgroundColor: "#F6FAFF",
        height: 65,
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
      }}
      variant="light"
      fixed="top"
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Navbar.Brand
          style={{
            marginLeft: 30,
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <img
              alt="idk"
              height="50px"
              width="70px"
              src="http://cdn.shopify.com/s/files/1/2694/8908/files/logo_3x_copy_c344509a-78fb-465f-a656-8129ba098cc1_1200x1200.png?v=1613172452"
            />
          </Link>
        </Navbar.Brand>
        <Nav style={{ marginTop: 10 }}>
          <Nav.Link>
            <Link
              to="/perfume"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Perfume
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              to="/watches"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Wathces
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              to="/sunglasses"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Sunglasses
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              to="/bracelets"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Bracelets
            </Link>
          </Nav.Link>
          {user?.isAdmin && (
            <Nav.Link>
              <Link
                to="/admin"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Admin
              </Link>
            </Nav.Link>
          )}
        </Nav>
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "flex-end",
          paddingRight: 20,
        }}
      >
        {user && <ShoppingCart />}
        <SignUpModal />
      </div>
    </Navbar>
  );
};

export default NavigationBar;
