import video1 from "../assets/video/alpha_VP9.webm";
import RizeSwiper from "./RizeSwiper";

function Banner() {
  return (
    <section className="rize-banner" data-aos="fade-up">
      <div className="container">
        <div className=" row">
          <div className="col-md-7 rize-banner-left">
            <h1>For Exclusive Holders</h1>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do
              eiusmod tempor incididunt ut.
            </p>
          </div>
          <div className="col-md-5 rize-banner-right v-center">
            <RizeSwiper />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
