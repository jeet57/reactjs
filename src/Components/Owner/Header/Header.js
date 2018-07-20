import React from 'react'
import logo_dark from '../../../images/Owner/logo_dark.png'
import logo_sm from '../../../images/Owner/logo_sm.png'
import avatar_1 from '../../../images/Owner/users/avatar-1.jpg'
import Navlinks from '../Navbar/Navitems'
import Loading_blue_64x64 from '../../../images/loading_blue_64x64.gif'
import Cookies from 'js-cookie';
import API_URL from "../../../app-config";
import {Link} from 'react-router-dom'
export default class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={
            first_name:localStorage.getItem('firstName'),
            last_name:localStorage.getItem('lastName'),
			userData:Cookies.get('profile_data'),
			notification:[]
        }
        this.logout=this.logout.bind(this)
		 this.getNotification = this.getNotification.bind(this)
        //localStorage.setItem(MyData)
       // alert("I am working now")
    }
	componentDidMount(){
		this.getNotification();
	}
	getNotification()
	{
		fetch(`${API_URL}assetsapi/notification_alert/${JSON.parse(this.state.userData).assets_id}/${JSON.parse(this.state.userData).session_id}/`, {
			  method: 'get',
			})
			.then(res => res.json())
			.then(
			  (result) => {
				
				if (result.success) {
				   this.setState({notification:result.notification});
				  } 
				console.log(this.state.notification)
			  },
			(error) => {
			  console.log('error')
			}
		  )    
	}
	
	
logout(){
    localStorage.clear();
    window.location.href='/'
}
 
    render(){
  //console.log(JSON.parse(this.state.userData).assets_id)
        return(
            <header id="topnav">
            
                <div className="topbar-main">
                    <div className="container"> 
                    
                    {/*<!-- Logo container-->*/}
                    <div className="logo"> 
                        {/*<!-- Text Logo --> 
                        <!--<a href="index" className="logo">--> */}
                        {/*<!--Adminox--> 
                        <!--</a>--> */}
                        {/*<!-- Image Logo --> */}
                        <a href="/" className="logo"> 
                        <img src={logo_dark} alt="" className="logo-lg" /> 
                        <img src={logo_sm} alt="" className="logo-sm" /> </a> </div>
                        {/*<!-- End Logo container-->*/}                    
                        <div className="menu-extras topbar-custom">
                         <ul className="list-inline float-right mb-0">
                         <li className="menu-item list-inline-item"> 
                            {/*<!-- Mobile menu toggle--> */}
                            <a className="navbar-toggle nav-link">
                            <div className="lines"> <span></span> <span></span> <span></span> </div>
                            </a> 
                            {/*<!-- End mobile menu toggle--> */}
                         </li>
                         <li className="list-inline-item"> <button type="button" className="btn btn-warning waves-effect w-md waves-light">Upgrade Plan</button></li>
                         <li className="list-inline-item dropdown notification-list"> <a className="nav-link dropdown-toggle arrow-none waves-light waves-effect" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false" onClick={this.getNotification}> <i className="dripicons-bell noti-icon" /> <span className="badge badge-pink noti-icon-badge">{this.state.notification.length}</span> </a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-arrow dropdown-lg" aria-labelledby="Preview"> 
                            {/* item*/}
                            <div className="dropdown-item noti-title">
                                <h5><span className="badge badge-danger float-right">{this.state.notification.length}</span>Notification</h5>
                            </div>
							     {/* item*/} 
							{this.state.notification.map((item)=>( 
                  
                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                               <Link to = {{pathname:'/owner-notifications'}}> 
									<div className="notify-icon bg-success"><i className="icon-bubble" /></div>
									<p className="notify-details">{item.message}<small className="text-muted">1 min ago</small></p>
								</Link>
                            </a> 
							))}
                            
                            
                            {/* All*/} 
                            <a href="#" className="dropdown-item notify-item notify-all"> <Link to = {{pathname:'/owner-notifications'}}>View All</Link> </a> </div>
                        </li>
                        <li className="list-inline-item dropdown notification-list"> <a className="nav-link dropdown-toggle waves-effect waves-light nav-user" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false"> <img src="assets/images/users/avatar-1.jpg" alt="user" className="rounded-circle" /><span className="profile-name">{this.state.first_name.replace(/["']/g, "")+" "+this.state.last_name.replace(/["']/g, "")}</span> </a>
                            <div className="dropdown-menu dropdown-menu-right profile-dropdown " aria-labelledby="Preview"> 
                            {/* item*/}
                            <div className="dropdown-item noti-title">
                                <h5 className="text-overflow"><small>Hi,{this.state.first_name.replace(/["']/g, "")}</small> </h5>
                            </div>
                            {/* item*/} 
                            <a href="javascript:void(0);" className="dropdown-item notify-item"> <i className="dripicons-user" /> <span>Profile</span> </a> 
                            {/* item*/} 
                            <a href="javascript:void(0);" className="dropdown-item notify-item"> <i className="dripicons-gear" /> <span>Settings</span> </a> 
                            {/* item*/} 
                            <a href="javascript:void(0);" className="dropdown-item notify-item"> <i className="dripicons-power" /> <span onClick={this.logout}>Logout</span> </a> </div>
                        </li>
                        </ul>
                    </div>
                    {/*<!-- end menu-extras -->*/}
                    
                    <div className="clearfix"></div>
                    </div>
                    {/*<!-- end container --> */}
                </div>
                {/*<!-- end topbar-main -->*/}
                <div className="navbar-custom">
                 <div className="container">
                <Navlinks name={this.props.name} />
                 {/*<!-- end #navigation --> */}
            </div>
            {/*<!-- end container --> */}
        </div>   
                </header>
        );
    }
}
