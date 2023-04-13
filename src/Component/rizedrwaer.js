import profileIcon from "../assets/images/icons/profile.svg";
import timesIcon from "../assets/images/icons/times.svg";
import connectIcon from "../assets/images/icons/Wallet_connect.svg";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import searchIcon from "../assets/images/icons/search.svg";
import Search from "./mob-search";

// let inputBox = document.querySelector('.input-box'),
//   searchIcon = document.querySelector('.search'),
//   closeIcon = document.querySelector('.close-icon');

// // ---- ---- Open Input ---- ---- //
// searchIcon.addEventListener('click', () => {
//   inputBox.classList.add('open');
// });
// // ---- ---- Close Input ---- ---- //
// closeIcon.addEventListener('click', () => {
//   inputBox.classList.remove('open');
// });



export default function Drawer(props) {
  const [drawerWidth, setDrawerWidth] = useState(props.drawerWidth);
  const handleClick = () => {
    setDrawerWidth(0);
    props.close(0);
  };
  return (
    <section className="rize-main">
      {/* ||--------------------------------------------------------------------------------|| */}
      {/* ||                                   RIZE DRAWER                                  || */}
      {/* ||--------------------------------------------------------------------------------|| */}
      <div
        id="mySidenav"
        className="sidenav d-block"
        style={{ width: drawerWidth }}
      >
        <div className="row" style={{ marginBottom: 30 }}>
          <div className="col-6 v-center">
            <img className="rize-header-prifile-drawer" src={profileIcon} />
            
          </div>
          
        
          
          <div
            className="col-6 v-center"
            style={{ justifyContent: "flex-end" }}
          >
            <a className="closebtn" onClick={handleClick}>
              <img className="rize-icon-sm" src={timesIcon} />
            </a>
          </div>
        </div>

        <div className="row" style={{ marginBottom: 30 }}>
      

          <Search/>
          

        </div>
        <div className="side--drawer-option d-block">
          {/* <Link to="/"> Dashboard</Link> */}
          <Link to="/roadmap">Road Map</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/escrow">Validator</Link>
          <Link to="/rize-stake-and-learn">Earnwise</Link>
          <Link to="/">Utility</Link>
          <Link to="/">Members</Link>
          {/* <Link to="#">Bridge</Link> */}
          {/* <Link to="/contact-us">ContactUs</Link> */}
        </div>
        <a style={{ paddingLeft:0}}> 
        <Link to="/wallet">
                  <button
                    className="btn rize-btn-green v-center"
                    style={{ padding: 11, paddingBottom: 7 }}
                  >
                    {/* <img
                    className="rize-icon-sm"
                    style={{ marginRight: 10 }}
                    src={walletConnectIcon}
                  />{" "} */}
                    <span
                      style={{
                        height: 13,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      Wallet Connect
                    </span>
                  </button>
                </Link>
        </a>
      </div>
    </section>
  );
}
