import Header from "../Component/header";
import Discount from "../Component/discounts";
import Banner from "../Component/escrowbanner";
import Development from "../Component/development";
import StartSelling from "../Component/startSelling";
import DevelopmentProgress from "../Component/developemtProgress";
import Footer from "../Component/footer";
import Voiting from "../Component/voiting";
import Stats from "../Component/stats";
function Escrow() {
  return (
    <>
      <section className="rize-main">
        {/* ||--------------------------------------------------------------------------------|| */}
        {/* ||                                   RIZE DRAWER                                  || */}
        {/* ||--------------------------------------------------------------------------------|| */}
        {/* <div id="mySidenav" className="sidenav">
            <div className="row" style={{ marginBottom: 30 }}>
              <div className="col-6 v-center">
                <img
                  className="rize-header-prifile-drawer"
                  src="../assets/images/icons/profile.svg"
                />
              </div>
              <div className="col-6 v-center" style={{ justifyContent: "flex-end" }}>
                <a
                  href="javascript:void(0)"
                  className="closebtn"
                  onclick="closeNav()"
                >
                  <img
                    className="rize-icon-sm"
                    src="../assets/images/icons/times.svg"
                  />
                </a>
              </div>
            </div>
            <a href="#">Dashboard</a>
            <a href="#">Swap</a>
            <a href="#">Pool</a>
            <a href="#">LLE</a>
            <a href="#">Bridge</a>
            <a href="#">Chains</a>
            <a>
              <button
                style={{ marginBottom: 30 }}
                className="btn rize-btn-green v-center"
              >
                <img
                  className="rize-icon-sm"
                  style={{ marginRight: 10 }}
                  src="../assets/images/icons/Wallet_connect.svg"
                />{" "}
                Wallet Connect
              </button>
            </a>
          </div> */}
        {/*  ||--------------------------------------------------------------------------------|| */}
        {/*  || RIZE HEADER || */}
        {/*  ||--------------------------------------------------------------------------------|| */}
        <Header />
        {/* ||--------------------------------------------------------------------------------|| */}
        {/* ||                                   RIZE BANNER                                  || */}
        {/* ||--------------------------------------------------------------------------------|| */}
        <Banner />
        {/* ||--------------------------------------------------------------------------------|| */}
        {/* ||                                   Discount                                     || */}
        {/* ||--------------------------------------------------------------------------------|| */}
        <Discount />
        {/* ||--------------------------------------------------------------------------------|| */}
        {/* ||                                    Voiting                                     || */}
        {/* ||--------------------------------------------------------------------------------|| */}
        <Voiting />
        {/* ||--------------------------------------------------------------------------------|| */}
        {/* ||                                    Development                                 || */}
        {/* ||--------------------------------------------------------------------------------|| */}
        <Development />
        {/* ||--------------------------------------------------------------------------------|| */}
        {/* ||                                    Stats                                       || */}
        {/* ||--------------------------------------------------------------------------------|| */}
        <Stats />
        {/* ||--------------------------------------------------------------------------------|| */}
        {/* ||                                    Development                                 || */}
        {/* ||--------------------------------------------------------------------------------|| */}
        <DevelopmentProgress />
        {/* ||--------------------------------------------------------------------------------|| */}
        {/* ||                                  Start Selling                                 || */}
        {/* ||--------------------------------------------------------------------------------|| */}
        <StartSelling/>
      </section>
      {/* ||--------------------------------------------------------------------------------|| */}
      {/* ||                                     SCRIPTS                                    || */}
      {/* ||--------------------------------------------------------------------------------|| */}
      <Footer />
    </>
  );
}

export default Escrow;
