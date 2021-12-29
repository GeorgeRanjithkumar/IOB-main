import React from "react";
import axios from "axios";

import Header from "../components/homepage-components/Header";
import "./UserData.css";

const rows = [];

const UserData = () => {
  const [rows, setRows] = React.useState([]);

  const fetchUserData = () => {
    axios
      .get(`http://13.235.67.128:3001/users/getAllUsers`)
      .then((res) => setRows(res.data))
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    fetchUserData();
  });

  return (
    <div class="user-data-page">
      <Header />
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">User ID</th>
            <th scope="col">Full Name</th>
            <th scope="col">Date of Birth</th>
            <th scope="col">Contact Number</th>
            <th scope="col">Address</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            <th scope="col">Front IC</th>
            <th scope="col">Back IC</th>
            <th scope="col">Selfy</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            return (
              <tr>
                <th scope="row">{row.id}</th>
                <td>
                  {row.firstName} {row.lastName}
                </td>
                <td>{row.dob}</td>
                <td>{row.contactNumber}</td>
                <td>{row.address}</td>
                <td>{row.city}</td>
                <td>
                  <img src={row.frontIc} style={{ width: 150 }} alt="" />
                </td>
                <td>
                  <img src={row.backIc} style={{ width: 150 }} alt="" />
                </td>
                <td>
                  <img src={row.selfieIc} style={{ width: 150 }} alt="" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserData;
