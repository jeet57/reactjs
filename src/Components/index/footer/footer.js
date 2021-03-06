import React from 'react'
import img1 from '../../../images/logo-white.png'
import img2 from '../../../images/bk-footer.jpg'
import { Link } from 'react-router-dom'

class Footer extends React.Component{
	componentDidMount()
	{
		
	}
	render(){
		return( <footer className="tz-footer" style={{backgroundImage:'Url('+img2+')'}}>
    <div className="tz-footer-content">
      <div className="container">
        <div className=" tz-footer-two">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 footer-item">
              <aside id="tzcontact_info-2" className="widget_tzcontact_info widget">
                <div className="tzwidget-contact">
                  <div className="tzwidget-logo"> <a href="/"> <img src={img1} alt="Assets Watch" /> </a> </div>
                  <p> Assets Watch provides residential, commercial and rural property marketing solutions and search tools, plus information for buyers, investors, sellers, renters and agents United States wide. </p>
                  <span className="tzwidget-social"> <Link className="facebook" to="#"><i className="fa fa-facebook"></i></Link> 
                  <Link className="twitter" to="#"><i className="fa fa-twitter"></i></Link> 
                  <Link className="google" to="#"><i className="fa fa-google-plus"></i></Link> 
                 
                  <Link className="linkedin" to="#"><i className="fa fa-linkedin"></i></Link> 
				  {/*  <Link className="pinterest" to="#"><i className="fa fa-pinterest"></i></Link> 
	<Link className="flickr" to="#"><i className="fa fa-flickr"></i></Link> */}
                  </span> 
                  </div>
              </aside>
            </div>
            {/*end class footermenu*/}
            <div className="col-lg-2 col-md-2 col-sm-6 col-xs-6 footer-item">
              <aside id="nav_menu-2" className="widget_nav_menu widget">
                <h3 className="module-title title-widget"><span>Quick links</span></h3>
                <div className="menu-menu-footer-container">
                  <ul className="menu">
                    <li className=""><Link to="register">Registration</Link></li>
                    <li className=""><Link to="aboutus">About Us</Link></li>
                    <li className=""><Link to="contactus">Contact Us</Link></li>
                    <li className=""><Link to="properties">My Properties</Link></li>
                    <li className=""><Link to="privacy-policy">Privacy & Policy</Link></li>
                    <li className=""><Link to="terms-condition">Terms & Condition</Link></li>
                  </ul>
                </div>
              </aside>
            </div>
            {/*end class footermenu-*/}
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 footer-item contact-ftr">
              <aside id="nav_menu-2" className="widget_nav_menu widget">
                <h3 className="module-title title-widget"><span>Contact</span></h3>
                <div className="menu-menu-footer-container">
                  <ul id="menu-menu-footer" className="menu">
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1110 map-icon"><Link to="#">113 State Hwy 121 Coppell, TX 75019</Link></li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-309 phone-icon"><Link to="#">(214) 702-9959</Link></li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1095 email-icon"><Link to="#">info@assetswatch.com </Link></li>
                  </ul>
                </div>
              </aside>
            </div>
            {/*end class footermenu-*/}
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 footer-item">
              <aside id="newsletterwidget-2" className="widget_newsletterwidget widget">
                <h3 className="module-title title-widget"><span>NewsLetter</span></h3>
                Subscribe here.
                <div className="tnp tnp-widget">
                  <form method="post" action="/?na=s" id="footerForm">
                    <input type="hidden" name="nr" value="widget" />
                    <input type='hidden' name='nl[]' value='0' />
                    <div className="tnp-field tnp-field-email">
                      <label>Email</label>
                      <input className="tnp-email" type="email" name="ne" required />
                    </div>
                    <div className="tnp-field tnp-field-button">
                      <input className="tnp-submit" type="submit" value="Subscribe" />
                    </div>
                  </form>
                </div>
              </aside>
            </div>
            {/*end class footermenu*/}
          </div>
        </div>
        <div className="tz-copyright">
          <h6>Copyright 2018 Assets Watch. All rights reserved.</h6> 
        </div>
      </div>
    </div>
  </footer>);
	}
}
export default Footer;