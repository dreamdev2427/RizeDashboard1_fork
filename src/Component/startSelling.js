// import LiquidGlass from "../assets/images/img/Escrow/liquid-glass.png";
import LiquidGlass from "../assets/video/liquid_glass_animation.webm";
function StartSelling() {
  return (
    <section className="mt-5 pt-5 pb-110" data-aos="fade-up">
      <div className="rize-start-selling-container v-center h-center">
        <div>
          <div className="h-center">
            <video
              style={{ width: 300 }}
              autoPlay={true}
              muted={true}
              loop={true}
              controls={false}
              className="w-sm-100"
              width="100%"
            >
              <source src={LiquidGlass} type="video/webm" />
            </video>
          </div>
          <h1 className="start-selling-text text-white mb-0">
            You can start selling at mil USD
          </h1>
          <div className="h-center">
            <button
              style={{ minWidth: 250 }}
              className="btn start-selling-btn rize-btn-green v-center h-center"
            >
              Sell Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StartSelling;
