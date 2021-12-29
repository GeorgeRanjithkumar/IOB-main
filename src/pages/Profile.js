import React from "react";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Profile.css";
import Header from "../components/homepage-components/Header";
import MainHeader from "../components/dashboard-components/MainHeader";
import Navbar from "../components/navbar-components/navbar";

const profile = () => {
  return (
    <div>
      {/* <MainHeader /> */}
      <Navbar/>
      <div class="shadow-lg p-3 mb-5 bg-white rounded">
            <h4>Edit Profile</h4>
        <div className="card" style={{padding:'10%'}}>
          <div className="card-body">
            <div className="py-5 px-5" id="maincontainer">
              <div className="col-4 picContainer" style={{ textAlign: "center" }}>
                <img
                  src="https://m.economictimes.com/thumb/msid-67467301,resizemode-4,imgsize-575034/hrithik-roshan.jpg"
                  // class="img-thumbnail"
                  class="img-responsive"
                  alt="Avatar"
                ></img>
                <br />
                <br />
                <div
                  class="input-group mb-3"
                  id="choosefile"
                  
                >
                  <input
                    type="file"
                    placeholder="Upload"
                    class="form-control"
                    // id="inputGroupFile01"
                  />
                </div>
              </div>
              <div className="col-8 profileContainer">
                <div className="col-3">
                  <div className="placewidth" style={{ width: 250 }}>
                    <h5>Full Name</h5>
                    <input
                    style={{backgroundColor:"#f6f6f7"}}
                      class="form-control"
                      type="text"
                      placeholder="John"
                      aria-label="default input example"
                    />
                  </div>
                  <br></br>
                  <div className="placewidth" style={{ width: 250 }}>
                    <h5>Email</h5>
                    <input
                    style={{backgroundColor:"#f6f6f7"}}
                      class="form-control"
                      type="text"
                      placeholder="John@gmail.comm"
                      aria-label="default input example"
                    />
                  </div>
                  <br />
                  <div  className="placewidth" style={{ width: 250}} >
                    <h5 for="inputPassword5" class="form-label">
                      Password
                    </h5>
                    <input
                    style={{backgroundColor:"#f6f6f7"}}
                      className="placecolor"
                      type="password"
                      id="inputPassword5"
                      class="form-control"
                      aria-describedby="passwordHelpBlock"
                      
                    />
                    {/* <FontAwesomeIcon icon={faEyeSlash}/> */}
                  </div>
                  <br />
                  <div className="placewidth" style={{ width: 250 }}>
                    <h5>Address</h5>
                    <input 
                    style={{backgroundColor:"#f6f6f7"}}
                      class="form-control"
                      type="text"
                      placeholder="Address"
                      aria-label="default input example"
                    />
                  </div>
                  <br />
                  <div className="placewidth" style={{ width: 250 }} >
                  <h5 for="exampleDataList" class="form-label">
                    Country
                  </h5>
                  <input 
                  style={{backgroundColor:"#f6f6f7"}}
                    class="form-control"
                    list="datalistOptions"
                    id="exampleDataList"
                    placeholder="Choose Country"
                  />
                  <datalist id="datalistOptions">
                    <option value="San Francisco" />
                    <option value="New York" />
                    <option value="Seattle" />
                    <option value="Los Angeles" />
                    <option value="Chicago" />
                  </datalist>
                  </div>
                  <br />
                  <div className="placewidth" style={{ width: 250 }}>
                  <h5 for="exampleDataList" class="form-label">
                    City
                  </h5>
                  <input
                  style={{backgroundColor:"#f6f6f7"}}
                    class="form-control"
                    list="datalistOptions"
                    id="exampleDataList"
                    placeholder="Choose City"
                  />
                  <datalist id="datalistOptions">
                    <option value="San Francisco" />
                    <option value="New York" />
                    <option value="Seattle" />
                    <option value="Los Angeles" />
                    <option value="Chicago" />
                  </datalist>
                  </div>
                </div>
                <div className="col-3">
                  <div className="placewidth" style={{ width: 250 }}>
                    <h5>Last Name</h5>
                    <input
                    style={{backgroundColor:"#f6f6f7"}}
                      className="form-control"
                      type="text"
                      placeholder="Doe"
                      aria-label="default input example"
                    />
                  </div>
                  <br></br>
                  <div className="placewidth" style={{ width: 250 }}>
                    <h5>Phone</h5>
                    <input
                    style={{backgroundColor:"#f6f6f7"}}
                      className="form-control"
                      type="text"
                      placeholder="12345678"
                      aria-label="default input example"
                    />
                  </div>
                  <br />
                  <div >
                    <h5>Date Of Birth</h5>
                    {/* <form action="/action_page.php"/> */}
                    <input className="placewidth"
                      style={{ width: 250, height: "37px" ,backgroundColor:"#f6f6f7", border:"none"}}
                      type="date"
                      id="birthday"
                      name="birthday"
                    />
                  </div>
                  <br />
                  <div className="placewidth" style={{ width: 250 }}>
                    <h5>Permanent Address</h5>
                    <input
                    style={{backgroundColor:"#f6f6f7"}}
                      className="form-control"
                      type="text"
                      placeholder="Address"
                      aria-label="default input example"
                    />
                  </div>
                  <br />
                  <div className="placewidth" style={{ width: 250 }}>
                  <h5 for="exampleDataList" class="form-label">
                    State
                  </h5>
                  <input  
                  style={{backgroundColor:"#f6f6f7"}}
                    className="form-control"
                    list="datalistOptions"
                    id="exampleDataList"
                    placeholder="Choose State"
                  />
                  <datalist id="datalistOptions">
                    <option value="San Francisco" />
                    <option value="New York" />
                    <option value="Seattle" />
                    <option value="Los Angeles" />
                    <option value="Chicago" />
                  </datalist>
                  <br />
                  </div>
                  <div className="placewidth" style={{ width: 250 }}>
                    <h5>Postal Code</h5>
                    <input
                    style={{backgroundColor:"#f6f6f7"}}
                      class="form-control"
                      type="text"
                      placeholder="123 123"
                      aria-label="default input example"
                    />
                  </div>
                </div>
              </div>
              
                
              
            </div>
            <button
                  style={{
                    width: '23%',
                    borderRadius: 15,
                    marginLeft:'60%'
                   
                    
                  }}
                  id="button"
                  type="button"
                  class="btn btn-primary"
                >
                  Submit
                </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default profile;
