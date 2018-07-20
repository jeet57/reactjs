import React from 'react';
import API_URL from "../../../../app-config";
import { connect } from 'react-redux';
import avatar_1 from '../../../../images/Owner/users/avatar-1.jpg'
import Cookies from 'js-cookie';

class ServiceProfie extends React.Component{
    constructor(props){
        console.log('rifgwirgfwiugfweugfweifugw')
        super(props);
        this.state = {
          userInfo:props.userData,
          profileData:'',
          userData:Cookies.get('profile_data')
        }
        //alert("userInfo"+JSON.stringify(this.state.userInfo))
      }
    
      componentDidMount(){
        const profile=JSON.parse(this.state.userData)
        if(profile)
        {
          fetch(`${API_URL}assetsapi/profile/${profile.assets_id}/${profile.session_id}`, {
            method: 'get'
          })
        .then(res => res.json())
        .then(
          (result) => {
            //console.log("data 2: "+JSON.stringify(result.profile))
            if (result.success) {
              this.setState({profileData:result.profile})
              
            } 
            //console.log("set user data"+JSON.stringify(this.state.profileData))
          },
        (error) => {
          console.log('error')
        }
      )
      }
    }
        render(){
          const profileInfo=this.state.profileData;
          const { userProfile: profile } = this.props;
          const profile_pic = profile.profile_photo || avatar_1;
		return(

			 <div>
       
       <div  style={{marginTop:'3%',marginBottom:'5%'}} className="wrapper">
          <div className="container"> 
            {/* end page title end breadcrumb */}
            <div className="row">
              <div className="col-sm-12">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="profile-user-box1"> <span className="pull-left m-r-15"><img src="assets/images/users/avatar-1.jpg" alt className="thumb-lg rounded-circle" /></span>
                    <div className="media-body">
                        <h4 className="m-t-5 m-b-5 font-18 ellipsis">{profileInfo.first_name + '. '+ profileInfo.last_name}</h4>
                        <p className="font-13"> User Experience Specialist</p>
                        <p className="text-muted m-b-0"><small>{profileInfo.city}, {profileInfo.country}</small></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="card-box widget-box-four">
                          <div id="dashboard-1" className="widget-box-four-chart" />
                          <div className="wigdet-four-content">
                            <h4 className="m-t-0 font-18 m-b-5" title="Total Request">Total Request</h4>
                            <h3 className="m-b-0 m-t-35"><span>10</span> <span data-plugin="counterup" className="profile-icon"><i className="fi-box" /></span></h3>
                          </div>
                          <div className="clearfix" />
                        </div>
                      </div>
                      {/* end col */}
                      <div className="col-sm-4">
                        <div className="card-box widget-box-four">
                          <div id="dashboard-2" className="widget-box-four-chart" />
                          <div className="wigdet-four-content">
                            <h4 className="m-t-0 font-18 m-b-5" title="Today's Request">Today's Request</h4>
                            <h3 className="m-b-0 m-t-35"><span>0</span> <span data-plugin="counterup" className="profile-icon"><i className="fi-head " /></span></h3>
                          </div>
                          <div className="clearfix" />
                        </div>
                      </div>
                      {/* end col */}
                      <div className="col-sm-4">
                        <div className="card-box widget-box-four">
                          <div id="dashboard-3" className="widget-box-four-chart" />
                          <div className="wigdet-four-content">
                            <h4 className="m-t-0 font-18 m-b-5" title="Tenant">Resolved Request</h4>
                            <h3 className="m-b-0 m-t-35"><span>0</span> <span data-plugin="counterup" className="profile-icon"><i className="fi-head " /></span></h3>
                          </div>
                          <div className="clearfix" />
                        </div>
                      </div>
                      {/* end col */} 
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end row */}
            <div className="row">
              <div className="col-md-4"> 
                {/* Personal-Information */}
                <div className="card-box">
                  <h4 className="header-title mt-0 m-b-20">Personal Information</h4>
                  <div className="panel-body">
                    <p className="text-muted font-13"> Hye, I’m {profileInfo.first_name} residing in this beautiful world. I create websites and mobile apps with great UX and UI design. I have done work with big companies like Nokia, Google and Yahoo. Meet me or Contact me for any queries. One Extra line for filling space. Fill as many you want. </p>
                    <hr />
                    <div className="text-left">
                        <p className="text-muted font-13"><strong>Full Name :</strong> <span className="m-l-15">{profileInfo.first_name} {profileInfo.last_name}</span></p>
                        <p className="text-muted font-13"><strong>Mobile :</strong><span className="m-l-15">{profileInfo.mobile_no}</span></p>
                        <p className="text-muted font-13"><strong>Email :</strong> <span className="m-l-15">{profileInfo.email}</span></p>
                        <p className="text-muted font-13"><strong>Location :</strong> <span className="m-l-15">{profileInfo.country}</span></p>
                      </div>
                    <ul className="social-links list-inline m-t-20 m-b-0">
                      <li className="list-inline-item"> <a title data-placement="top" data-toggle="tooltip" className="tooltips" href data-original-title="Facebook"><i className="fa fa-facebook" /></a> </li>
                      <li className="list-inline-item"> <a title data-placement="top" data-toggle="tooltip" className="tooltips" href data-original-title="Twitter"><i className="fa fa-twitter" /></a> </li>
                      <li className="list-inline-item"> <a title data-placement="top" data-toggle="tooltip" className="tooltips" href data-original-title="Skype"><i className="fa fa-skype" /></a> </li>
                    </ul>
                  </div>
                </div>
                {/* Personal-Information */} 
              </div>
              <div className="col-md-8">
                <div className="card-box">
                  <h4 className="mt-0">Recent Resolve Request</h4>
                  <div className="table-responsive">
                    <table className="table table-hover m-0 table-actions-bar">
                      <thead>
                        <tr>
                          <th> </th>
                          <th>Name</th>
                          <th>Location</th>
                          <th>Date</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><img src="assets/images/users/avatar-2.jpg" alt="contact-img" title="contact-img" className="rounded-circle thumb-sm" /></td>
                          <td><h5 className="m-b-0 m-t-0 font-600">Tomaslau</h5></td>
                          <td><i className="mdi mdi-map-marker text-primary" /> New York </td>
                          <td>23/02/2018 </td>
                          <td><a href="#" className="table-action-btn"><i className="mdi mdi-eye" /></a></td>
                        </tr>
                        <tr>
                          <td><img src="assets/images/users/avatar-3.jpg" alt="contact-img" title="contact-img" className="rounded-circle thumb-sm" /></td>
                          <td><h5 className="m-b-0 m-t-0 font-600">Erwin E. Brown</h5></td>
                          <td><i className="mdi mdi-map-marker text-primary" /> California </td>
                          <td>23/02/2018 </td>
                          <td><a href="#" className="table-action-btn"><i className="mdi mdi-eye" /></a></td>
                        </tr>
                        <tr>
                          <td><img src="assets/images/users/avatar-4.jpg" alt="contact-img" title="contact-img" className="rounded-circle thumb-sm" /></td>
                          <td><h5 className="m-b-0 m-t-0 font-600">Margeret V. Ligon</h5></td>
                          <td><i className="mdi mdi-map-marker text-primary" /> New York </td>
                          <td>23/02/2018 </td>
                          <td><a href="#" className="table-action-btn"><i className="mdi mdi-eye" /></a></td>
                        </tr>
                        <tr>
                          <td><img src="assets/images/users/avatar-5.jpg" alt="contact-img" title="contact-img" className="rounded-circle thumb-sm" /></td>
                          <td><h5 className="m-b-0 m-t-0 font-600">Jose D. Delacruz</h5></td>
                          <td><i className="mdi mdi-map-marker text-primary" /> New York </td>
                          <td>23/02/2018 </td>
                          <td><a href="#" className="table-action-btn"><i className="mdi mdi-eye" /></a></td>
                        </tr>
                        <tr>
                          <td><img src="assets/images/users/avatar-8.jpg" alt="contact-img" title="contact-img" className="rounded-circle thumb-sm" /></td>
                          <td><h5 className="m-b-0 m-t-0 font-600">Luke J. Sain</h5></td>
                          <td><i className="mdi mdi-map-marker text-primary" /> Australia </td>
                          <td>23/02/2018 </td>
                          <td><a href="#" className="table-action-btn"><i className="mdi mdi-eye" /></a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* end row */} 
          </div>
          {/* end container */} 
        </div>
        {/* end wrapper */} 
        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center"> © 2018 Assets Watch. All Rights Reserved </div>
            </div>
          </div>
        </footer>
        {/* End Footer */} 
        {/* jQuery  */} 
        {/* Tether for Bootstrap */} 
        {/* Counter js  */} 
        {/* App js */} 
      </div>

			)
	}
}

export default connect(state=>({ userData: state.userData, userProfile: state.userProfile }))(ServiceProfie)