import React, { useReducer, useRef, useState } from "react";
import "../Navbar/Navbar.css";
import logo from "../../assets/Vipin_logo.png";
// import logo from "../../assets/Vipin.png";
import underline from "../../assets/underline.png";
import menu_icon from "../../assets/menu_open.png";
import close_img from "../../assets/close_menu.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("about");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-340px";
  };

  return (
    <div className="navbar">
      <img src={logo} style={{ height: "70px", width: "60px" }} />
      <img
        src={menu_icon}
        onClick={openMenu}
        style={{
          height: "30px",
          width: "25px",
        }}
        className="nav-mob-open"
      />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={close_img}
          onClick={closeMenu}
          style={{
            height: "30px",
            width: "25px",
          }}
          className="nav-mob-close"
        />
        <li>
          <Link to={"/about"}>
            <p onClick={() => setMenu("about")}>About Me</p>
          </Link>
          {menu === "about" ? (
            <img
              src={underline}
              style={{
                height: "30px",
                width: "90px",
              }}
            />
          ) : (
            <></>
          )}
        </li>
        <li>
          <Link to={"/projects"}>
            <p onClick={() => setMenu("project")}>Projects</p>
          </Link>
          {menu === "project" ? (
            <img
              src={underline}
              style={{
                height: "30px",
                width: "90px",
              }}
            />
          ) : (
            <></>
          )}
        </li>
        <li>
          <Link to={"/certification"}>
            <p onClick={() => setMenu("certification")}>Certification</p>
          </Link>
          {menu === "certification" ? (
            <img
              src={underline}
              style={{
                height: "30px",
                width: "90px",
              }}
            />
          ) : (
            <></>
          )}
        </li>
        <li>
          <Link to={"/contact"}>
            <p onClick={() => setMenu("contact")}>Contact</p>
          </Link>
          {menu === "contact" ? (
            <img
              src={underline}
              style={{
                height: "30px",
                width: "90px",
              }}
            />
          ) : (
            <></>
          )}
        </li>
      </ul>

      <a href="https://github.com/Vipin8975" className="nav-connect">
        <>My Github</>
      </a>
    </div>
  );
};

export default Navbar;
