import React from 'react'
import '../../../css/contactus.css'
import ContactForm from './ContactUsComments'

import $ from 'jquery'

export default class ContactUs extends React.Component {
  componentDidMount() {

    setTimeout(function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      $('#tzloadding').remove();
    }, 800);
  }
  render() {
    return (
      <div>
        <div className="vc_row wpb_row vc_row-fluid">
          <div className="no_container">
            <div className="wpb_column vc_column_container vc_col-sm-12">
              <div className="vc_column-inner ">
                <div className="wpb_wrapper">
                  <div className="tz-Breadcrumb">
                    <div className="tzOverlayBreadcrumb">
                      <div className="container">
                        <h1> Contact </h1>

                      </div>
                      {/*<!-- end class container --> */}
                    </div>
                  </div>
                  {/*<!-- end class tzbreadcrumb --> */}

                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="vc_row wpb_row vc_row-fluid tz-responsive-top tz-responsive-bottom vc_custom_1465615755275">
          <div className="container">
            <div className="row">
              <div className="tz-demo-edit wpb_column vc_column_container vc_col-sm-4">
                <div className="vc_column-inner vc_custom_1467714198081">
                  <div className="wpb_wrapper">
                    <div className="tz-home-title vc_custom_1463383763338 title  text-left">
                      <div className="tz-content ">
                        <h3 className="text-left" style={{ fontSize: '18px' }}>Contact info</h3>
                        <div className="tz-title-content">
                          <p>Having issues with your Assetswatch account?</p>
                        </div>
                      </div>
                    </div>
                    <div className="tz-home-title  tz-contact-us ">
                      <div className="tz-content ">
                        <h3>Contact us</h3>
                        <div className="tz-title-content">
                          <div className="item address"> <i className="icon-map-marker"></i> 113 State Hwy 121 Coppell, TX 75019. </div>
                          <div className="item phone"> <i className="icon-telephone2"></i> (214) 702-9959 </div>
                          <div className="item email"> <i className="icon-envelope-open"></i> info@assetswatch.com </div>
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wpb_column vc_column_container vc_col-sm-8">
                <div className="vc_column-inner ">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
          <div className="vc_row wpb_row vc_row-fluid">
            <div className="no_container">
              <div className="wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner ">
                  <div className="wpb_wrapper">
                    <div className="wpb_gmaps_widget wpb_content_element" >
                      <div className="wpb_wrapper">
                        <div className="wpb_map_wraper">
                          <iframe title="contactus" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.690290462099!2d-96.99440488481267!3d32.985571980909455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c2eba6b8f1751%3A0xeb7a94785fd8c42e!2s113+TX-121%2C+Coppell%2C+TX+75019%2C+USA!5e0!3m2!1sen!2sin!4v1529928209642" width="600" height="450" frameborder="0" style={{ border: '0' }} allowfullscreen></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}