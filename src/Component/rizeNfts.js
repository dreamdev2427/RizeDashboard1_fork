// import video1 from "../assets/video/alpha_VP9.webm"
import video1 from "../assets/video/1st_NFT_VP9.webm";
import video2 from "../assets/video/2nd_NFT_VP9.webm";
import video3 from "../assets/video/3rdNFT_VP9.webm";
import RizeSwiper from "./RizeSwiper";
function Nft() {
  return (
    <section
      className="mt-5 pt-3"
      data-aos="fade-up"
      style={{ overflow: "hidden" }}
    >
      <div
        className="rize-suboverlay-container"
        style={{ backgroundColor: "unset" }}
      >
        <div className="container mt-60-b-55">
          <div className="row">
            <div className="col-lg-6 rize-what-we-are-right v-center order-2 order-sm-1">
              <div className="rize-banner--container">
                <h1 className="rize-banner--heading">Rize NFT Governance</h1>
                <p className="rize-banner--paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button
                  className="btn rize-btn-green rize-banner--button"
                >Learn more</button>
              </div>
            </div>
            <div
              className="col-lg-6 rize-what-we-are-left f-end mb-4 mb-sm-0 order-1 order-sm-2 d-flex "
              style={{ justifyContent: "space-between" }}
            >
              <RizeSwiper />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nft;
