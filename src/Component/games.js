import image1 from "../assets/images/img/blogs/blog5.png";
import image2 from "../assets/images/img/blogs/blog3.png";
import image3 from "../assets/images/img/blogs/blog2.png";
function Games() {
  return (
    <section className="mt-5 pt-5 pb-5" data-aos="fade-up">
      <div className="">
        <h1 className="services text-white rize--section-heading">Games</h1>
        <div className="container rize-mini-container" style={{ width: "80%" }}>
          {/* DISCOVER */}
          <div className="row">
            <div className="col-sm-4 v-center single-game-container mb-5 mb-sm-0">
              <div>
                <img src={image1} width="100%" className="mb-2 rize-border-image" />
                <h1 className="heading" >Lorem ipsum</h1>
                <p className="para" >
                  Lorem ipsum dolorostic siting amet, consectetur adipiscing
                  elitar, sed do mod tempor incididunt.
                </p>
              </div>
            </div>
            <div className="col-sm-4 v-center single-game-container mb-5 mb-sm-0">
              <div>
                <img src={image2} width="100%" className="mb-2 rize-border-image" />
                <h1 className="heading" >Lorem ipsum</h1>
                <p className="para" >
                  Lorem ipsum dolorostic siting amet, consectetur adipiscing
                  elitar, sed do mod tempor incididunt.
                </p>
              </div>
            </div>
            <div className="col-sm-4 v-center single-game-container mb-5 mb-sm-0">
              <div>
                <img src={image3} width="100%" className="mb-2 rize-border-image" />
                <h1 className="heading" >Lorem ipsum</h1>
                <p className="para" >
                  Lorem ipsum dolorostic siting amet, consectetur adipiscing
                  elitar, sed do mod tempor incididunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Games;
