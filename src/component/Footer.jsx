import React from 'react';
// follow us icon
import fbIcon from '../assets/images/footer-follow-fb-icon.png';
import youtubeIcon from '../assets/images/footer-follow-youtube-icon.png';
import linkedinIcon from '../assets/images/footer-follow-linkdin-icon.png';
import twiterrIcon from '../assets/images/footer-follow-twiter-icon.png';
import instaIcon from '../assets/images/footer-follow-ins-icon.png';
// Contact us icon
import con1 from '../assets/images/footer-btm-contact-us-icon-1.png';
import con2 from '../assets/images/footer-btm-contact-us-icon-2.png';
import con3 from '../assets/images/footer-btm-contact-us-icon-3.png';
import con4 from '../assets/images/footer-btm-contact-us-icon-4.png';


import card from '../assets/images/footer-btm-card-icon-1.png';
import card2 from '../assets/images/footer-btm-card-icon-2.png';
import card3 from '../assets/images/footer-btm-card-icon-3.png';
import card4 from '../assets/images/footer-btm-card-icon-4.png';
import card5 from '../assets/images/footer-btm-card-icon-5.png';
import card6 from '../assets/images/footer-btm-card-icon-6.png';
import card7 from '../assets/images/footer-btm-card-icon-7.png';
import card8 from '../assets/images/footer-btm-card-icon-8.png';
import card9 from '../assets/images/footer-btm-card-icon-9.png';
import card10 from '../assets/images/footer-btm-card-icon-10.png';
import card11 from '../assets/images/footer-btm-card-icon-11.png';

