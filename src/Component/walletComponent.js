import serviceImg from "../assets/images/img/attachments/services.png";
import utilityImg from "../assets/images/img/attachments/Utility.png";
import Rize_Validator_Node from "../assets/images/img/attachments/Rize_Validator_Node.png";
import Rize_Learn_Stake from "../assets/images/img/attachments/Rize_Learn_Stake.png";
import Info from "../assets/images/img/info.svg";
import Copy from "../assets/images/img/copy.svg";
import bridgeImg from "../assets/images/img/Bridge.jpg";
import BridgeGif from "../assets/video/bride_gif.gif";
import { Link } from "react-router-dom";

function Service() {
  return (
    <section className="mt-5 pt-3" data-aos="fade-up">
      <div
        className="rize-suboverlay-container p-5"
        style={{ backgroundColor: "#313631" }}
      >
        {/* RIZE WALLET TITLE CONTAINER */}
        <div className="row rize-wallet-title-container">
          <div className="col-md-4 v-center pl-3 pl-sm-0">
            <h2 className="rize-wallet-title mb-0">Select a wallet</h2>
          </div>
          <div className="col-md-2 mt-2 mt-md-0">
            <button
              style={{ minWidth: 120, width: "100%" }}
              className="btn rize-btn-green-outline v-center h-center"
            >
              <span style={{ height: 14 }}>Cosmostation</span>
            </button>
          </div>
          <div className="col-md-2 mt-2 mt-md-0">
            <button
              style={{ minWidth: 120, width: "100%" }}
              className="btn rize-btn-green-outline v-center h-center"
            >
              <span style={{ height: 14 }}>Ledger</span>
            </button>
          </div>
          <div className="col-md-2 mt-2 mt-md-0">
            <button
              style={{ minWidth: 120, width: "100%" }}
              className="btn rize-btn-green-outline v-center h-center"
            >
              <span style={{ height: 14 }}>Keplr</span>
            </button>
          </div>
          <div className="col-md-2 mt-2 mt-md-0 pr-3 pr-sm-0">
            <button
              style={{ minWidth: 120, width: "98%" }}
              className="btn rize-btn-green-outline v-center h-center"
            >
              <span style={{ height: 14 }}>Other Wallet</span>
            </button>
          </div>
        </div>
        {/* RIZE WALLET BODY */}
        <div className="row mt-3">
          <div className="col-md-8">
            <div className="row">
              {/* Coreum Stats */}
              <div className="col-md-6 pl-3 pl-sm-0">
                <div className="d-flex">
                  <span className="wallet-body-title pr-3">Coreum Stats</span>
                  <img className="wallet-body-title-pr-3-img" src={Info} />
                </div>
                <div className="row wallet-body-sub-row m-0 mt-2">
                  <div className="col-6 p-0 mb-7">
                    <div className="wallet-body-sub">
                      <div className="wallet-body-subtitle pr-3">ARP</div>
                      <div className="wallet-body-2subtitle pr-3">30%</div>
                    </div>
                  </div>
                  <div className="col-6 p-0 pl-2 mb-7">
                    <div className="wallet-body-sub">
                      <div className="wallet-body-subtitle pr-3">Fees</div>
                      <div className="wallet-body-2subtitle pr-3">50%</div>
                    </div>
                  </div>
                  <div className="col-6 p-0">
                    <div className="wallet-body-sub">
                      <div className="wallet-body-subtitle pr-3">
                        Unbond Period
                      </div>
                      <div className="wallet-body-2subtitle pr-3">7 days</div>
                    </div>
                  </div>
                  <div className="col-6 p-0 pl-2">
                    <div className="wallet-body-sub">
                      <div className="wallet-body-subtitle pr-3">
                        Payout Frequency
                      </div>
                      <div className="wallet-body-2subtitle pr-3">
                        ≈ 2.18sec
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Rize Validator */}
              <div className="col-md-6 pl-3 pl-sm-0">
                <div className="d-flex">
                  <span className="wallet-body-title pr-3 mt-4 mt-md-0">Rize Validator</span>
                  <img className="wallet-body-title-pr-3-img" src={Info} />
                </div>
                <div className="row wallet-body-sub-row m-0 mt-2">
                  <div className="col-12 p-0 mb-7">
                    <div className="wallet-body-sub">
                      <div className="wallet-body-subtitle pr-3">
                        Operator Address
                      </div>
                      <div className="wallet-body-2subtitle pr-3">
                        42D........Hawaii
                      </div>
                      <img src={Copy} className="copyIcon" />
                    </div>
                  </div>
                  <div className="col-12 p-0">
                    <div className="wallet-body-sub">
                      <div className="wallet-body-subtitle pr-3">
                        Delegated to Rize
                      </div>
                      <div className="wallet-body-2subtitle pr-3">
                        405,000 CORE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Rize Donorship */}
              <div className="col-md-6 pl-3 pl-sm-0 mt-3">
                <div className="d-flex">
                  <span className="wallet-body-title pr-3">Rize Donorship</span>
                  <img className="wallet-body-title-pr-3-img" src={Info} />
                </div>
                <div className="row wallet-body-sub-row m-0 mt-2">
                  <div className="col-12 p-0 mb-7">
                    <div className="wallet-body-sub">
                      <div className="wallet-body-subtitle pr-3">
                        Donor Stake Address
                      </div>
                      <div className="wallet-body-2subtitle pr-3">
                        42D........Hawaii
                      </div>
                      <img src={Copy} className="copyIcon" />
                    </div>
                  </div>
                  <div className="col-12 p-0 mb-7">
                    <div className="wallet-body-sub">
                      <div className="wallet-body-subtitle pr-3">
                        Fees from Rize Ecosystem
                      </div>
                      <div className="wallet-body-2subtitle pr-3">
                        405,000 CORE
                      </div>
                    </div>
                  </div>
                  <div className="col-12 p-0 mb-7">
                    <div className="wallet-body-sub">
                      <div className="wallet-body-subtitle pr-3">
                        Distribution Wallet Address
                      </div>
                      <div className="wallet-body-2subtitle pr-3">
                        42D........Hawaii
                      </div>
                      <img src={Copy} className="copyIcon" />
                    </div>
                  </div>
                  <div className="col-12 p-0">
                    <div className="wallet-body-sub">
                      <div className="wallet-body-subtitle pr-3">
                        Total Distributed Rewards
                      </div>
                      <div className="wallet-body-2subtitle pr-3">
                        10,000 CORE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Rize Earnwise */}
              <div className="col-md-6 pl-3 pl-sm-0 mt-3">
                <div className="d-flex">
                  <span className="wallet-body-title pr-3">Rize Earnwise</span>
                  <img className="wallet-body-title-pr-3-img" src={Info} />
                </div>
                <div className="row wallet-body-sub-row m-0 mt-2">
                  <div className="col-12 p-0 mb-7">
                    <div className="wallet-body-sub">
                      <div className="wallet-body-subtitle pr-3">
                        Earnwise Stake Address
                      </div>
                      <div className="wallet-body-2subtitle pr-3">
                        42D........Hawaii
                      </div>
                      <img src={Copy} className="copyIcon" />
                    </div>
                  </div>
                  <div className="col-12 p-0 mb-7">
                    <div className="wallet-body-sub">
                      <div className="wallet-body-subtitle pr-3">
                        Fees from Rize Ecosystem
                      </div>
                      <div className="wallet-body-2subtitle pr-3">
                        405,000 CORE
                      </div>
                    </div>
                  </div>
                  <div className="col-12 p-0 mb-7">
                    <div className="wallet-body-sub">
                      <div className="wallet-body-subtitle pr-3">
                        Distribution Wallet Address
                      </div>
                      <div className="wallet-body-2subtitle pr-3">
                        42D........Hawaii
                      </div>
                      <img src={Copy} className="copyIcon" />
                    </div>
                  </div>
                  <div className="col-12 p-0">
                    <div className="wallet-body-sub">
                      <div className="wallet-body-subtitle pr-3">
                        Total Distributed Rewards
                      </div>
                      <div className="wallet-body-2subtitle pr-3">
                        10,000 CORE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Rize Escrow */}
              <div className="col-md-6 pl-3 pl-sm-0 mt-3">
                <div className="d-flex">
                  <span className="wallet-body-title pr-3">Rize Escrow</span>
                  <img className="wallet-body-title-pr-3-img" src={Info} />
                </div>
                <div className="row wallet-body-sub-row m-0 mt-2 escrow">
                  <div className="col-6 p-0 pl-1 pr-2 mb-7">
                    <div className="wallet-body-sub">
                      <div className="wallet-body-subtitle pr-3">
                        Escrow Address
                      </div>
                      <div className="wallet-body-2subtitle pr-3">
                        42D....waii
                      </div>
                      <img src={Copy} className="copyIcon" />
                    </div>
                  </div>
                  <div className="col-6 p-0 pr-1 mb-7">
                    <div className="wallet-body-sub">
                      <div className="wallet-body-subtitle pr-3">
                        Bridge Fees
                      </div>
                      <div className="wallet-body-2subtitle pr-3">5000 USD</div>
                    </div>
                  </div>
                  <div className="col-6 p-0 pl-1 pr-2 mb-7">
                    <div className="wallet-body-sub">
                      <div className="wallet-body-subtitle pr-3">
                        Rize Purchased
                      </div>
                      <div className="wallet-body-2subtitle pr-3">5000 USD</div>
                    </div>
                  </div>
                  <div className="col-6 p-0 pr-1 mb-7">
                    <div className="wallet-body-sub">
                      <div className="wallet-body-subtitle pr-3">
                        Market Sales
                      </div>
                      <div className="wallet-body-2subtitle pr-3">
                        20,000 USD
                      </div>
                    </div>
                  </div>
                  <div className="col-6 p-0 pl-1 pr-2 mb-7">
                    <div className="wallet-body-sub">
                      <div className="wallet-body-subtitle pr-3">
                        Compounded
                      </div>
                      <div className="wallet-body-2subtitle pr-3">
                        5000 CORE
                      </div>
                      <div
                        className="wallet-body-subtitle pr-3 "
                        style={{ color: "#2F342F" }}
                      >
                        300,000 USD
                      </div>
                    </div>
                  </div>
                  <div className="col-6 p-0 pr-1 mb-7">
                    <div className="wallet-body-sub">
                      <div className="wallet-body-subtitle pr-3">Total</div>
                      <div className="wallet-body-2subtitle pr-3">
                        1,000,000 CORE
                      </div>
                      <div className="wallet-body-subtitle pr-3 text-white text-end">
                        300,000 USD
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Rize Drip */}
              <div className="col-md-6 pl-3 pl-sm-0 mt-3">
                <div className="d-flex">
                  <span className="wallet-body-title pr-3">Rize Drip</span>
                  <img className="wallet-body-title-pr-3-img" src={Info} />
                </div>
                <div className="row wallet-body-sub-row m-0 mt-2 escrow">
                  <div className="col-sm-6 col-12 p-0 pr-2 pl-1 mb-7">
                    <div className="wallet-body-sub">
                      <div className="wallet-body-subtitle pr-3">
                        Drip Stake Address
                      </div>
                      <div className="wallet-body-2subtitle pr-3">
                        42D....waii
                      </div>
                      <img src={Copy} className="copyIcon" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-12 p-0 pr-1 mb-7">
                    <div className="wallet-body-sub">
                      <div className="wallet-body-subtitle pr-3">
                        Drip Payout Address
                      </div>
                      <div className="wallet-body-2subtitle pr-3">
                        42D....waii
                      </div>
                      <img src={Copy} className="copyIcon" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-12 p-0 pr-2 pl-1 mb-7">
                    <div className="wallet-body-sub">
                      <div className="wallet-body-subtitle pr-3">
                        Validator Fees
                      </div>
                      <div className="wallet-body-2subtitle pr-3">
                        5000 CORE
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-12 p-0 pr-1 mb-7">
                    <div className="wallet-body-sub">
                      <div className="wallet-body-subtitle pr-3">
                        Percent of Fees Dipped
                      </div>
                      <div className="wallet-body-2subtitle pr-3">10%</div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-12 p-0 pr-2 pl-1 mb-7">
                    <div className="wallet-body-sub">
                      <div className="wallet-body-subtitle pr-3">
                        Compounded
                      </div>
                      <div className="wallet-body-2subtitle pr-3">
                        5000 CORE
                      </div>
                      <div
                        className="wallet-body-subtitle pr-3 "
                        style={{ color: "#2F342F" }}
                      >
                        300,000 USD
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-12 p-0 pr-1 mb-7">
                    <div className="wallet-body-sub">
                      <div className="wallet-body-subtitle pr-3">
                        Total Dripped
                      </div>
                      <div className="wallet-body-2subtitle pr-3">
                        5000 CORE
                      </div>
                      <div
                        className="wallet-body-subtitle pr-3 "
                        style={{ color: "#2F342F" }}
                      >
                        300,000 USD
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 bl-d-g pl-0 pl-sm-2">
            <div className="bb-d-g">
              {/* Rize Validator */}
              <div className="pl-3 pl-sm-0">
                <div className="d-flex">
                  <span className="wallet-body-title pr-3 mt-md-0 mt-3">My Tokens</span>
                </div>
                <div className="row wallet-body-sub-row m-0 mt-2">
                  <div className="col-12 p-0 pr-3">
                    <div class="wallet-body-subtitle pr-3 mb-1">Already Staked</div>
                    <div class="wallet-body-2subtitle pr-3">126,000 CORE</div>
                  </div>
                </div>
                <div className="row wallet-body-sub-row m-0 mt-2 py-3">
                  <div className="col-12 p-0 pr-3">
                    <div class="wallet-body-2subtitle pr-3">400.000 CORE</div>
                  </div>
                </div>
                <div className="wallet-body-mytoken pr-3 text-white">
                  Lock more Tokens to increase your yield
                </div>
              </div>
              {/* Stake */}
              <div className="pl-3 pl-sm-0 mt-4">
                <div className="d-flex">
                  <span className="wallet-body-title pr-3">Stake</span>
                  <img className="wallet-body-title-pr-3-img" src={Info} />
                </div>
                <div className="row wallet-body-sub-row1 m-0 mt-2">
                  <div className="col-12 p-0 pr-3 pl-3 mb-7">
                    <div className="wallet-body-sub">
                      <div className="p-relative">
                        <input
                          placeholder=".04 CORE remains for future transactions"
                          className="rize-input"
                        />
                        <button className="btn rize-btn-green v-center h-center rize-btn-sm-cus">
                          <span style={{ height: 14 }}>Max</span>
                        </button>
                      </div>
                      <button
                        style={{ minWidth: 120, width: "100%" }}
                        className="btn rize-btn-green v-center h-center"
                      >
                        <span style={{ height: 14 }}>Confirm</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Claim reward button*/}
            <div className="pl-3 pl-sm-0 mt-4">
              <div className="d-flex">
                <span className="wallet-body-title pr-3">Claim <span className="color-dark" >(Option 1)</span> </span>
                <img className="wallet-body-title-pr-3-img" src={Info} />
              </div>
              <div className="wallet-body-sub-row m-0 mt-2 v-center restake-btn p-relative claim-rwd">
                <div className="clmrwddiv">
                  <div className="wallet-body-title pr-3 clmrwd mt-2">
                    <span>Claim Rewards</span>
                    <span className="rwd">45.6 CORE</span>
                  </div>
                </div>
                <img class="icon-info" src={Info} />
              </div>
            </div>
            {/* Stake */}
            <div className="pl-3 pl-sm-0 mt-4">
              <div className="d-flex">
                <span className="wallet-body-title pr-3">Claim <span className="color-dark" >(Option 2)</span> </span>
                <img className="wallet-body-title-pr-3-img" src={Info} />
              </div>
              <div className="row">
                <div className="col-8 pr-3">
                  <div className="wallet-body-sub-row m-0 mt-2 v-center" style={{ padding: "12px 14px" }}>
                    <div className="wallet-body-stoke-text pr-3">30%</div>{" "}
                    <input
                      type="range"
                      class="form-range rize-range-slider"
                      id="customRange1"
                    />
                    <div className="wallet-body-stoke-text pl-3">MAX</div>
                  </div>
                </div>
                <div className="col-4 pl-3">
                  <div className="wallet-body-sub-row m-0 mt-2 v-center justify-content-center p-relative">
                    <img className="icon-info" src={Info} />
                    <div className="d-flex align-items-center justify-content-center flex-column" >
                      <div id="stktext" className="wallet-body-stoke-text1 pr-3">
                        Claim Restake
                      </div>{" "}
                      <div className="wallet-body-stoke-text2 pl-3 mt-1">
                        Rize Pays Fees
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Stake */}
            <div className="pl-3 pl-sm-0 mt-4">
              <div className="d-flex">
                <span className="wallet-body-title pr-3">Claim <span className="color-dark" >(Option 3)</span> </span>
                <img className="wallet-body-title-pr-3-img" src={Info} />
              </div>
              <div className="wallet-body-sub-row m-0 mt-2 v-center restake-btn p-relative">
                <div className="">
                  <div className="wallet-body-stoke-text1 pr-3 rtbtn">
                    Setup Max Auto Restake
                  </div>{" "}
                  <div className="wallet-body-stoke-text2 pl-3 mt-2">
                    Rize Pays Fees Uses Restake App
                  </div>
                </div>
                <img class="icon-info" src={Info} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;