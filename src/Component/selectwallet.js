import DashboardHeader from "./rizeheader";
import Footer from "./footer";
function SelectWallet() {
  return (
    <section className="contact--us--css">
      <div>
        <DashboardHeader />

        <div className="contact-us-css--message">
          <div class="container">
            <div class="row justify-content-center w-100">
              <div className=" col-md-4">
                <h2 class="text-center">Select a Wallet</h2>
              </div>
              <div className="col-md-8">
                <div>
                  <button
                    style={{ marginBottom: 30, minWidth: 120 }}
                    className="btn rize-btn-netowrk-green v-center h-center"
                  >
                    Learn more
                  </button>
                  <button
                    style={{ marginBottom: 30, minWidth: 120 }}
                    className="btn rize-btn-netowrk-green v-center h-center"
                  >
                    Learn more
                  </button>
                  <button
                    style={{ marginBottom: 30, minWidth: 120 }}
                    className="btn rize-btn-netowrk-green v-center h-center"
                  >
                    Learn more
                  </button>
                  <button
                    style={{ marginBottom: 30, minWidth: 120 }}
                    className="btn rize-btn-netowrk-green v-center h-center"
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="w-100">
              <div className="col-md-4">
                <div class="row justify-content-center">
                  <div>
                    <p>Coreum Stats</p>
                  </div>
                  <div>
                    <div class="row justify-content-center">
                      <div className="col-md-2">
                        <div>
                          <p>ARP</p>
                          <text>30%</text>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div>
                          <p>ARP</p>
                          <text>30%</text>
                        </div>
                      </div>
                    </div>
                    <div class="row justify-content-center">
                      <div className="col-md-2">
                        <div>
                          <p>ARP</p>
                          <text>30%</text>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div>
                          <p>ARP</p>
                          <text>30%</text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4"></div>
              <div className="col-md-4"></div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default SelectWallet;
