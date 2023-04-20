import { Router } from "react-router-dom";
import logo from "../assets/images/Image/logo.png";
import footerImg1 from "../assets/images/Image/pic1.svg";
import footerImg2 from "../assets/images/Image/pic2.svg";
import footerImg3 from "../assets/images/Image/pic3.svg";
import footerImg4 from "../assets/images/Image/pic4.svg";
import footerImg5 from "../assets/images/Image/pic5.svg";
import footerImg6 from "../assets/images/Image/pic6.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div class="footer--menu rize-container-fluid">
        <div class="left-col">
          <div class="row tag">
            <span style={{ width: "inherit" }}>
              {/* <img class="footer_logo" src={logo} alt="Image 1" /> */}
              <Link to="/" >
                <img class="footer_logo" src={logo} alt="Image 1" />
              </Link>
            </span>
            <span style={{ padding: "0px" }}>
              <p class="footer_text">Gather. Create. Evolve.</p>
            </span>
          </div>
          <div class="row" style={{ marginBottom: 12 }}>
            <div className="col-md-12" style={{ paddingLeft: 12 }}>
              <ul >
                <li>
                  <a className="link-click" href="/">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a className="link-click" href="#">
                    Swap
                  </a>
                </li>

                <li>
                  <a className="link-click" href="#">
                    Member
                  </a>
                </li>
                <li>
                  <a className="link-click" href="rize-stake-and-learn">
                    LLE
                  </a>
                </li>
                <li>
                  <a className="link-click" href="#">
                    Bridge
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="footer_social_link">
              <a href="#">
                <img class="footer_icon" src={footerImg1} />
              </a>
              <a href="#">
                <img class="footer_icon" src={footerImg2} />
              </a>
              <a href="#">
                <img class="footer_icon" src={footerImg3} />
              </a>
              <a href="#">
                <img class="footer_icon" src={footerImg4} />
              </a>
              <a href="#">
                <img class="footer_icon" src={footerImg5} />
              </a>
              <a href="#">
                <img class="footer_icon" src={footerImg6} />
              </a>
            </div>
          </div>
        </div>
        <div
          class="right-col right-col-placing pr-0 align-items-stretch"
          style={{ maxWidth: 400 }}
        >
          <h2 class="right-col-newslatter-text">Join our newsletter</h2>
          <div class="row right-col-row-css ">
            {/* <input id="footer-input-email" type="email" placeholder="Enter Your Email" />
            <button>Send</button> */}

            <div className="col-12 d-flex align-items-center pr-0" style={{ paddingLeft: 12 }}>
              <input type="email" placeholder="Enter Your Email" />
              <button className="btn rize-btn-green" >Send</button>
            </div>
          </div>
        </div>
      </div>

      <div class="footer--bottom">
        <div class="row footer--bottom--right">
          <p className="mb-0" style={{ color: "white", fontSize: 12 }}>
            2023 Rize. All rights reserved.
          </p>
        </div>
        <div class="row  ">
          <div class="footer--bottom-links">
            <a href="#">Terms</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
