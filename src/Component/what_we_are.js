import descriptImg from "../assets/images/img/what_we_are.png";
function What_we_are() {
  return (
    <section className="mt-5 pt-3 " data-aos="fade-up">
      <div className="container rize-mini-container">
        <div className=" row">
          <div className="col-md-6 rize-what-we-are-left mb-4 mb-sm-0 h-sm-center ">
            <img src={descriptImg} className="w-sm-100 shift-right" />
          </div>
          <div className="col-md-6 rize-what-we-are-right v-center">
            <div>
              <h1>What We Are</h1>
              <p>
                We are think out of the box, AI ran
                organization. Yes, the structure may seem similar to others now,
                but as our system learns, it grows, thanks to innovative AI and
                community. As the user-base grows, the AI shapes and updates
                code to best enable the community to succeed and evolve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default What_we_are;
