import blog1 from "../assets/images/img/blogs/blog1.png";
import blog2 from "../assets/images/img/blogs/blog2.png";
import blog3 from "../assets/images/img/blogs/blog3.png";
import blog4 from "../assets/images/img/blogs/blog4.png";
import B1 from "../assets/images/img/blogs/b1.png";
import Footer from "../Component/footer";
import Header from "../Component/header";
function BlogPage() {
  return (
    <section className="rize-main">
      <Header />
      <section className="rizeblog-top pt-3" data-aos="fade-up" style={{marginTop:80}}>
        <div>
          <div className="container">
            {/* <div className="rize-blog-view">
              <img src={blog1} width="100%" className="mb-4" />
            </div> */}
            <img src={B1} width="100%" className="mb-4" />
            <h1 className="blog--service text-white mb-5 mt-5">Blog</h1>
            <p className="p text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            </p>
            <p className="p text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            </p>
            
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
}

export default BlogPage;
