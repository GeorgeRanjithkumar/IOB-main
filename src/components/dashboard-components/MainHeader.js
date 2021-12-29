import React from "react";

const MainHeader = ({ active }) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{
        background: "transparent !important",
        height: "7em",
        boxShadow: "0px 1px 65px #000D710F",
        borderRadius: "0 0 30px 30px",
      }}
    >
      <div className="container-fluid" style={{ padding: "0 4em" }}>
        <a
          style={{ fontSize: "3rem", color: "#1173D3", fontWeight: "bold" }}
          className="navbar-brand"
          href="#"
        >
          nguvu
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarNavDropdown"
          style={{ justifyContent: "flex-end" }}
        >
          <ul className="navbar-nav" style={{ fontSize: "2rem", gap: "3rem" }}>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/dashboard"
                style={active}
              >
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/order">
                Order
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Transaction History
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
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
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainHeader;
