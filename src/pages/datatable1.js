import React, { useState } from "react";
import { MDBDataTableV5 } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import "bootstrap-css-only/css/bootstraplibrocksdb-sys.min.css";
import "mdbreact/dist/css/mdb.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/navbar-components/navbar";
import "./datatable1.css";
import DatePicker from "react-date-picker";

export default function TopSearch() {
  const [status, setStatus] = useState({
    status: "Delivered",
    color: "#F8C562",
    fontSize: "15px",
    fontWeight: "900",
  });
  const [statuscan, setStatuscan] = useState({
    statuscan: "Cancelled",
    color: "#E1716B",
    fontSize: "15px",
    fontWeight: "900",
  });
  const [statusbook, setStatusbook] = useState({
    statusbook: "Booked",
    color: "rgb(49,167,163)",
    fontSize: "15px",
    fontWeight: "900",
  });
  const update = () => {
    setStatus((preState) => {
      // if(status:"Delivered")

      return { ...preState, status: "canceeled" };
    });
  };
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: "Id",
        field: "id",
        width: "98%",
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "id",
        },
      },
      {
        label: "Name",
        field: "name",
        width: "98%",
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Name",
        },
      },
      {
        label: "Product",
        field: "product",
        width: "98%",
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Product",
        },
      },
      {
        label: "Payment",
        field: "payment",
        width: "98%",
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Payment",
        },
      },
      {
        label: "Start Time",
        field: "start_date",
        sort: "disabled",
        width: "98%",
      },
      {
        label: "End Time",
        field: "end_date",
        sort: "disabled",
        width: "98%",
      },
      {
        label: "Status",
        field: "status",
        width: "98%",
      },
      {
        label: "Delivery status",
        field: "deliverystatus",
        width: "98%",
      },
      {
        label: "Price",
        field: "price",
        sort: "asc",
        width: "98%",
      },
      {
        label: "action",
        field: "action",
        sort: "disabled",
        width: "98%",
      },
    ],
    rows: [
      {
        id: "#1234",
        name: "Tiger Nixon",
        product: "Etherium",
        payment: "Cash",
        status: (
          <div
            style={{
              color: status.color,
              fontWeight: status.fontWeight,
              fontSize: status.fontSize,
            }}
          >
            {status.status}
          </div>
        ),
        deliverystatus: (
          <div
            class="form-check"
            style={{
              color: status.color,
              fontWeight: status.fontWeight,
              fontSize: status.fontSize,
            }}
          >
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Delivered
            </label>
          </div>
        ),
        start_date: "02/11/21",
        end_date: "03/11/2021",
        price: "500$",
        action: (
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
        ),
      },
      {
        name: "Garrett Winters",
        id: "#1234",
        product: "Etherium",
        payment: "Cash",
        status: (
          <div
            style={{
              color: statuscan.color,
              fontWeight: statuscan.fontWeight,
              fontSize: statuscan.fontSize,
            }}
          >
            {statuscan.statuscan}
          </div>
        ),
        deliverystatus: (
          <div
            class="form-check"
            style={{
              color: statuscan.color,
              fontWeight: statuscan.fontWeight,
              fontSize: statuscan.fontSize,
            }}
          >
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Cancelled
            </label>
          </div>
        ),
        start_date: "02/11/21",
        end_date: "03/11/2021",
        price: "500$",
        action: (
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
        ),
      },
      {
        name: "Airi Satou",
        id: "#1234",
        product: "Etherium",
        payment: "Cash",
        status: (
          <div
            style={{
              color: statusbook.color,
              fontWeight: statusbook.fontWeight,
              fontSize: statusbook.fontSize,
            }}
          >
            {statusbook.statusbook}
          </div>
        ),
        deliverystatus: (
          <div
            class="form-check"
            style={{
              color: statusbook.color,
              fontWeight: statusbook.fontWeight,
              fontSize: statusbook.fontSize,
            }}
          >
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Booked
            </label>
          </div>
        ),
        start_date: "02/11/21",
        end_date: "03/11/2021",
        price: "500$",
        action: (
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
        ),
      },
      {
        name: "Cedric Kelly",
        id: "#1234",
        product: "Etherium",
        payment: "Cash",
        status: (
          <div
            style={{
              color: statuscan.color,
              fontWeight: statuscan.fontWeight,
              fontSize: statuscan.fontSize,
            }}
          >
            {statuscan.statuscan}
          </div>
        ),
        deliverystatus: (
          <div
            class="form-check"
            style={{
              color: statuscan.color,
              fontWeight: statuscan.fontWeight,
              fontSize: statuscan.fontSize,
            }}
          >
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Cancelled
            </label>
          </div>
        ),
        start_date: "02/11/21",
        end_date: "03/11/2021",
        price: "500$",
        action: (
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
        ),
      },
      {
        name: "Ashton Cox",
        id: "#1234",
        product: "Etherium",
        payment: "Cash",
        status: (
          <div
            style={{
              color: status.color,
              fontWeight: status.fontWeight,
              fontSize: status.fontSize,
            }}
          >
            {status.status}
          </div>
        ),
        deliverystatus: (
          <div
            class="form-check"
            style={{
              color: status.color,
              fontWeight: status.fontWeight,
              fontSize: status.fontSize,
            }}
          >
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Delivered
            </label>
          </div>
        ),
        start_date: "02/11/21",
        end_date: "03/11/2021",
        price: "500$",
        action: (
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
        ),
      },
      {
        name: "Brielle Williamson",
        id: "#1234",
        product: "Etherium",
        payment: "Cash",
        status: "Delivered",
        deliverystatus: (
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Cancelled
            </label>
          </div>
        ),
        start_date: "02/11/21",
        end_date: "03/11/2021",
        price: "500$",
        action: (
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
        ),
      },
      {
        name: "Herrod Chandler",
        id: "#1234",
        product: "Etherium",
        payment: "Cash",
        status: "Delivered",
        deliverystatus: (
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Delivered
            </label>
          </div>
        ),
        start_date: "02/11/21",
        end_date: "03/11/2021",
        price: "500$",
        action: (
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
        ),
      },
      {
        name: "Rhona Davidson",
        id: "#1234",
        product: "Etherium",
        payment: "Cash",
        status: "Delivered",
        deliverystatus: "Delivered",
        start_date: "02/11/21",
        end_date: "03/11/2021",
        price: "500$",
        action: (
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
        ),
      },
      {
        name: "Colleen Hurst",
        id: "#1234",
        product: "Etherium",
        payment: "Cash",
        status: "Delivered",
        deliverystatus: "Delivered",
        start_date: "02/11/21",
        end_date: "03/11/2021",
        price: "500$",
        action: (
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
        ),
      },
      {
        name: "Sonya Frost",
        id: "#1234",
        product: "Etherium",
        payment: "Cash",
        status: "Delivered",
        deliverystatus: "Delivered",
        start_date: "02/11/21",
        end_date: "03/11/2021",
        price: "500$",
        action: (
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
        ),
      },
      {
        name: "Jena Gaines",
        id: "#1234",
        product: "Etherium",
        payment: "Cash",
        status: "Delivered",
        deliverystatus: "Delivered",
        start_date: "02/11/21",
        end_date: "03/11/2021",
        price: "500$",
        action: (
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
        ),
      },
      {
        name: "Quinn Flynn",
        id: "#1234",
        product: "Etherium",
        payment: "Cash",
        status: "Delivered",
        deliverystatus: "Delivered",
        start_date: "02/11/21",
        end_date: "03/11/2021",
        price: "500$",
        action: (
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
        ),
      },
      {
        name: "Charde Marshall",
        id: "#1234",
        product: "Etherium",
        payment: "Cash",
        status: "Delivered",
        deliverystatus: "Delivered",
        start_date: "02/11/21",
        end_date: "03/11/2021",
        price: "500$",
        action: (
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
        ),
      },
      {
        name: "Haley Kennedy",
        id: "#1234",
        product: "Etherium",
        payment: "Cash",
        status: "Delivered",
        deliverystatus: "Delivered",
        start_date: "02/11/21",
        end_date: "03/11/2021",
        price: "500$",
        action: (
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
        ),
      },
      {
        name: "Tatyana Fitzpatrick",
        id: "#1234",
        product: "Etherium",
        payment: "Cash",
        status: "Delivered",
        deliverystatus: "Delivered",
        start_date: "02/11/21",
        end_date: "03/11/2021",
        price: "500$",
        action: (
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
        ),
      },
      {
        name: "Michael Silva",
        id: "#1234",
        product: "Etherium",
        payment: "Cash",
        status: "Delivered",
        deliverystatus: "Delivered",
        start_date: "02/11/21",
        end_date: "03/11/2021",
        price: "500$",
        action: (
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
        ),
      },
      {
        name: "Paul Byrd",
        id: "#1234",
        product: "Etherium",
        payment: "Cash",
        status: "Delivered",
        deliverystatus: "Delivered",
        start_date: "02/11/21",
        end_date: "03/11/2021",
        price: "500$",
        action: (
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
        ),
      },
      {
        name: "Gloria Little",
        id: "#1234",
        product: "Etherium",
        payment: "Cash",
        status: "Delivered",
        deliverystatus: "Delivered",
        start_date: "02/11/21",
        end_date: "03/11/2021",
        price: "500$",
        action: (
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
        ),
      },
      {
        name: "Bradley Greer",
        id: "#1234",
        product: "Etherium",
        payment: "Cash",
        status: "Delivered",
        deliverystatus: "Delivered",
        start_date: "02/11/21",
        end_date: "03/11/2021",
        price: "500$",
        action: (
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
        ),
      },
      {
        name: "Dai Rios",
        id: "#1234",
        product: "Etherium",
        payment: "Cash",
        status: "Delivered",
        deliverystatus: "Delivered",
        start_date: "02/11/21",
        end_date: "03/11/2021",
        price: "500$",
        action: (
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
        ),
      },
      {
        name: "Jenette Caldwell",
        id: "#1234",
        product: "Etherium",
        payment: "Cash",
        status: "Delivered",
        deliverystatus: "Delivered",
        start_date: "02/11/21",
        end_date: "03/11/2021",
        price: "500$",
        action: (
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
        ),
      },
      {
        name: "Yuri Berry",
        id: "#1234",
        product: "Etherium",
        payment: "Cash",
        status: "Delivered",
        deliverystatus: "Delivered",
        start_date: "02/11/21",
        end_date: "03/11/2021",
        price: "500$",
        action: (
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
        ),
      },
      {
        name: "Caesar Vance",
        id: "#1234",
        product: "Etherium",
        payment: "Cash",
        status: "Delivered",
        deliverystatus: "Delivered",
        start_date: "02/11/21",
        end_date: "03/11/2021",
        price: "500$",
        action: (
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
        ),
      },
      {
        name: "Doris Wilder",
        id: "#1234",
        product: "Etherium",
        payment: "Cash",
        status: "Delivered",
        deliverystatus: "Delivered",
        start_date: "02/11/21",
        end_date: "03/11/2021",
        price: "500$",
        action: (
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
        ),
      },
      {
        name: "Angelica Ramos",
        id: "#1234",
        product: "Etherium",
        payment: "Cash",
        status: "Delivered",
        deliverystatus: "Delivered",
        start_date: "02/11/21",
        end_date: "03/11/2021",
        price: "500$",
        action: (
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
        ),
      },
      {
        name: "Gavin Joyce",
        id: "#1234",
        product: "Etherium",
        payment: "Cash",
        status: "Delivered",
        deliverystatus: "Delivered",
        start_date: "02/11/21",
        end_date: "03/11/2021",
        price: "500$",
        action: (
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
        ),
      },
      {
        name: "Jennifer Chang",
        id: "#1234",
        product: "Etherium",
        payment: "Cash",
        status: "Delivered",
        deliverystatus: "Delivered",
        start_date: "02/11/21",
        end_date: "03/11/2021",
        price: "500$",
        action: (
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
        ),
      },
      {
        name: "Brenden Wagner",
        id: "#1234",
        product: "Etherium",
        payment: "Cash",
        status: "Delivered",
        deliverystatus: "Delivered",
        start_date: "02/11/21",
        end_date: "03/11/2021",
        price: "500$",
        action: (
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
        ),
      },
      {
        name: "Fiona Green",
        id: "#1234",
        product: "Etherium",
        payment: "Cash",
        status: "Delivered",
        deliverystatus: "Delivered",
        start_date: "02/11/21",
        end_date: "03/11/2021",
        price: "500$",
        action: (
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
        ),
      },
      {
        name: "Shou Itou",
        id: "#1234",
        product: "Etherium",
        payment: "Cash",
        status: "Delivered",
        deliverystatus: "Delivered",
        start_date: "02/11/21",
        end_date: "03/11/2021",
        price: "500$",
        action: (
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
        ),
      },
      {
        name: "Michelle House",
        id: "#1234",
        product: "Etherium",
        payment: "Cash",
        status: "Delivered",
        deliverystatus: "Delivered",
        start_date: "02/11/21",
        end_date: "03/11/2021",
        price: "500$",
        action: (
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
        ),
      },
      {
        name: "Suki Burks",
        id: "#1234",
        product: "Etherium",
        payment: "Cash",
        status: "Delivered",
        deliverystatus: "Delivered",
        start_date: "02/11/21",
        end_date: "03/11/2021",
        price: "500$",
        action: (
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
        ),
      },
      {
        name: "Prescott Bartlett",
        id: "#1234",
        product: "Etherium",
        payment: "Cash",
        status: "Delivered",
        deliverystatus: "Delivered",
        start_date: "02/11/21",
        end_date: "03/11/2021",
        price: "500$",
        action: (
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
        ),
      },
      {
        name: "Gavin Cortez",
        id: "#1234",
        product: "Etherium",
        payment: "Cash",
        status: "Delivered",
        deliverystatus: "Delivered",
        start_date: "02/11/21",
        end_date: "03/11/2021",
        price: "500$",
        action: (
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
        ),
      },
      {
        name: "Martena Mccray",
        id: "#1234",
        product: "Etherium",
        payment: "Cash",
        status: "Delivered",
        deliverystatus: "Delivered",
        start_date: "02/11/21",
        end_date: "03/11/2021",
        price: "500$",
        action: (
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
        ),
      },
    ],
  });
  //date picker package
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <Navbar />

      <div class="card">
        <div class="card-body">
          <div>
            <div style={{ display: "flex", justifyContent: "Flex-start" }}>
              <div
                class="card"
                style={{
                  width: "14%",
                  height: "48px",
                  paddingTop: "2px",
                  marginTop: "6px",
                }}
              >
                <div class="card-body" style={{ marginTop: "-7px" }}>
                  <DatePicker
                    style={{ border: "none !important" }}
                    onChange={onChange}
                    value={value}
                  />
                </div>
              </div>
              <div class="dropdown">
                <button 
                  style={{ color: "black" }}
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  href="#"
                >
                  Status
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
              <div class="dropdown">
                <button 
                 style={{ color: "black" }}
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  href="#"
                >
                  Filters
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <br></br>
            <div
              className="col-5"
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <ul>
                <a href="#" style={{ fontWeight: "bolder", fontSize: "17px" }}>
                  AllOrders
                </a>
              </ul>
              <ul>
                <a href="#" style={{ fontWeight: "bolder", fontSize: "17px" }}>
                  Confirm
                </a>
              </ul>
              <ul>
                <a href="#" style={{ fontWeight: "bolder", fontSize: "17px" }}>
                  Partial
                </a>
              </ul>
              <ul>
                <a href="#" style={{ fontWeight: "bolder", fontSize: "17px" }}>
                  Pending
                </a>
              </ul>
              <ul>
                <a href="#" style={{ fontWeight: "bolder", fontSize: "17px" }}>
                  Expired
                </a>
              </ul>
            </div>
            <hr />
          </div>
          <MDBDataTableV5
            className="datatable1"
            style={{ width: "98%" }}
            hover
            entriesOptions={[5, 20, 25]}
            entries={5}
            pagesAmount={4}
            data={datatable}
            searchTop
            searchBottom={false}
          />
        </div>
      </div>
    </div>
  );
}
