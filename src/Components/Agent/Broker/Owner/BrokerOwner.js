import React from 'react'
import Header from '../Header/BrokerHeader'
import avatar_2 from '../../../../images/Owner/users/avatar-2.jpg'
import avatar_7 from '../../../../images/Owner/users/avatar-7.jpg'
import avatar_4 from '../../../../images/Owner/users/avatar-4.jpg'
import avatar_3 from '../../../../images/Owner/users/avatar-3.jpg'
import avatar_6 from '../../../../images/Owner/users/avatar-6.jpg'
import avatar_5 from '../../../../images/Owner/users/avatar-5.jpg'
import img_not_available from '../../../../images/img_not_available.png'
import {Link} from 'react-router-dom'

import { connect } from 'react-redux';
import API_URL from "../../../../app-config";
import Cookies from 'js-cookie';
const loadScript=function(url, callback){

  var script = document.createElement("script")
  script.type = "text/javascript";

  if (script.readyState){  //IE
      script.onreadystatechange = function(){
          if (script.readyState == "loaded" ||
                  script.readyState == "complete"){
              script.onreadystatechange = null;
              callback();
          }
      };
  } else {  //Others
      script.onload = function(){
          callback();
      };
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}
class BrokerOwner extends React.Component{
	constructor(props) {
    super(props);
	this.sendRequest = this.sendRequest.bind(this)
	this.sendMessage = this.sendMessage.bind(this)
    this.state = {
      
	  userInfo:props.userData,
	   userData:Cookies.get('profile_data'),
		 property_list:[],
		 user_list:[],
		 sendReq : {
			 assets_id:'',
			 invite_id:'',
			 property_id:'',
			 session_id:'',
			 message:''
		 },
		 
		 
		 
		  joinedPost:{
			 user_id:'',
			 assets_type:'',
			 session_id:''
		 },
		 joinedList:[],
		 requestedPost:{
			 user_id:'',
			 assets_type:'',
			 session_id:''
		 },
		 requestedList:[],
		 sendForm:{
				sender:'',
				receiver:'',
				message:'',
				session_id:''
			}
    };
	this.onChangeHandler=this.onChangeHandler.bind(this)
	this.acceptRequest=this.acceptRequest.bind(this)
	this.messagerec=this.messagerec.bind(this)
	this.onChangeSMHandler = this.onChangeSMHandler.bind(this)
  }
  componentDidMount(){  
    loadScript('assets/js/bootstrap.min.js',function(){
      var $=window.$;
    $('[data-toggle="tooltip"]').tooltip();  
    })
    
    // var msgicon1=document.getElementById('msg1icon');
    // msgicon1.setAttribute('class','mesg-icon')
    // msgicon1.setAttribute('style','color:white')
    // msgicon1.setAttribute('data-toggle','modal')
    // var veiw1=document.getElementById('view1')
    // veiw1.setAttribute('class','view-icon')

    // var msgicon1=document.getElementById('msg2');
    // msgicon1.setAttribute('class','mesg-icon')
    // msgicon1.setAttribute('style','color:white')
    // msgicon1.setAttribute('data-toggle','modal')
    // var veiw1=document.getElementById('view2')
    // veiw1.setAttribute('class','view-icon')

    // var msgicon1=document.getElementById('msg3');
    // msgicon1.setAttribute('class','mesg-icon')
    // msgicon1.setAttribute('style','color:white')
    // msgicon1.setAttribute('data-toggle','modal')
    // var veiw1=document.getElementById('view3')
    // veiw1.setAttribute('class','view-icon')

    // var msgicon1=document.getElementById('msg4');
    // msgicon1.setAttribute('class','mesg-icon')
    // msgicon1.setAttribute('style','color:white')
    // msgicon1.setAttribute('data-toggle','modal')
    // var veiw1=document.getElementById('view4')
    // veiw1.setAttribute('class','view-icon')

    // var msgicon1=document.getElementById('msg5');
    // msgicon1.setAttribute('class','mesg-icon')
    // msgicon1.setAttribute('style','color:white')
    // msgicon1.setAttribute('data-toggle','modal')
    // var veiw1=document.getElementById('view5')
    // veiw1.setAttribute('class','view-icon')

    // var msgicon1=document.getElementById('msg6');
    // msgicon1.setAttribute('class','mesg-icon')
    // msgicon1.setAttribute('style','color:white')
    // msgicon1.setAttribute('data-toggle','modal')
    // var veiw1=document.getElementById('view6')
    // veiw1.setAttribute('class','view-icon')

    // document.getElementById('act1').setAttribute('class','accept-icon')
    // document.getElementById('act2').setAttribute('class','accept-icon')
    // document.getElementById('act3').setAttribute('class','accept-icon')
	this.inviteDropdowns();
	this.joinedList();
	this.requestedList();
  }
  inviteDropdowns(){
	   
		fetch(`${API_URL}assetsapi/invite_request/1/${JSON.parse(this.state.userData).session_id}/`, {
			  method: 'get',
			})
			.then(res => res.json())
			.then(
			  (result) => {
				//console.log("data 2: "+JSON.stringify(profile))
				//alert("data 2: "+JSON.stringify(result));
				if (result.success) {
				   this.setState({property_list:result.invitation.property});
				   this.setState({user_list:result.invitation.users})
				  
				} 
				// console.log("property_list"+JSON.stringify(this.state.property_list))
				// console.log("user_list"+JSON.stringify(this.state.user_list))
			  },
			(error) => {
			  console.log('error')
			}
		  )       
	}
	
	joinedList(){
		const joinedData = this.state.joinedPost;
		joinedData.session_id=JSON.parse(this.state.userData).session_id;
		joinedData.user_id=JSON.parse(this.state.userData).assets_id;
		joinedData.assets_type="1";
		this.setState({joinedPost:joinedData})
		const options = this.state.joinedPost;
		fetch(`${API_URL}assetsapi/joined/}`,{
			 method: 'post',          
        body: JSON.stringify(options)
        }).then((response) => {
          return response.json();
        }).then((result) => {
			if(result.success){
				this.setState({joinedList:result.joined})
			}
			//console.log(this.state.joinedTenant)
		},
		(error)=>{console.log('error')}
		)
	}
	requestedList(){
		const requestData = this.state.requestedPost;
		requestData.session_id=JSON.parse(this.state.userData).session_id;
		requestData.user_id=JSON.parse(this.state.userData).assets_id;
		requestData.assets_type="1";
		this.setState({requestedPost:requestData})
		const options = this.state.requestedPost;
		fetch(`${API_URL}assetsapi/requested/}`,{
			 method: 'post',          
        body: JSON.stringify(options)
        }).then((response) => {
          return response.json();
        }).then((result) => {
			if(result.success){
				this.setState({requestedList:result.requested})
			}
			//console.log(this.state.requestedTenant)
		},
		(error)=>{console.log('error')}
		)
	}
	
	onChangeHandler(e){
		const requestForm = this.state.sendReq;
		if(e.target.name=="property_id")
			requestForm.property_id=e.target.value
		if(e.target.name=="invite_id")
			requestForm.invite_id=e.target.value
		if(e.target.name=="message")
			requestForm.message=e.target.value
		
		requestForm.session_id=JSON.parse(this.state.userData).session_id;
		requestForm.assets_id=JSON.parse(this.state.userData).assets_id;
		this.setState({sendReq:requestForm})
	}
	sendRequest(){
		const opts = this.state.sendReq
		if(!opts.property_id){
        alert('Property should not be blank');
        return;
      }
	  if(!opts.invite_id){
        alert('Tenant should not be blank');
        return;
      }
	  if(!opts.message){
        alert('Message should not be blank');
        return;
      }
		fetch(`${API_URL}assetsapi/invite/`, {
        method: 'post',          
        body: JSON.stringify(opts)
        }).then((response) => {
          return response.json();
        }).then((data) => {
          console.log('dataaaa:  ', data);
          if(data.msg.indexOf("Invitation send successfully")!=-1 || data.msg.indexOf("Now you both are connected")!=-1)
          {
            alert(data.msg);
            //document.getElementsById("hidemodal").style.display = "none";
			const m = document.getElementById('hidemodal');
			m.style.display='none';
			//alert(m);
          }
        else alert(data.msg)
        }).catch((error) => {
          console.log('error: ', error);
        });
	}
	acceptRequest(id)
	{
		const invite_id = id;
		
		//const sess =this.state.userInfo.session_id;
		//alert(invite_id);
		//console.log(sess);
	fetch(`${API_URL}assetsapi/invite_accept/${JSON.parse(this.state.userData).assets_id}/`+invite_id+`/${JSON.parse(this.state.userData).session_id}`, {
        method: 'get'
        }).then((response) => {
          return response.json();
        }).then((data) => {
          console.log('dataaaa:  ', data);
          if(data.msg.indexOf("Invitation Accepted successfully")!=-1)
          {
            alert(data.msg);
			 window.location.reload();
            //document.getElementsById("hidemodal").style.display = "none";
			// const m = document.getElementById('hidemodal');
			// m.style.display='none';
			//alert(m);
          }
        else alert(data.msg)
        }).catch((error) => {
          console.log('error: ', error);
        });
	}
	messagerec(id,name)
	{ console.log(id+''+name);
		document.getElementById('receiver').value= id;
		document.getElementById('receiver_name').value= name;
	}
	onChangeSMHandler(e)
	{
		const sendFrm = this.state.sendForm
		sendFrm.message=e.target.value
		sendFrm.receiver=document.getElementById('receiver').value
		sendFrm.sender=JSON.parse(this.state.userData).assets_id
		sendFrm.session_id=JSON.parse(this.state.userData).session_id
		this.setState({sendForm:sendFrm})
		console.log(this.state.sendForm);
	}
	sendMessage(){
		const opts = this.state.sendForm
		fetch(`${API_URL}assetsapi/send_message`, {
        method: 'post',
		body:JSON.stringify(opts)
      })
    .then(res => res.json())
    .then(
      (result) => {
        //console.log("data 2: "+JSON.stringify(result.profile))
        if (result.success) {
          //this.setState({sendForm:result.notification})
			alert(result.msg)
			const m = document.getElementById('hidemodal2');
			m.style.display='none';
          
        } 
        console.log("notification"+JSON.stringify(this.state.sendForm))
      },
		(error) => {
		  console.log('error')
		}
	)
	}
    render(){
      // if(this.props.owner===undefined)
      //   window.location.href='http://'+window.location.host
  const propertyList = this.state.property_list;
	const userList = this.state.user_list;
	const requestedUserList= this.state.requestedList;
	const joinedUserList= this.state.joinedList;
        return(
            <div>
            {/* <Header logoutLink={this.logoutLink} 
            name="agent" 
            first_name={this.props.owner.first_name} 
            last_name={this.props.owner.last_name} /> */}
                <div  style={{marginTop:'3%',marginBottom:'3%'}} className="wrapper">
                <div className="container agentdis">
                  <div className="page-title-box">
                    <div className="btn-group pull-right">
                      <ol className="breadcrumb hide-phone p-0 m-0">
                        <li><a href="#" data-toggle="modal" data-target="#send-invite" className="btn waves-light waves-effect w-md btn-custom"><i className="fi-open"></i>&nbsp;&nbsp;Send Invite</a></li>
                      </ol>
                    </div>
                    <h4 className="page-title">Agents</h4>
                  </div>
                  {/* <!-- end page title end breadcrumb -->  */}
                  
                  {/* <!-- end row --> */}
                    <div className="search-result-box card-box">
                      <ul className="nav nav-tabs tabs-bordered">
                        <li className="nav-item"> <a href="#joined-agent" data-toggle="tab" aria-expanded="true" className="nav-link font-16 active">Joined Owner <span className="badge badge-success m-l-10">{joinedUserList.length}</span> </a> </li>
                        <li className="nav-item"> <a href="#agent-request" data-toggle="tab" aria-expanded="false" className="nav-link font-16">Owner Requested <span className="badge badge-danger m-l-10">{requestedUserList.length}</span> </a> </li>
                      </ul>
                      <div className="tab-content">
						  <div className="tab-pane active" id="joined-agent">
							<div className="row">
							{joinedUserList.map((item)=>(
							  <div className="col-md-4">
								<div className="card-box">
								  <div className="member-card-alt">
									<div className="thumb-xl member-thumb m-b-10 pull-left"> 
									<img src={item.profile_photo!=''?API_URL+'assetsadmin/'+item.profile_photo:img_not_available} className="img-thumbnail" alt="profile-image" /> 
									<i className="mdi mdi-star-circle member-star text-success" title="verified user"></i> </div>
									<div className="member-card-alt-info">
									  <h4 className="m-b-5 m-t-0 font-18">{item.name}</h4>
									  <p className="text-muted m-b-3"><i className="icon-phone"></i>&nbsp; {item.mobile_no}</p>
									  <p className="text-muted m-b-3 "><i className="icon-envelope"></i>{item.email}</p>
									  <p className="text-muted m-b-3 text-overflow"><i className="icon-location-pin"></i>&nbsp; {item.country}</p>
									  <ul className="list-inline m-t-10 m-b-0 text-right">
										<li className="list-inline-item"> <a className="mesg-icon" data-toggle="modal" data-target="#send-msg" title="Message" href="#" onClick={this.messagerec.bind(this,item.profile_id,item.name)}><i className="icon-bubble" /></a> </li>
										<li className="list-inline-item"> <Link to={{"pathname":"/broker-owner-profile",state:{profileid:item.profile_id,session:JSON.parse(this.state.userData).session_id}}} className="view-icon"><i className="icon-eye"></i></Link></li>
									  </ul>
									</div>
								  </div>
								</div>
							  </div>
							  ))}
                            {/* <!-- end col --> */}
                            
                            
                          </div>
                          
                          
                          <ul className="pagination justify-content-end pagination-split mt-0">
                            <li className="page-item"> <a className="page-link" href="#" aria-label="Previous"> <span aria-hidden="true">«</span> <span className="sr-only">Previous</span> </a> </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item active"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">4</a></li>
                            <li className="page-item"><a className="page-link" href="#">5</a></li>
                            <li className="page-item"> <a className="page-link" href="#" aria-label="Next"> <span aria-hidden="true">»</span> <span className="sr-only">Next</span> </a> </li>
                          </ul>
                          <div className="clearfix"></div>
                        </div>
                        
                        {/* <!-- end All results tab -->  */}
                        
                        {/* <!-- Users tab --> */}
                        <div className="tab-pane" id="agent-request">
                          <div className="row">
                            
			    {requestedUserList.map((item)=> (
						  <div className="col-md-4">
							<div className="card-box">
							  <div className="member-card-alt">
								<div className="thumb-xl member-thumb m-b-10 pull-left"> 
								<img src={item.profile_photo!=''?API_URL+'assetsadmin/'+item.profile_photo:img_not_available} className="img-thumbnail" alt="profile-image" /> 
								<i className="mdi mdi-star-circle member-star text-success" title="verified user"></i> </div>
								<div className="member-card-alt-info">
							   <h4 className="m-b-5 m-t-0 font-18" >{item.name}</h4> 
								  <p className="text-muted m-b-3"><i className="icon-phone"></i>&nbsp; {item.mobile_no}</p>
								  <p className="text-muted m-b-3 "><i className="icon-envelope"></i>&nbsp; {item.email}</p>
									 <p className="text-muted m-b-3 text-overflow"><i className="icon-location-pin"></i>&nbsp; {item.country}</p>
								  <ul className="list-inline m-t-10 m-b-0 text-right">
									<li className="list-inline-item"> <a className="accept-icon" id="act1" title="" data-placement="top" data-toggle="tooltip"  href="#" data-original-title="Accept" onClick={this.acceptRequest.bind(this, item.assets_id)}><i className="icon-check"></i></a> </li>

								  </ul>
								</div>
							  </div>
							</div>
						  </div>
						 ))}
              {/* <!-- end col --> */}
                           </div>
                          <ul className="pagination justify-content-end pagination-split mt-0">
                            <li className="page-item"> <a className="page-link" href="#" aria-label="Previous"> <span aria-hidden="true">«</span> <span className="sr-only">Previous</span> </a> </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item active"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">4</a></li>
                            <li className="page-item"><a className="page-link" href="#">5</a></li>
                            <li className="page-item"> <a className="page-link" href="#" aria-label="Next"> <span aria-hidden="true">»</span> <span className="sr-only">Next</span> </a> </li>
                          </ul>
                          <div className="clearfix"></div>
                        </div>
                        {/* <!-- end Users tab -->  */}
                        
                      </div>
                    </div>
                </div>
                {/* <!-- end container -->  */}
              </div>
              <div>
              <div id="send-invite" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display:'none'}}>
  <div className="modal-dialog">
    <div className="modal-content"  id="hidemodal">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
        <h4 className="modal-title">Send Invite</h4>
      </div>
      <div className="modal-body">
          <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label for="field-1" className="control-label">Property</label>
              <div className="input-group">
			   <select className="form-control" name="property_id" onChange={this.onChangeHandler}>
				   <option>Please Select</option>
						{propertyList.map((option,key)=> (<option key={key.id} value={option.id}>{option.title}</option>))}
											   
				  </select>	  
               <span className="input-group-addon bg-custom b-0"><i className="mdi mdi-magnify text-white"></i></span>
               </div>
            </div>
          </div>
        </div>
		<div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label for="field-1" className="control-label">Owner</label>
              <div className="">
            {/*// <Autosuggest
						// suggestions={suggestions}
						// onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
						// onSuggestionsClearRequested={this.onSuggestionsClearRequested}
						// getSuggestionValue={getSuggestionValue}
						// renderSuggestion={renderSuggestion}
						// inputProps={inputProps}
	// />
					   // <Select
						// name="form-field-name"
						 // onBlurResetsInput={false}
						// onSelectResetsInput={false}
						// autoFocus
						// value={selectedOption}
						// onChange={this.handleChange}
						// options={[
						  // { value: 'one', label: 'One' },
						  // { value: 'two', label: 'Two' },
						// ]}
					  // /> 
					
               */}
			   <select className="form-control" name="invite_id" onChange={this.onChangeHandler}>
				   <option>Please Select</option>
						{userList.map((option,key)=> (<option key={key.assets_id} value={option.assets_id}>{option.first_name+" "+option.last_name}</option>))}
											   
				  </select>	
               </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group no-margin">
              <label for="field-7" className="control-label" >Message</label>
              <textarea className="form-control" id="field-7" placeholder="" name="message" onChange={this.onChangeHandler}></textarea>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-success waves-effect waves-light" onClick={this.sendRequest}>Send</button>
      </div>
    </div>
  </div>
</div>
              
             <div id="send-msg" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: 'none'}}>
                <div className="modal-dialog">
                    <div className="modal-content" id="hidemodal2">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h4 className="modal-title">Send </h4>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                            <label for="receiver" className="control-label">Name</label>
                            <input type="hidden" className="form-control" placeholder=""  name="receiver" id="receiver" onChange={this.onChangeSMHandler}/>
							<input type="text" className="form-control" placeholder="" name="receiver_name" id="receiver_name" />
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-md-12">
                            <div className="form-group no-margin">
                            <label for="field-7" className="control-label">Message</label>
                            <textarea className="form-control" id="field-7" placeholder="" name="message" onChange={this.onChangeSMHandler}></textarea>
                            </div>
                        </div>
                        </div>
                    </div>
                   <div className="modal-footer">
                        <button type="button" className="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-success waves-effect waves-light" onClick={this.sendMessage}>Send</button>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
        );
    }
}
export default connect(state=>({ userData: state.userData, userProfile: state.userProfile }))(BrokerOwner)