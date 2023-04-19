import wavingIcon from "../assets/waving hand.svg";
import Header from "../Component/header";
import Footer from "../Component/footer";
export default function ContactUs() {
  return (
    <section className="contact--us--css">
      <div>
        <Header />

        <div className="contact-us-css--message">
          <div class="container">
            <div class="row justify-content-center">
              <div class=" w-100">
                <div className="contactus--css">
                  <h2 class="text-center">Love to hear from you,</h2>

                  <h2 class="text-center">
                    Get in touch{" "}
                    <img
                      src={wavingIcon}
                      style={{ width: "40px" }}
                      alt="no img"
                    />
                  </h2>
                </div>
              </div>
            </div>
            <div>
              <div class="w-100">
                <form>
                  <div class="row justify-content-center">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label for="name" style={{ display: "none" }}>
                          Name:
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="Name"
                          placeholder="Name"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label for="subject" style={{ display: "none" }}>
                          subject:
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="subject"
                          placeholder="Subject"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row justify-content-center">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label for="email" style={{ display: "none" }}>
                          Email:
                        </label>
                        <input
                          type="email"
                          class="form-control"
                          id="email"
                          placeholder="Email Address"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label for="Wallet" style={{ display: "none" }}>
                          Wallet:
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="Wallet"
                          placeholder="Wallet Adress"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="form-group">
                      <label for="message" style={{ display: "none" }}>
                        Message:
                      </label>
                      <textarea
                        class="form-control"
                        rows="4"
                        id="message"
                        placeholder="Enter your message"
                      ></textarea>
                    </div>
                  </div>
                  <div
                    style={{
                      paddingTop: 10,
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <button
                      type="button"
                      style={{ minWidth: 120 }}
                      className="btn rize-btn-validator-green--submit v-center h-center"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </section>
  );
}

// how to add responsive in a form using bootstrap grids such that when the screen min width reaches 768px the next inpus moves downward?
