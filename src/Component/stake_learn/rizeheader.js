import { AiOutlineSearch } from 'react-icons/ai';
import rize1 from "../assets/images/logo/rize_w.svg";
import searchIcon from "../assets/images/icons/search.svg";
import filterIcon from "../assets/images/icons/filter.svg";
import walletConnectIcon from "../assets/images/icons/Wallet_connect.svg";
import profileICon from "../assets/images/icons/profile.svg";
import add_to_cartIcon from "../assets/images/icons/add_to_cart.svg";
import menuIcon from "../assets/images/icons/menu.svg";
import Drawer from "./rizedrwaer";
import React, { useState } from "react";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [drawerWidth, setDrawerWidth] = useState(0);
  const handleClick = () => {
    setIsOpen(!isOpen);
    setDrawerWidth(275);
  };
  return (
    <section className="rize-container">
      {/* ||--------------------------------------------------------------------------------|| */}
      {/* ||                                   WEB HEADER                                   || */}
      {/* ||--------------------------------------------------------------------------------|| */}
      <header className="container rize-header rize-web-header">
        <div className="row">
          <div className="col-sm-6">
            <img
              className="rize-header-logo"
              src={rize1}
              onClick={handleClick}
            />
            <Drawer
              key={drawerWidth}
              close={() => {
                setDrawerWidth(0);
              }}
              drawerWidth={parseInt(drawerWidth)}
            />
            <div className="rize-header-search">
              <input />
              <span className="rize-header-search-icon">
                <AiOutlineSearch color="#2fed00" />
              </span>
            </div>
            <div className="rize-header-filter">
              <img src={filterIcon} />
            </div>
          </div>
          <div className="col-sm-6" style={{ color: "white" }}>
            <div className="rize-header-right-section">
              <div
                className="dropdown"
                style={{ display: "flex", alignItems: "center", width: 70 }}
              >
                <a
                  data-bs-toggle="dropdown"
                  className="rize-nav-item dropdown-toggle"
                >
                  Pages <span className="caret" />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="roadmap">
                      Roadmap
                    </a>
                  </li>
                </ul>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </div>{" "}
              <a className="rize-nav-item">Chains</a>
              <button className="btn rize-btn-green v-center">
                <img
                  className="rize-icon-sm"
                  style={{ marginRight: 10, color: "#212529" }}
                  src={walletConnectIcon}
                />{" "}
                Wallet Connect
              </button>
              <div className="rize-header-divider" />
              <img className="rize-header-prifile" src={profileICon} />
              <img className="rize-icon-sm" src={add_to_cartIcon} />
            </div>
          </div>
        </div>
      </header>
      {/* ||--------------------------------------------------------------------------------|| */}
      {/* ||                                  MOVIE HEADER                                  || */}
      {/* ||--------------------------------------------------------------------------------|| */}
      <header className="container rize-header rize-mobile-header">
        <div className="row">
          <div className="col-4 v-center">
            <img
              onClick={handleClick}
              className="rize-icon-sm"
              src={menuIcon}
            />
            <Drawer
              key={drawerWidth}
              close={() => {
                setDrawerWidth(0);
              }}
              drawerWidth={parseInt(drawerWidth)}
            />
          </div>
          <div className="col-4 v-center h-center">
            <img

              className="rize-header-logo"
              src={rize1}
            />

          </div>
          <div className="col-4 v-center">
            <div className="rize-header-right-section">
              <img
                className="rize-icon-sm"
                style={{ marginRight: 16 }}
                src={add_to_cartIcon}
              />
              <img className="rize-icon-sm d-none" src={searchIcon} />
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}

export default Header;
{
  /*  ||--------------------------------------------------------------------------------|| */
}
{
  /*  || RIZE HEADER || */
}
{
  /*  ||--------------------------------------------------------------------------------|| */
}
