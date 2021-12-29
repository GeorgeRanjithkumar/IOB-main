import React from "react";
// import { faFaSearch } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/navbar-components/navbar"
import "./OrdersStatic.css";
const OrdersStatic = () => {
  return (
    <div>
        <Navbar/>
      <div class="card">
        <div class="card-body">
          <div
            className="maincontainer"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "Left",
            }}
          >
            <div className="col-2">
              <div class="shadow p-3 mb-5 bg-white rounded">
                <div class="form-group has-search">
                  <span class="fa fa-search form-control-feedback"></span>
                  <input
                    style={{ width: 200 }}
                    type="text"
                    class="form-control"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
            <div className="col-2">
              <div class="shadow p-3 mb-5 bg-white rounded">
                <div>
                  <form action="/action_page.php" />
                  <input
                    style={{ width: 200, height: 40, borderColor: "grey" }}
                    type="date"
                    id="date"
                    placeHolder="Date in Range"
                    name="Date in Range"
                  />
                </div>
              </div>
            </div>
            <div className="col-2">
              <div class="shadow p-3 mb-5 bg-white rounded">
                <select class="form-control">
                  <option>Status</option>
                  <option>Status1</option>
                  <option>Status2</option>
                  <option>Status3</option>
                </select>
              </div>
            </div>
            <div className="col-2">
              <div class="shadow p-3 mb-5 bg-white rounded">
                <select class="form-control">
                  <option>Filters</option>
                  <option>Filters1</option>
                  <option>Filters2</option>
                  <option>Filters3</option>
                  <option>Filters4</option>
                </select>
              </div>
            </div>
          </div>
          <div
            className="col-5"
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <h5>AllOrders</h5>
            <h5>Confirm</h5>
            <h5>Partial</h5>
            <h5>Pending</h5>
            <h5>Expired</h5>
          </div>
          <hr />
          <div className='d-flex' style={{justifyContent:'space-between'}}>
          <div>
            <h6>Show 11-20 of 100 Results</h6>
          </div>
          <div>
            Results Per Page
            <select>
              <option value="" disabled="disabled" selected="selected">
                10
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          </div>

          <div className="card">
            <div className=" card-body">
              <div
                class="table-responsive-lg"
                style={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <div>
                  <select
                    style={{ border: "none", color: "#4996E1" }}
                    className="custom-select custom-select-lg mb-3"
                  >
                    <option selected>Id</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div>
                  <select
                    style={{ border: "none", color: "#4996E1" }}
                    className="custom-select custom-select-lg mb-3"
                  >
                    <option selected>Name</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div>
                  <select
                    style={{ border: "none", color: "#4996E1" }}
                    className="custom-select custom-select-lg mb-3"
                  >
                    <option selected>Product</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div>
                  <select
                    style={{ border: "none", color: "#4996E1" }}
                    className="custom-select custom-select-lg mb-3"
                  >
                    <option selected>Payment</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div>
                  <select
                    style={{ border: "none", color: "#4996E1" }}
                    className="custom-select custom-select-lg mb-3"
                  >
                    <option selected>Start Time</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div>
                  <select
                    style={{ border: "none", color: "#4996E1" }}
                    className="custom-select custom-select-lg mb-3"
                  >
                    <option selected>End Time</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div>
                  <select
                    style={{ border: "none", color: "#4996E1" }}
                    className="custom-select custom-select-lg mb-3"
                  >
                    <option selected>Status</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div>
                  <select
                    style={{ border: "none", color: "#4996E1" }}
                    className="custom-select custom-select-lg mb-3"
                  >
                    <option selected>Delivery Status</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div>
                  <select
                    style={{ border: "none",marginLeft:'10px', color: "#4996E1" }}
                    className="custom-select custom-select-lg mb-3"
                  >
                    <option selected>Price</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div>
                  <select
                    style={{ border: "none", color: "#4996E1" }}
                    className="custom-select custom-select-lg mb-3"
                  >
                    <option selected>Action</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <br>
          </br>
          <div className="card px-5 ">
            <div className=" card-body">
              <div class="table-responsive-lg">
                <table class="table">
                  <tr>
                    <td>#1234</td>
                    <td>John Doe</td>
                    <td>Etherium</td>
                    <td>Cash</td>
                    <td className="table1">
                      02-11-2021
                      <td>13:25</td>
                    </td>
                    <td>
                      03-11-2021
                      <td>13:24</td> 
                    </td>
                    <td className="color1">Delivered</td>
                    <td className="color11">Delivered</td>
                    <td >$500</td>
                    <td>
                      <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <FontAwesomeIcon
                          icon={faEllipsisV}
                          style={{ color: "black", fontSize: "30px" }}
                        />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>#1234</td>
                    <td>John Doe</td>
                    <td>Etherium</td>
                    <td>Cash</td>
                    <td className="table1">
                      02-11-2021
                      <td>13:25</td>
                    </td>
                    <td>
                      03-11-2021
                      <td>13:24</td>
                    </td>
                    <td className="color2">Cancelled</td>
                    <td className="color22">Cancelled</td>
                    <td>$500</td>
                    <td>
                      <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <FontAwesomeIcon
                          icon={faEllipsisV}
                          style={{ color: "black", fontSize: "30px" }}
                        />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>#1234</td>
                    <td>John Doe</td>
                    <td>Etherium</td>
                    <td>Cash</td>
                    <td className="table1">
                      02-11-2021
                      <td>13:25</td>
                    </td>
                    <td>
                      03-11-2021
                      <td>13:24</td>
                    </td>
                    <td className="color3">Booked</td>
                    <td className="color33">Booked</td>
                    <td>$500</td>
                    <td>
                      <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <FontAwesomeIcon
                          icon={faEllipsisV}
                          style={{ color: "black", fontSize: "30px" }}
                        />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>#1234</td>
                    <td>John Doe</td>
                    <td>Etherium</td>
                    <td>Cash</td>
                    <td className="table1">
                      02-11-2021
                      <td>13:25</td>
                    </td>
                    <td>
                      03-11-2021
                      <td>13:24</td>
                    </td>
                    <td className="color2">Cancelled</td>
                    <td className="color22">Cancelled</td>
                    <td>$500</td>
                    <td>
                      <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <FontAwesomeIcon
                          icon={faEllipsisV}
                          style={{ color: "black", fontSize: "30px" }}
                        />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>#1234</td>
                    <td>John Doe</td>
                    <td>Etherium</td>
                    <td>Cash</td>
                    <td className="table1">
                      02-11-2021
                      <td>13:25</td>
                    </td>
                    <td>
                      03-11-2021
                      <td>13:24</td>
                    </td>
                    <td className="color1">Delivered</td>
                    <td className="color11">Delivered</td>
                    <td>$500</td>
                    <td>
                      <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <FontAwesomeIcon
                          icon={faEllipsisV}
                          style={{ color: "black", fontSize: "30px" }}
                        />
                      </button>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersStatic;
