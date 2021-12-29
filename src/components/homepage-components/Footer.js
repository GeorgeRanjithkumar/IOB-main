import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faDiscord } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <>
      <div className="footerBody" style={{ padding: "4em 5em", width: "100%" }}>
        <div className="row footerRow" style={{ marginTop: "100px", marginRight: "20px", marginLeft: "80px", marginBottom: "40px  " }}>
          <div className="col-sm-12 col-md-6 col-lg-4 mb-3" style={{ color: "white" }}>
            <h1>LOGO</h1>
            <h6>Airpush Mailing Address:7900 E. Union Ave. Suite 1100. Denver, CO 80237</h6>
            <h6>P: (877) 944-2490,</h6>
            <h6>P: (877) 944-2490,</h6>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 mb-3" style={{ color: "white" }}>
            <h1>NAVIGATE</h1>
            <h6>Advertisers</h6>
            <h6>Developers</h6>
            <h6>Resources</h6>
            <h6>Company</h6>
            <h6>Connect</h6>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4" style={{ color: "white" }}>
            <h1>PRIVACY & TOS</h1>
            <h6>Advertiser Agreement</h6>
            <h6>Developer Agreement</h6>
            <h6>Acceptable Use Policy</h6>
            <h6>Privacy Policy</h6>
            <h6>Site Terms</h6>
            <h6>GDPR Privacy Policy</h6>
            <h6>Technology Privacy</h6>
          </div>
        </div>
        <div className="row copyrightRow pb-5" style={{ marginRight: "80px", marginLeft: "80px" }}>
          <div className="col-sm-12 col-md-6 col-lg-6" style={{ color: "white" }} className="copyright">
            Copyright &#169; 2021
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6"  className="socialIcons">
            <div style={{ display: "flex", justifyContent: "end" }}>
              <FontAwesomeIcon icon={faFacebookF} style={{ color: "#fff", marginRight: "20px" }} />
              <FontAwesomeIcon icon={faLinkedinIn} style={{ color: "#fff", marginRight: "20px" }} />
              <FontAwesomeIcon icon={faTwitter} style={{ color: "#fff", marginRight: "20px" }} />
              <FontAwesomeIcon icon={faDiscord} style={{ color: "#fff", marginRight: "20px" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
