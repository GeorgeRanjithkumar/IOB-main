import React from "react";
import TextField from "./TextField";

const KYCForm = () => {
  // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
  };
  
  return (
    <div>
      <div className="row" style={{ marginBottom: "2em" }}>
        <h2 style={{ color: "#0D74D7" }}>Upload Documents</h2>
        <h5>Upload A Clear Image Of Your Chosen Personal Document To Each Category</h5>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "70%",
              margin: "auto",
              alignItems: "center",
              borderRadius: "15px",
              borderWidth: "2px",
              borderStyle: "dotted",
              borderColor: "#0D74D7",
              padding: "3em 0 0 0",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="#0D74D7" className="bi bi-file-earmark-fill" viewBox="0 0 16 16">
              <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3z" />
            </svg>
            <input type="file" ref={hiddenFileInput} onChange={handleChange} style={{ display: "none" }} />
            <button style={{ width: "100%", marginTop: "2em" }} className="btn btn-outline-primary" for="upload" onClick={handleClick}>
              FRONT OF IC
            </button>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "70%",
              margin: "auto",
              alignItems: "center",
              borderRadius: "15px",
              borderWidth: "2px",
              borderStyle: "dotted",
              borderColor: "#0D74D7",
              padding: "3em 0 0 0",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="#0D74D7" className="bi bi-file-earmark-fill" viewBox="0 0 16 16">
              <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3z" />
            </svg>

            <button style={{ width: "100%", marginTop: "2em" }} className="btn btn-outline-primary" onClick={handleClick}>
              BACK OF IC
            </button>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "70%",
              margin: "auto",
              alignItems: "center",
              borderRadius: "15px",
              borderWidth: "2px",
              borderStyle: "dotted",
              borderColor: "#0D74D7",
              padding: "3em 0 0 0",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="#0D74D7" className="bi bi-file-earmark-fill" viewBox="0 0 16 16">
              <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3z" />
            </svg>

            <button style={{ width: "100%", marginTop: "2em" }} className="btn btn-outline-primary" onClick={handleClick}>
              SELFIE WITH NOTE OF IC
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KYCForm;
