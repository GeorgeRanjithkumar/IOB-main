import React from "react";
// import { faFaSearch } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/navbar-components/navbar"
import "./OrdersStatic.css";
const OrdersStatic = () => {

  // const data2 = {
  //   columns: ['Name', 'Position', 'Office', 'Age', 'Start date', 'Salary'],
  //   rows: [
  //   ['Tiger Nixon', 'System Architect', '	Edinburgh', 61, '2011/04/25', '$320,800'],
  //   ['Sonya Frost', 'Software Engineer', 'Edinburgh', 23, '2008/12/13', '$103,600'],
  //   ['Jena Gaines', 'Office Manager', 'London', 30, '2008/12/19', '$90,560'],
  //   ['Quinn Flynn', 'Support Lead', 'Edinburgh', 22, '2013/03/03', '$342,000'],
  //   ['Charde Marshall', 'Regional Director', 'San Francisco', 36, '2008/10/16', '$470,600'],
  //   ['Haley Kennedy', 'Senior Marketing Designer', 'London', 43, '2012/12/18', '$313,500'],
  //   ['Tatyana Fitzpatrick', 'Regional Director', 'London', 19, '2010/03/17', '$385,750'],
  //   ['Michael Silva', 'Marketing Designer', 'London', 66, '2012/11/27', '$198,500'],
  //   ['Paul Byrd', 'Chief Financial Officer (CFO)', 'New York', 64, '2010/06/09', '$725,000'],
  //   ['Gloria Little', 'Systems Administrator', 'New York', 59, '2009/04/10', '$237,500'],
  //   ],
  // };
  
  // const instance = new mdb.Datatable(document.getElementById('datatable'), data2)
  
  // document.getElementById('datatable-search-input').addEventListener('input', (e) => {
  //   instance.input-group(e.target.value);
  // });



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


            <div class="form-outline mb-4">
              <input type="search" class="form-control" id="datatable-search-input"/>
              <label class="form-label" for="datatable-search-input">Search</label>
            </div>
            <div id="datatable">
            </div>


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
