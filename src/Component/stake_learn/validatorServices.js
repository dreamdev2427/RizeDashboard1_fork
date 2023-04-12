import validator1 from "../../assets/images/img/decentarlized.png";
import validator2 from "../../assets/images/img/service.png";
import validator3 from "../../assets/images/img/security.png";
function ValidatorServices() {
  return (
    <section className="mt-5 pt-5 pb-5" data-aos="fade-up">
      <div className="rize-suboverlay-container">
        <div className="container ">
          {/* <div className="container rize-mini-container"> */}
          <h1 className="services text-white">
            Rize Is Capable
          </h1>
          <div className="container rize-mini-container">
            {/* DISCOVER */}
            <div className="row">
              <div className="col-sm-4 rize-blog v-center">
                <div className="validator--service--item pr-3">
                  <div>
                    <img src={validator1} width="100%" className="mb-4" />
                    <h1>Decentralized</h1>
                    <p>
                      Rize employs a decentralized approach to its operations, utilizing a combination of hardware and cloud providers located across various regions globally. This approach helps to ensure that the network is not dependent on any single provider or location, which in turn helps to mitigate the risk of disruptions and increase the overall stability and security of the network.
                    </p>
                  </div>
                  <div style={{ paddingTop: 10 }}>
                    <button
                      style={{ marginBottom: 30, minWidth: 120 }}
                      className="btn rize-btn-validator-green v-center h-center"
                    >
                      <span>Learn More</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 rize-blog v-center">
                <div className="validator--service--item pr-3">
                  <div>
                    <img src={validator2} width="100%" className="mb-4" />
                    <h1>Support</h1>
                    <p>
                      At our platform. we prioritize availability and accessibility for our users. Our services are designed to be available 24/7, with a dedicated team of professionals ensuring that network is constantly monitored and any issues are addressed promptly.
                    </p>
                  </div>
                  <div style={{ paddingTop: 10 }}>
                    <button
                      style={{ marginBottom: 30, minWidth: 120 }}
                      className="btn rize-btn-validator-green v-center h-center"
                    >
                      <span>Learn More</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 rize-blog v-center">
                <div className="validator--service--item  ">
                  <div>
                    <img src={validator3} width="100%" className="mb-4" />
                    <h1>Security</h1>
                    <p>
                      Our team of experienced engineers has built a platform that utilizes a trustless model. with multiple layers of security and monitoring processes to ensure the safety of our users' funds and transactions. To achieve this, we utilize cutting-edge security technologies such as TMKMS and Horcrux-based signing infrastructure, which help to prevent downtime and eliminate the risk of double-signing.
                    </p>
                  </div>
                  <div style={{ paddingTop: 10 }}>
                    <button
                      style={{ marginBottom: 30, minWidth: 120 }}
                      className="btn rize-btn-validator-green v-center h-center"
                    >
                      <span>Learn More</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ValidatorServices;
