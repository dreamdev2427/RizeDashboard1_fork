import blog1 from "../assets/images/img/blogs/blog1.png";
import blog4 from "../assets/images/img/blogs/blog4.png";
import blog3 from "../assets/images/img/blogs/blog3.png";
function Games() {
  return (
    <section className="mt-5 pt-5 pb-5" data-aos="fade-up">
      <div className="">
        <h1 className="services text-white">Games</h1>
        <div className="container rize-mini-container" style={{ width: "80%" }}>
          {/* DISCOVER */}
          <div className="row">
            <div className="col-sm-4 rize-blog v-center">
              <div>
                <img src={blog1} width="100%" className="mb-4" />
                <h1>Lorem ipsum</h1>
                <p>
                  Lorem ipsum dolorostic siting amet, consectetur adipiscing
                  elitar, sed do mod tempor incididunt.
                </p>
              </div>
            </div>
            <div className="col-sm-4 rize-blog v-center">
              <div>
                <img src={blog3} width="100%" className="mb-4" />
                <h1>Lorem ipsum</h1>
                <p>
                  Lorem ipsum dolorostic siting amet, consectetur adipiscing
                  elitar, sed do mod tempor incididunt.
                </p>
              </div>
            </div>
            <div className="col-sm-4 rize-blog v-center">
              <div>
                <img src={blog4} width="100%" className="mb-4" />
                <h1>Lorem ipsum</h1>
                <p>
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
