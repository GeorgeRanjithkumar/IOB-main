import Header from "../../components/homepage-components/Header";

const Explorer = () => {
  return (
    <div className="check-mail-viewport">
      <Header />
      <div className="row mt-5" style={{ paddingBottom: "30em" }}>
        <div className="col-sm-12 col-md-12 col-lg-6">
          <div className="row" style={{ color: "white" }}>
            <h1 style={{ fontWeight: "600", fontSize: "3rem" }}>
            Explorer <br />
              {/* <span style={{ fontWeight: "900" }}>EMAIL</span> */}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explorer;
