import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import Nguvulogo from "../../assets/homepage/mainheader/nguvulogo.svg";
import { Link } from "react-router-dom";

const navbar = ({ active }) => {
  return (
    <div>
      <div class="shadow-lg p-3 mb-5 bg-white rounded">
        <div class="card" id="navbar" style={{ border: "none" }}>
          <div class="card-body" style={{ borderRadius: "20%" }}>
            <div class="navbar navbar-expand-lg navbar-light">
              {/* <a
                style={{
                  fontSize: "3rem",
                  color: "#1173D3",
                  fontWeight: "bold",
                }}
                className="navbar-brand"
                href="#"
              >
                nguvu
              </a> */}
              <Link to="/">
                <img
                  alt="logo"
                  src={Nguvulogo}
                  className="img-fluid"
                  style={{ maxWidth: "70%" }}
                />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                style={{ marginleft: "20px" }}
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul
                  className="navbar-nav"
                  style={{ fontSize: "20px", fontWeight: "bold",marginLeft: "150px",textAlign:"right"}}
                >
                  {/* <li className="nav-item ms-5" >
                    <a className="nav-link active" href="#" style={{fontSize:"40px", color:"blue",fontWeight:"bolder"}}>
                      Logo 
                    </a>
                  </li> */}
                  {/* <li className="nav-item ms-5">
                    <a
                      className="nav-link active"
                      href="#"
                      style={{
                        fontSize: "25px",
                        fontWeight: "bold",
                        marginLeft: "50px",
                      }}
                    >
                      Dashboard
                    </a>
                  </li> */}
                  <li className="nav-item" style={{  }}>
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/dashboard"
                      style={active}
                    >
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item ms-5" >
                    <a
                      className="nav-link active"
                      href="#"
                      // style={{ fontSize: "25px", fontWeight: "bold" }}
                    >
                      Order
                    </a>
                  </li>
                  <li className="nav-item ms-5" >
                    <a
                      className="nav-link active"
                      href="#"
                      // style={{ fontSize: "25px", fontWeight: "bold" }}
                    >
                      Transaction History
                    </a>
                  </li>
                  <div className="d-flex profile-navbar-lastsection-flex-change">
                    <li className="nav-item">
                      <a className="nav-link active" href="#">
                        <FontAwesomeIcon
                          icon={faCog}
                          size="lg"
                          style={{ color: "black", marginLeft: "30px" }}
                        />
                      </a>
                    </li>
                    <li className="nav-item ms-2">
                      <a className="nav-link active" href="#">
                        <FontAwesomeIcon
                          icon={faBell}
                          size="lg"
                          style={{ color: "black" }}
                        />
                      </a>
                    </li>
                  </div>
                </ul>
                <div style={{ marginLeft: "50px" }}>
                  <img
                    src="https://lumiere-a.akamaihd.net/v1/images/character_princess_rapunzel_8320d57a.jpeg?region=0%2C0%2C563%2C300"
                    alt="Avatar"
                    style={{
                      width: "50px",
                      height: "51px",
                      borderRadius: "58%",
                    }}
                  />
                  <label style={{ fontSize: "20px", marginLeft: "10px" }}>
                    Hello,
                  </label>
                  <a
                    href="#"
                    style={{
                      marginLeft: "8px",
                      fontSize: "15px",
                      textDecoration: "none",
                    }}
                  >
                    RAPUNZEL
                  </a>
                </div>
                {/* <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{textDecoration:"none",color:"black", fontWeight:"bold", fontSize:"20px"}}
              >
                Profile
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Edit Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Order History
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
