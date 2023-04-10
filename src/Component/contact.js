import wavingIcon from "../assets/waving hand.svg";
import background from "../assets/background.svg";
import Header from "./rizeheader";
import Footer from "./footer";
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
                        <label for="firstname" style={{ display: "none" }}>
                          FirstName:
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="FirstName"
                          placeholder="first name"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label for="lastname" style={{ display: "none" }}>
                          LastName:
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="lastname"
                          placeholder="Last name"
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
                        <label for="phoneNo" style={{ display: "none" }}>
                          phoneNo:
                        </label>
                        <input
                          type="tel"
                          class="form-control"
                          id="phoneNo"
                          placeholder="phoneno"
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
