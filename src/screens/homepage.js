import Drawer from "../Component/rizedrwaer";
import DashboardHeader from "../Component/rizeheader";
import Blog from "../Component/blog";
import Games from "../Component/games";
import Nft from "../Component/rizeNfts";
import Service from "../Component/services";
import RizeBanner from "../Component/rizebanner";
import What_we_are from "../Component/what_we_are";
import Launchpad from "../Component/launchpad";
import Footer from "../Component/footer";
export default function Homepage() {
  return (
    <section className="rize-home-main">
      {/* ||--------------------------------------------------------------------------------|| */}
      {/* ||                                   RIZE DRAWER                                  || */}
      {/* ||--------------------------------------------------------------------------------|| */}
      {/* <div id="mySidenav" className="sidenav">
      <div className="row" style={{ marginBottom: 30 }}>
        <div className="col-6 v-center">
          <img
            className="rize-header-prifile-drawer"
            src={ URL("../assets/images/icons/profile.svg")}
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
      <DashboardHeader />
      {/* ||--------------------------------------------------------------------------------|| */}
      {/* ||                                   RIZE BANNER                                  || */}
      {/* ||--------------------------------------------------------------------------------|| */}
      <RizeBanner />
      {/* ||--------------------------------------------------------------------------------|| */}
      {/* ||                                   WHAT WE ARE                                  || */}
      {/* ||--------------------------------------------------------------------------------|| */}
      <What_we_are />
      {/* ||--------------------------------------------------------------------------------|| */}
      {/* ||                                    SERVICES                                    || */}
      {/* ||--------------------------------------------------------------------------------|| */}
      <Service />
      {/* ||--------------------------------------------------------------------------------|| */}
      {/* ||                                   Launchpad                                    || */}
      {/* ||--------------------------------------------------------------------------------|| */}
      {/* <Launchpad /> */}
      {/* ||--------------------------------------------------------------------------------|| */}
      {/* ||                                   RIZE NFTS                                    || */}
      {/* ||--------------------------------------------------------------------------------|| */}
      <Nft />
      {/* ||--------------------------------------------------------------------------------|| */}
      {/* ||                                        Blogs                                    || */}
      {/* ||---------------------------------------------------------------------------------|| */}
      <Blog />
      {/* ||--------------------------------------------------------------------------------|| */}
      {/* ||                                       Games                                    || */}
      {/* ||--------------------------------------------------------------------------------|| */}
      <Games />
      {/* ||--------------------------------------------------------------------------------|| */}
      {/* ||                                     SCRIPTS                                    || */}
      {/* ||--------------------------------------------------------------------------------|| */}
      <Footer />
    </section>
  );
}
