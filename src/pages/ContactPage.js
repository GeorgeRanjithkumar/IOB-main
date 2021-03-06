import React from "react";
import "./ContactPage.css";

import Header from "../components/homepage-components/Header";
import ContactForm from "../components/accounts-components/ContactForm";

const ContactPage = () => {
  return (
    <div className="contact-page-viewport">
      <Header />
      <div className="row mt-5" style={{ paddingBottom: "20em" }}>
        <div className="col-sm-12 col-md-12 col-lg-12">
          <div
            style={{
              margin: "1em",
              borderRadius: "24px",
              backgroundColor: "white",
              boxShadow: "2px 24px 24px #0000001A",
            }}
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
