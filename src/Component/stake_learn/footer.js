
import logo from "../assets/images/Image/logo.png"
import footerImg1 from "../assets/images/Image/pic1.svg"
import footerImg2 from "../assets/images/Image/pic2.svg"
import footerImg3 from "../assets/images/Image/pic3.svg"
import footerImg4 from "../assets/images/Image/pic4.svg"
import footerImg5 from "../assets/images/Image/pic5.svg"
import footerImg6 from "../assets/images/Image/pic6.svg"
export default function Footer () {
    return (
         <div>
      <footer>
        <div class="footer--menu">
          <div class="left-col">
            <div class="row tag">
              <span style={{width:'inherit'}}>
                <img class="footer_logo" src={logo} alt="Image 1"/>

              </span  > 
              <span style={{padding:'0px'}}>
                <p class="footer_text">Gather. Create. Evolve.</p>

              </span>
            </div>
            <div class="row" style={{marginLeft :'-5px'}}>
              <ul>
                <div>
                  <li>Dashboard</li>
                  <li>Swap</li>
               
                  <li>Member</li>
                  <li>LLE</li>
                  <li>Bridge</li>
                </div>
                
              </ul>
            </div>
          
            <div class="row">
              <div class="footer_social_link">
                      <img class="footer_icon" src={footerImg1}/>
                      <img class="footer_icon" src={footerImg2}/>
                      <img class="footer_icon"src= {footerImg3}/>
                      <img class="footer_icon"src= {footerImg4}/>
                      <img class="footer_icon"src= {footerImg5}/>
                      <img class="footer_icon"src= {footerImg6}/>
              </div>    
            </div>
           
          </div>
          <div class="right-col right-col-placing">
            <h2 class="right-col-newslatter-text">Join our  newsletter</h2>
            <div class="row right-col-row-css ">
              <input type="email" placeholder="Enter Your Email" />
              <button >Send</button>
            </div>
          

          </div>
        </div>
        
        <div class="footer--bottom">
          <div class="row footer--bottom--right">
            <p style={{color: 'white' , fontSize:12}}>2023 Rize. All rights reserved.</p>
          </div>
          <div class="row  ">
            <div class="footer--bottom-links">
              <a  href="#">Terms</a> 
               <a href="#">Privacy Policy</a></div>
          </div>
        </div>


          
        </footer>
        
    </div>
     );
}
 
