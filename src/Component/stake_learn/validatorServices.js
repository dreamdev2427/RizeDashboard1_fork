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
                      Rize uses a combination of hardware that is owned by Rize
                      and hosted in colocation facilities, as well as cloud
                      providers located around the world. This approach helps to
                      reduce dependence on any one provider, location, or
                      network, which can reduce the risk of disruptions and
                      increase rewards.
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
                      Our support model ensures that there is always monitoring
                      and action taken 24 hours a day, seven days a week.
                      Additionally, users can stay updated on cryptocurrency
                      news and updates, and learn more about the space.
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
                      Rize Engineers with over 25 years of experience. Built on
                      a trustless model with security and monitoring processes
                      that support a secure, governed and available platform for
                      success. We utilize a mix of tmkms and horcrux based
                      signing infrastructure to avoid downtime and never
                      double-sign.
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
