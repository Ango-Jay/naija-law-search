import React, { useEffect } from "react";
// import M from "materialize-css/dist/js/materialize.min.js";
import M from "materialize-css"
import { Link} from "react-router-dom";

interface Props{
  activeLink:string;
}
const NavBar: React.FC<Props> = (props) => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <div>
      <nav>
        <div className="nav-wrapper ">
          <a href="#!" className="brand-logo">
            NLS{" "}
            <i
              style={{
                color: "#331d5a",
                height: ".3rem",
                margin: "0 0 0 -.1rem"
              }}
              className="tiny material-icons right"
            >
              brightness_1
            </i>
          </a>
          <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down mr-4">
            <li>
              <Link
                to="/"
                className="navBar-link"
                data-active={
                  props.activeLink !== "home" ? "" : props.activeLink
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/sections"
                className="navBar-link"
                data-active={
                  props.activeLink === "home" ? "" : props.activeLink
                }
              >
                CyberCrime Act
              </Link>
            </li>
            {/* <li>
              <a href="collapsible.html" className="navBar-link">
                About
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-demo">
        <li>
          {" "}
          <a
            href="#!"
            className="center-align"
            style={{ display: "flex", justifyContent: "center" }}
          >
            NLS{" "}
            <i
              style={{
                color: "#331d5a",
                height: ".3rem",
                margin: "0 0 0 -.1rem"
              }}
              className="tiny material-icons right"
            >
              brightness_1
            </i>
          </a>
        </li>
        <li>
          <Link
            to="/"
            data-active={props.activeLink !== "home" ? "" : props.activeLink}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/sections"
            data-active={props.activeLink === "home" ? "" : props.activeLink}
          >
            CyberCrime Act
          </Link>
        </li>
        {/* <li>
          <a href="#">Search</a>
        </li> */}
      </ul>
    </div>
  );
};

export default NavBar;