function Footer(){
  
    return(
        <footer className="footer-wrp">
        <div className="footer-tp-menu-wrp">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="footer-tp-menu clearfix">
                  <div className="footer-tp-col mHc">
                    <h5 className="footer-tp-col-title active"><span>Our Information</span></h5>
                    <div className="ftr-tp-xs-menu active">
                      <ul className="reset-list clearfix">
                        <li><a href="#">Awards of Recognition</a></li>
                        <li><a href="#">HM Wedding Offices</a></li>
                        <li><a href="#">Customer Reviews</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="footer-tp-col mHc">
                    <h5 className="footer-tp-col-title"><span>Company</span></h5>
                    <div className="ftr-tp-xs-menu">
                      <ul className="reset-list clearfix">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">HM Wedding International</a></li>
                        <li><a href="#">Success Stories</a></li>
                      </ul>
                      <a href="#">Show Less</a>
                    </div>
                  </div>
                  <div className="footer-tp-col mHc">
                    <h5 className="footer-tp-col-title"><span>Help Center & Support</span></h5>
                    <div className="ftr-tp-xs-menu">
                      <ul className="reset-list clearfix">
                        <li><a href="#">Payment Option</a></li>
                        <li><a href="#">Payment Search</a></li>
                        <li><a href="#">Feedback Queries</a></li>
                      </ul>
                      <a href="#">Show Less</a>
                    </div>
                  </div>
                  <div className="footer-tp-col mHc">
                    <h5 className="footer-tp-col-title"><span>Legal & Policies</span></h5>
                    <div className="ftr-tp-xs-menu">
                      <ul className="reset-list clearfix">
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Term of Uses</a></li>
                        <li><a href="#">Disclaimer</a></li>
                      </ul>
                      <a href="#">Show Less</a>
                    </div>
                  </div>
                  <div className="footer-tp-col mHc">
                    <h5 className="footer-tp-col-title"><span>My Account</span></h5>
                    <div className="ftr-tp-xs-menu">
                      <ul className="reset-list clearfix">
                        <li><a href="#">Manage Account</a></li>
                        <li><a href="#">Membership Level</a></li>
                        <li><a href="#">Membership Option</a></li>
                      </ul>
                      <a href="#">Show Less</a>
                    </div>
                  </div>
                  <div className="footer-tp-col mHc">
                    <h5 className="footer-tp-col-title"><span>Useful Links</span></h5>
                    <div className="ftr-tp-xs-menu">
                      <ul className="reset-list clearfix">
                        <li><a href="#">Event Planner</a></li>
                        <li><a href="#">Safe Weddings</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="footer-tp-col mHc">
                    <h5 className="footer-tp-col-title"><span>Our Other Services</span></h5>
                    <div className="ftr-tp-xs-menu">
                      <ul className="reset-list clearfix">
                        <li><a href="#">HM Wedding Cinematography</a></li>
                        <li><a href="#">HM Wedding Invitation</a></li>
                        <li><a href="#">Community</a></li>
                      </ul>
                      <a href="#">Show Less</a>
                    </div>
                  </div>
                  <div className="footer-tp-col mHc">
                    <h5 className="footer-tp-col-title"><span>More</span></h5>
                    <div className="ftr-tp-xs-menu">
                      <ul className="reset-list clearfix">
                        <li><a href="#">VIP Weddings</a></li>
                        <li><a href="#">News Room</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="footer-btm-socail-wrp clearfix">
                  <div className="footer-btm-socail-lft">
                    <div className="footer-btm-follow-us">
                      <h5 className="footer-tp-col-title">Follow Us</h5>
                      <ul className="clearfix reset-list">
                        <li><a href="#"><img src={fbIcon} alt="images" /></a></li>
                        <li><a href="#"><img src={youtubeIcon} alt="images" /></a></li>
                        <li><a href="#"><img src={linkedinIcon} alt="images" /></a></li>
                        <li><a href="#"><img src={twiterrIcon} alt="images" /></a></li>
                        <li><a href="#"><img src={instaIcon} alt="images" /></a></li>
                      </ul>
                    </div>
                    <div className="footer-btm-we-accept">
                      <h5 className="footer-tp-col-title">You are all trusted in unite as one with us:</h5>
                      <ul className="clearfix reset-list">
                        <li><a href="#"><img src={card} alt="images" /></a></li>
                        <li><a href="#"><img src={card2} alt="images" /></a></li>
                        <li><a href="#"><img src={card3} alt="images" /></a></li>
                        <li><a href="#"><img src={card4} alt="images" /></a></li>
                        <li><a href="#"><img src={card5} alt="images" /></a></li>
                        <li><a href="#"><img src={card6} alt="images" /></a></li>
                        <li><a href="#"><img src={card7} alt="images" /></a></li>
                        <li><a href="#"><img src={card8} alt="images" /></a></li>
                        <li><a href="#"><img src={card9} alt="images" /></a></li>
                        <li><a href="#"><img src={card10} alt="images" /></a></li>
                        <li><a href="#"><img src={card11} alt="images" /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="footer-btm-socail-rgt">
                    <div className="footer-btm-contact-us">
                      <h5 className="footer-tp-col-title">Contact Us</h5>
                      <ul className="clearfix reset-list">
                        <li><a href="#"><img src={con1} alt="images" /></a></li>
                        <li><a href="#"><img src={con2} alt="images" /></a></li>
                        <li><a href="#"><img src={con3} alt="images" /></a></li>
                        <li><a href="#"><img src={con4} alt="images" /></a></li>
                      </ul>
                    </div>
                    <div className="footer-btm-play-store">
                      <h5 className="footer-tp-col-title">App Available On Google Play Store</h5>
                      <a href="#">
                        <img src="./assets/images/mobile-store-two.png" alt="images" />
                      </a>
                      <a href="#">
                        <img src="./assets/images/mobile-store-one.png" alt="images" />
                      </a>
                      <span>Address:Twin Brooks-House,No-08,Road- 2B,Block,J , level -2 Flat B2 Baridhara ,vatara Gulshan -2 Dhaka 1212</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyrgt-sec-wrp">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="footer-copyrgt-wrp">
                  <p>Copyright &copy; 2021, HM WEDDINGS. All Rights Reserved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>        
           
    );
}

export default Footer;