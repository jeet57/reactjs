import React from 'react'
import { connect } from 'react-redux';
import API_URL from "../../../app-config";
import Cookies from 'js-cookie';

 class ProfileInfo extends React.Component{
	constructor(props){
    super(props)
    this.profileSubmit=this.profileSubmit.bind(this)
    this.state={
		userData:Cookies.get('profile_data'),	
		userInfo:props.userData,
		 profile:[],
      profileSetting:{
			assets_id:"",
			session_id:"",
			first_name:"",
			last_name:"",
			email:"",
			country:"",
			state:"",
			city:"",
			zip_code:"",
			mobile_no:"",
			landline_no:"",
			assets_type:"",
			owner_type:"",
			profile_photo:"",
			about_us:"",
			facebook_link:"",
			twitter_link:"",
			linkedin_link:"",
			SSN_EIN:"",
			dob:"",
			gender:""
      },
	  countries: [{ name: "Afghanistan" }],
      states: [],
      cities: []
      }
      this.onChangeHandler=this.onChangeHandler.bind(this);
	}
	onChangeHandler(e){
    const profileForm=this.state.profileSetting
   
      if(e.target.name==='first_name')
	  {
        profileForm.first_name=e.target.value;
		//alert(settingForm.old_password);
	  }
		else if(e.target.name==='last_name')
			profileForm.last_name=e.target.value
		else if(e.target.name==='email')
			profileForm.email=e.target.value
		else if(e.target.name==='country')
		{
			profileForm.country=e.target.value;
			var SelectCountry = profileForm.country;
			this.stateLists(SelectCountry);
		}
		else if(e.target.name==='state')
		{
			profileForm.state=e.target.value;
			var SelectState = profileForm.state;
			this.cityList(SelectState);
		}
		else if(e.target.name==='city')
			profileForm.city=e.target.value
		else if(e.target.name==='zip_code')
			profileForm.zip_code=e.target.value
		else if(e.target.name==='mobile_no')
			profileForm.mobile_no=e.target.value
		else if(e.target.name==='landline_no')
			profileForm.landline_no=e.target.value
		else if(e.target.name==='assets_type')
			profileForm.assets_type=e.target.value
		else if(e.target.name==='owner_type')
			profileForm.owner_type=e.target.value
		else if(e.target.name==='profile_photo')
		{
			 profileForm.profile_photo=e.target.files[0]
			// profileForm.append('profile_photo', profileForm.profile_photo, profileForm.profile_photo.name)
			// const formData = new FormData();
			 // profileForm.profile_photo=formData.append(e.target.name,e.target.files[0]);
		}
		else if(e.target.name==='about_us')
			profileForm.about_us=e.target.value
		else if(e.target.name==='facebook_link')
			profileForm.facebook_link=e.target.value
		else if(e.target.name==='twitter_link')
			profileForm.twitter_link=e.target.value
		else if(e.target.name==='linkedin_link')
			profileForm.linkedin_link=e.target.value
		else if(e.target.name==='SSN_EIN')
			profileForm.SSN_EIN=e.target.value
		else if(e.target.name==='dob')
			profileForm.dob=e.target.value
		else if(e.target.name==='gender')
			profileForm.gender=e.target.value
	
	 //console.log(this.state.userInfo);
		profileForm.assets_id = JSON.parse(this.state.userData).assets_id;
		profileForm.session_id = JSON.parse(this.state.userData).session_id;
		profileForm.assets_type = JSON.parse(this.state.userData).assetsTypeId;
      this.setState({profileSetting:profileForm})
      // this.setState({[e.target.name]:e.target.value})   
 console.log(this.state.profileSetting);	  
  }
	profileSubmit()
	{
		var opts=this.state.profileSetting

      // console.log(opts.chekname);
     
      // if(!opts.old_password){
        // alert('Old Password should not be blank');
        // return;
      // }
      // if(!opts.new_password){
        // alert('New Password should not be blank');
        // return;
      // }
      // if(!opts.confirm_password){
        // alert('Confirm Password should not be blank');
        // return;
      // }
      
	  // if(opts.confirm_password !== opts.new_password)
	  // {
		   // alert ('Confirm password is not matched.')
	  // }
	  
      fetch(`${API_URL}assetsapi/setting_profile/`, {
        method: 'post',        
        body: JSON.stringify(opts)
        }).then((response) => {
          return response.json();
        }).then((data) => {
          //console.log('dataaaa:  ', data);
          if(data.msg.indexOf("Profile edited successfully")!=-1)
          {
				alert(data.msg);
            this.props.history.replace(`/settings`);
          }
        else alert(data.msg)
        }).catch((error) => {
          console.log('error: ', error);
        });
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
				//console.log("data 2: "+JSON.stringify(profile))
				if (result.success) {
				  this.setState({profile:result.profile})
				  
				} 
				//console.log("set user data"+JSON.stringify(this.state.profile))
			  },
			(error) => {
			  console.log('error')
			}
		  )
		  this.Countries();
		 }
		}
