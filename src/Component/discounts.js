import img from "../assets/images/img/Escrow/img.jpg"
function Discount() {
  return (<section className="mt-5 pt-5" data-aos="fade-up">
    <div className="rize-discount-container v-center h-center px-1 px-md-4">
      <div className="row w-100">
        <div className="col-lg-7 v-center">
          <div className="mb-5">
            <p className="text-white rize-p mb-0 text-left">
              Special offer for Exclusive Users Only
            </p>
            <h1 className="rize-discount mb-0">50% Discount</h1>
            <h2 className="text-white rize-p mb-0 rize-discount-subheading text-left">
              Limited time offer
            </h2>
          </div>
        </div>
        <div className="col-lg-5 f-end f-lg-center">
          <span className="discount-right-blur-container h-center">
            <img src={img} width="100%" />
            <div className="discount-right-blur-container-image">
              <div style={{ padding: "8px 25px" }}>
                <div className="row px-lg-3 px-2">
                  <div className="col-7 px-0 content-center justify-content-start">
                    <div className="discount-right-blur-container-top-heading-container">
                      <h1 className="text-white mt-0">Carbon</h1>
                      <p id="resp" className="rize-p text-white mb-0">
                        1 Edition Mined
                      </p>
                    </div>
                  </div>
                  <div className="col-5 px-0 content-center justify-content-end">
                    <div className="discount-right-blur-container-top-badge-container f-end">
                      <div className="rize-badge">
                        <span style={{ height: 11 }}>Art</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  padding: "8px 25px",
                  backdropFilter: "blur(60px)",
                  borderRadius: "0px 0px 15px 15px"
                }}
              >
                <div className="row px-lg-3 px-2">
                  <div className="col px-0 content-center justify-content-start">
                    <div className="discount-right-blur-container-bottom-heading-container">
                      <h1 className="text-white mt-0">$4500</h1>
                      <p className="rize-p text-white mb-0">Auction</p>
                    </div>
                  </div>
                  <div className="col px-0 content-center">
                    <div className="discount-right-blur-container-bottom-heading-container">
                      <h1 className="text-white mt-0">$9000</h1>
                      <p className="rize-p text-white mb-0">Buy Now</p>
                    </div>
                  </div>
                  <div className="col-3 px-0 content-center justify-content-end">
                    <div className="discount-right-blur-container-bottom-heading-container align-items-center">
                      <div className="h-center">
                        <svg
                          width={15}
                          height={15}
                          viewBox="0 0 23 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.566507 10.1596C0.0255795 9.62533 -0.133907 8.96385 0.114626 8.24271C0.358507 7.5335 0.878168 7.11527 1.62444 7.00458C3.40205 6.73946 5.18033 6.47764 6.9606 6.22975C7.20648 6.19529 7.33938 6.09719 7.44571 5.88045C8.22653 4.28507 9.01798 2.69499 9.80545 1.10292C10.153 0.399675 10.7218 0.0410942 11.5033 0C12.2728 0.038443 12.8463 0.385093 13.1906 1.07773C13.992 2.69035 14.7894 4.30562 15.5835 5.92221C15.6719 6.10249 15.7862 6.19529 15.9935 6.22445C17.7898 6.47765 19.5847 6.74144 21.3795 7.00325C21.9637 7.08876 22.4175 7.38039 22.7259 7.88214C23.1811 8.62382 23.0621 9.5511 22.4229 10.1781C21.145 11.4302 19.8638 12.6782 18.5746 13.9184C18.3852 14.1006 18.3274 14.2756 18.3726 14.5301C18.6563 16.1162 18.9327 17.703 19.1972 19.2918C19.259 19.6636 19.3374 20.0553 19.283 20.4192C19.0889 21.7143 17.7333 22.3685 16.5537 21.7581C14.9516 20.9289 13.3547 20.0885 11.7592 19.246C11.5784 19.1506 11.4269 19.1386 11.2488 19.242C11.0056 19.3832 10.7517 19.5052 10.5025 19.6358C9.15355 20.343 7.80588 21.0515 6.45556 21.7561C5.76844 22.1147 5.08796 22.0828 4.46397 21.6295C3.84064 21.1761 3.59875 20.5412 3.729 19.7776C4.02471 18.043 4.31844 16.3084 4.62811 14.5765C4.6806 14.2836 4.61548 14.088 4.39818 13.8806C3.11165 12.6497 1.83376 11.4103 0.566507 10.1596ZM10.9866 17.8369C10.665 19.5072 7.46793 18.6535 7.1875 20.331C7.93429 20.331 5.69733 20.5124 5.77707 20.5741C5.85416 20.6331 5.67075 20.3662 5.77707 20.3112C7.35001 19.4979 8.92096 18.6806 10.4839 17.8482C11.1618 17.4876 11.8156 17.4763 12.4955 17.8369C14.0671 18.6707 15.6453 19.4913 17.2223 20.3158C17.5133 20.4682 17.7193 20.3801 17.7206 20.0931C17.6329 19.5794 17.5432 19.0505 17.4522 18.5216C17.2296 17.2357 17.005 15.9499 16.785 14.664C16.6647 13.9608 16.8641 13.3636 17.3824 12.8638C18.55 11.737 19.7102 10.6023 20.8738 9.47156C21.0041 9.3443 21.149 9.22831 21.2606 9.08647C21.329 8.99964 21.4015 8.85581 21.3736 8.76898C21.345 8.68149 21.2014 8.59135 21.0965 8.57411C20.3615 8.45481 19.6225 8.3534 18.8849 8.24669C17.8197 8.09225 16.7538 7.94113 15.6885 7.78404C14.9775 7.67866 14.4824 7.29158 14.1674 6.64666C13.4677 5.21433 12.756 3.78796 12.0489 2.35894C11.9645 2.1886 11.8947 2.00898 11.7917 1.85123C11.7253 1.75048 13.6413 3.45633 13.5536 3.46296C13.4472 3.47025 15.6374 7.65876 15.5835 7.76614C14.9582 9.00426 8.21357 8.22746 7.59821 9.47156C6.05803 8.55556 10.1652 3.36111 12.1161 5.19444C11.7958 5.85129 22.7942 8.4727 22.0759 8.57411C20.3129 8.82333 24.0622 11.8035 18.5746 12.1204C20.621 13.0284 17.4143 14.8761 17.3824 14.9722C17.3512 15.065 19.5109 16.3981 17.3824 16.7037C18.5925 17.8934 18.0714 18.8426 17.7206 20.9815C18.4071 21.6198 11.164 16.9169 10.9866 17.8369Z"
                            fill="#FFD600"
                          />
                        </svg>
                      </div>
                      <p className="rize-p text-white mb-0">100+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  </section>);
}

export default Discount;