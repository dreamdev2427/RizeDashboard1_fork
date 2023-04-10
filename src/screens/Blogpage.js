import blog1 from "../assets/images/img/blogs/blog1.png";
import blog2 from "../assets/images/img/blogs/blog2.png";
import blog3 from "../assets/images/img/blogs/blog3.png";
import blog4 from "../assets/images/img/blogs/blog4.png";
import Footer from "../Component/footer";
import Header from "../Component/header";
import { Link } from "react-router-dom";

function BlogPage() {
  return (
    <section className="rize-main">
      <Header />
      <section className="rizeblog-top pt-3" data-aos="fade-up">
        <div>
          <div className="container">
            <h1 className="blog--service text-white pb-2 mb-5">
              Community Blog
            </h1>
            <div className="row pb-5">
              <div className="col-md-6 rize-blog v-center">
                <Link to="/blog-view/1">
                  <div>
                    <img src={blog1} width="100%" className="mb-4" />
                    <h1 className="mt-2">Lorem ipsum</h1>
                    <p>
                      Lorem ipsum dolorostic siting amet, consectetur adipiscing
                      elitar, sed do mod tempor incididunt.
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-md-6">
                <div className="row pb-2 pt-2">
                  <div className="col-sm-7 col-12 rize-blog rize-pl-5 mb-4 mb-sm-0 order-sm-1 order-2">
                    <Link to="/blog-view/1">
                      <h1>Lorem ipsum</h1>
                      <p>
                        Lorem ipsum dolorostic siting amet, consectetur
                        adipiscing elitar, sed do mod tempor incididunt.
                      </p>
                    </Link>
                  </div>
                  <div className="col-sm-5 col-12 order-sm-2 order-1">
                    <Link to="/blog-view/1">
                      <img src={blog2} width="100%" className="mb-4" />
                    </Link>
                  </div>
                </div>
                <div className="row pb-2">
                  <div className="col-sm-7 col-12 rize-blog rize-pl-5 mb-4 mb-sm-0 order-sm-1 order-2">
                    <Link to="/blog-view/1">
                      <h1>Lorem ipsum</h1>
                      <p>
                        Lorem ipsum dolorostic siting amet, consectetur
                        adipiscing elitar, sed do mod tempor incididunt.
                      </p>
                    </Link>
                  </div>
                  <div className="col-sm-5 col-12 order-sm-2 order-1">
                    <Link to="/blog-view/1">
                      <img src={blog3} width="100%" className="mb-4" />
                    </Link>
                  </div>
                </div>
                <div className="row pb-2">
                  <div className="col-sm-7 col-12 rize-blog rize-pl-5 mb-4 mb-sm-0 order-sm-1 order-2">
                    <Link to="/blog-view/1">
                      <h1>Lorem ipsum</h1>
                      <p>
                        Lorem ipsum dolorostic siting amet, consectetur
                        adipiscing elitar, sed do mod tempor incididunt.
                      </p>
                    </Link>
                  </div>
                  <div className="col-sm-5 col-12 order-sm-2 order-1">
                    <Link to="/blog-view/1">
                      <img src={blog4} width="100%" className="mb-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row pb-5">
              <div className="col-sm-4 rize-blog v-center">
                <Link to="/blog-view/1">
                  <div>
                    <img src={blog1} width="100%" className="mb-4" />
                    <h1>Lorem ipsum</h1>
                    <p>
                      Lorem ipsum dolorostic siting amet, consectetur adipiscing
                      elitar, sed do mod tempor incididunt.
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-sm-4 rize-blog v-center">
                <Link to="/blog-view/1">
                  <div>
                    <img src={blog3} width="100%" className="mb-4" />
                    <h1>Lorem ipsum</h1>
                    <p>
                      Lorem ipsum dolorostic siting amet, consectetur adipiscing
                      elitar, sed do mod tempor incididunt.
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-sm-4 rize-blog v-center">
                <Link to="/blog-view/1">
                  <div>
                    <img src={blog4} width="100%" className="mb-4" />
                    <h1>Lorem ipsum</h1>
                    <p>
                      Lorem ipsum dolorostic siting amet, consectetur adipiscing
                      elitar, sed do mod tempor incididunt.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
}

export default BlogPage;