Countries() {
    fetch(`${API_URL}assetsapi/country/`).then(response => {
      response.json().then(data => {
        this.setState({ countries: data.countries });
        //console.log(this.state.countries)
      });
    });
  }
  stateLists(SelectCountry) {
    fetch(`${API_URL}assetsapi/state/` + SelectCountry).then(response => {
      response.json().then(data => {
        this.setState({ states: data.states });
        //alert("States"+JSON.stringify(this.state.states))
      });
    });
  }
  cityList(SelectState) {
    //alert("Hello"+JSON.stringify(SelectState))
    fetch(`${API_URL}assetsapi/city/` + SelectState).then(response => {
      response.json().then(data => {
        this.setState({ cities: data.cities });
        //alert("Cities"+JSON.stringify(this.state.cities))
      });
    });
  }
    render(){
		//console.log(this.state.profile);
        return(

					  <div className="tab-pane fade show active" id="profile-info">
						<fieldset title="1">
						  <h4>Basic Information</h4>
						  <div className="form-group">
							<div className="row">
							  <div className="col-md-1">
								<label for="first_name">First Name</label>
							  </div>
							  <div className="col-md-5">
								<input type="text" className="form-control" id="first_name" name="first_name"  onChange={this.onChangeHandler} placeholder="" />
							  </div>
							  <div className="col-md-1">
								<label for="last_name">Last Name</label>
							  </div>
							  <div className="col-md-5">
								<input type="text" className="form-control" id="last_name" name="last_name"   onChange={this.onChangeHandler} placeholder=""  />
							  </div>
							</div>
						  </div>
						  <div className="form-group">
							<div className="row">
							  <div className="col-md-1">
								<label for="dob">D.O.B</label>
							  </div>
							  <div className="col-md-2">
								<input type="text" className="form-control"  name="dob"  id="datepicker-autoclose"  onChange={this.onChangeHandler} placeholder=""  />
							  </div>
							  <div className="col-md-1">
								<label for="gender">Gender</label>
							  </div>
							  <div className="col-md-2">
								<select className="form-control" name="gender" >
								  <option></option>
								  <option value="Male" >Male</option>
								  <option value="Female" >Female</option>
								</select>
							  </div>
							  <div className="col-md-1">
								<label for="SSN_EIN">SSN/EIN</label>
							  </div>
							  <div className="col-md-5">
								<input type="text" className="form-control" name="SSN_EIN"  id="SSN_EIN" onChange={this.onChangeHandler} placeholder="" required />
							  </div>
							</div>
						  </div>
						  <div className="form-group">
							<div className="row">
							  <div className="col-md-1">
								<label for="email">Email</label>
							  </div>
							  <div className="col-md-5">
								<input type="email" className="form-control" name="email"  id="email"  onChange={this.onChangeHandler} placeholder="" required />
							  </div>
							  <div className="col-md-1">
								<label for="owner_type">User Type</label>
							  </div>
							  <div className="col-md-5">
								<select className="form-control" name="owner_type"  onChange={this.onChangeHandler} >
								  <option></option>
								  <option value="1" >Individual</option>
								  <option value="2" >Organization</option>
								</select>
							  </div>
							</div>
						  </div>
						  <div className="form-group">
							<div className="row">
							  <div className="col-md-1">
								<label for="country">Country</label>
							  </div>
							  <div className="col-md-5">
								<select className="form-control" name="country"  onChange={this.onChangeHandler} >
								  <option></option>
								  {this.state.countries.map((option, key) => (<option key={key.id} value={option.name}>{option.name}</option>))}
								 
								</select>
							  </div>
							  <div className="col-md-1">
								<label for="state" >State</label>
							  </div>
							  <div className="col-md-5">
								<select className="form-control" name="state"  onChange={this.onChangeHandler} >
								  <option></option>
								 {this.state.states?this.state.states.map((option, key) => (<option key={key.id} value={option.name}>{option.name}</option>)):''}
								 
								</select>
							  </div>
							  
							</div>
						  </div>
						  <div className="form-group">
							<div className="row">
							  <div className="col-md-1">
								<label for="city">City</label>
							  </div>
							  <div className="col-md-5">
								<select className="form-control" name="city" onChange={this.onChangeHandler} >
								  <option></option>
								  {this.state.cities?this.state.cities.map((option, key) => (<option key={key.id} value={option.name}>{option.name}</option>)):''}
								 
								</select>
							  </div>
							  <div className="col-md-1">
								<label for="zip-code">ZIP Code</label>
							  </div>
							  <div className="col-md-5">
								<input type="text" className="form-control" name="zip_code"  id="zip-code" placeholder=""  onChange={this.onChangeHandler} />
							  </div>
							</div>
						  </div>
						  
						  <div className="form-group">
							<div className="row">
							  <div className="col-md-1">
								<label for="mobile-no">Mobile No</label>
							  </div>
							  <div className="col-md-5">
								<input type="text" className="form-control" name="mobile_no"  id="mobile-no" placeholder=""  onChange={this.onChangeHandler} />
							  </div>
							  <div className="col-md-1">
								<label for="landline_no">Landline</label>
							  </div>
							  <div className="col-md-5">
								<input type="text" className="form-control" name="landline_no"  id="landline"  placeholder="" onChange={this.onChangeHandler} />
							  </div>
							</div>
						  </div>
						  <div className="form-group">
							<div className="row">
							  <div className="col-md-1">
								<label for="profile_photo">Profile Img</label>
							  </div>
							  <div className="col-md-5">
								<input type="file" className="form-control" name="profile_photo"  id="u"  placeholder="" onChange={this.onChangeHandler} />
							  </div>
							  <div className="col-md-1">
								<label for="about_us">About Me</label>
							  </div>
							  <div className="col-md-5">
								<textarea type="text" className="form-control" name="about_us"  id="about_us-no"  placeholder="" onChange={this.onChangeHandler}></textarea>
							  </div>
							</div>
						  </div>
						</fieldset>
						<fieldset title="2">
						  <h4>Social Profiles</h4>
						  <div className="row m-t-20">
							<div className="col-sm-4">
							  <div className="form-group">
								<div className="input-group"> <span className="input-group-addon"><i className="mdi mdi-facebook"></i></span>
								  <input type="text" className="form-control" name="facebook_link"  placeholder="Facebook url" onChange={this.onChangeHandler}/>
								</div>
							  </div>
							</div>
							<div className="col-sm-4">
							  <div className="form-group">
								<div className="input-group"> <span className="input-group-addon"><i className="mdi mdi-linkedin"></i></span>
								  <input type="text" className="form-control" name="linkedin_link"  placeholder="Linkdin url" onChange={this.onChangeHandler}/>
								</div>
							  </div>
							</div>
							<div className="col-sm-4">
							  <div className="form-group">
								<div className="input-group"> <span className="input-group-addon"><i className="mdi mdi-twitter"></i></span>
								  <input type="text" className="form-control" name="twitter_link"  placeholder="Twitter url" onChange={this.onChangeHandler}/>
								</div>
							  </div>
							</div>
						  </div>
						</fieldset>
						<div className="col-md-12 text-right">
						  <button type="submit" className="btn btn-primary stepy-finish text-right" onClick={this.profileSubmit}>Submit</button>
						</div>
					  </div>
					  
						
						
		
        );
    }
}
export default connect(state=>({ userData: state.userData }))(ProfileInfo)