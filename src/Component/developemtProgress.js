import React, { useState } from "react";

import dp1 from "../assets/images/img/Escrow/dp1.png";
import dp2 from "../assets/images/img/Escrow/dp2.png";
import dp3 from "../assets/images/img/Escrow/dp3.png";
function DevelopmentProgress() {
  const [activeTab, setactiveTab] = useState(true);

  return (
    <section className="mt-5 pt-3" data-aos="fade-up">
      <div className="rize-suboverlay-container">
        <p className="rize-p text-center mb-0">
          Vote begins at 2 million Coreum staked{" "}
        </p>
        <h1
          className="mt-2 mb-5 rize-text-primary text-center"
          style={{ fontSize: "65px!important" }}
        >
          0.01 mil
        </h1>
        <div className="container rize-mini-container ">
          <div className="space-between">
            <div>
              <h2 className="text-white">Charity Voting</h2>
            </div>
            <div>
              <div className="rize-tabs-container">
                <div
                  onClick={() => setactiveTab(!activeTab)}
                  className={`${
                    activeTab == true ? "rize-active-tab" : "rize-inactive-tab"
                  }`}
                >
                  Open
                </div>
                <div
                  onClick={() => setactiveTab(!activeTab)}
                  className={`${
                    activeTab != true
                      ? "rize-active-tab rize-active-tab-right"
                      : "rize-inactive-tab"
                  }`}
                >
                  Past
                </div>
              </div>
            </div>
          </div>
          <h2 className="mt-4 mb-5 rize-text-primary">Open Votes : 3</h2>
          <div className="table-responsive">
            <table className="rize-table rize-development-table table">
              <thead>
                <tr>
                  <th>Created By</th>
                  <th>Description</th>
                  <th>Expires</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="bt-g">
                    <div className="rize-table-createdby">
                      <img src={dp1} />
                      <span className="text-white ml-4">Lorem ipsum</span>
                    </div>
                  </td>
                  <td className="bt-g">
                    <div>
                      <span className="text-white ml-4">
                        Lorem Ipsum Dolor sit amit color asetto...
                      </span>
                    </div>
                  </td>
                  <td className="bt-g">
                    <div>
                      <span className="text-white ml-4">2 Days</span>
                    </div>
                  </td>
                  <td className="bt-g">
                    <div>
                      <button
                        style={{ minWidth: 100 }}
                        className="btn rize-btn-green v-center h-center"
                      >
                        Vote
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="rize-table-createdby">
                      <img src={dp2} />
                      <span className="text-white ml-4">Lorem ipsum</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span className="text-white ml-4">
                        Lorem Ipsum Dolor sit amit color asetto...
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span className="text-white ml-4">2 Days</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <button
                        style={{ minWidth: 100 }}
                        className="btn rize-btn-green v-center h-center"
                      >
                        Vote
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="rize-table-createdby">
                      <img src={dp3} />
                      <span className="text-white ml-4">Lorem ipsum</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span className="text-white ml-4">
                        Lorem Ipsum Dolor sit amit color asetto...
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span className="text-white ml-4">2 Days</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <button
                        style={{ minWidth: 100 }}
                        className="btn rize-btn-green v-center h-center"
                      >
                        Vote
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DevelopmentProgress;
