import Header from "./../components/homepage-components/Header";

const KycSuccess = () => {
  return (
    <div className="check-mail-viewport">
      <Header />
      <div
        className="row mt-5"
        style={{
          paddingBottom: "25.8em",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div className="col-sm-12 col-md-12 col-lg-6">
          <div className="row" style={{ color: "white" }}>
            <h1 style={{ fontWeight: "600", fontSize: "3rem" }}>
              SUCCESS <br />
              {/* <span style={{ fontWeight: "900" }}>EMAIL</span> */}
            </h1>
            <p style={{ color: "white", fontSize: "2rem" }}>
              Thank you, We have received your all documents for KYC
              verification and you can start using our platform after the
              successful verification.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KycSuccess;
