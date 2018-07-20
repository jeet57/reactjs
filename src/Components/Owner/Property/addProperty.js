import React from 'react'
import Header from '../Header/Header'
import {Link} from 'react-router-dom'
import API_URL from '../../../app-config';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
import swal from 'sweetalert';
class AddProperty extends React.Component{
  constructor(props){
    super(props)
    this.state={
		userInfo:props.userData,
      profileData:'',
      userData:Cookies.get('profile_data'),
      countries: [{ name: "Afghanistan" }],
      states: [],
      cities: [],
      loggedOwner:props.owner,
      isLoaded:true,
      countrySelected:'',
      formData:{
        "owner_id":"",
        "title":"",
        "address":"",
        "city":"",
        "state":"",
        "country":"",
        "zip_code":"",
        "property_type":"",
        "property_status":"",
        "description":" ",
        "geo_location":"",
        "square_feet":"",
        "bedroom":"",
        "bathroom":"",
        "total_amount":"",
        "advance":"",
        "owner_details":[
        {
        "owner_name":"",
        "address":"",
        "city":"",
        "state":"",
        "country":"",
        "zip_code":""
        },
        {
        "owner_name":"",
        "address":"",
        "city":"",
        "state":"",
        "country":"",
        "zip_code":""
        }],
        "img_path":[],
		"session_id":""
        }  
  }
  this.createProperty=this.createProperty.bind(this)
  this.onChangeHandler=this.onChangeHandler.bind(this)
  }  
  componentDidMount(){
        var $=window.$;
        $(".add-owner").click(function(){
            $(".owner-field").toggle();
        });    
        // if(this.state.isLoaded)                  
        // {
          // fetch('https://restcountries.eu/rest/v2/all')
                  // .then((response)=> {				
                    // response.json().then((data)=>{
                      // this.setState({countries:data,isLoaded:false})      
                    // })
                  // });
          
        // }   
        var that=this;
        
        // $("#filer_input1").filer({
          // limit: null,
          // maxSize: null,
          // extensions: null,
          // changeInput: '<label for="filer_input1"><div class="jFiler-input-dragDrop">\
                          // <div class="jFiler-input-inner">\
                            // <div class="jFiler-input-icon">\
                              // <i class="icon-jfi-cloud-up-o"></i>\
                            // </div>\
                            // <div class="jFiler-input-text">\
                              // <h3>Drag & Drop files here</h3>\
                               // <span style="display:inline-block; margin: 15px 0">or</span>\
                            // </div>\
                            // <a class="jFiler-input-choose-btn btn btn-custom waves-effect waves-light">Browse Files</a>\
                          // </div>\
                        // </div></label>',
          // showThumbs: true,
          // theme: "dragdropbox",
          // templates: {
              // box: '<ul class="jFiler-items-list jFiler-items-grid"></ul>',
              // item: '<li class="jFiler-item">\
                          // <div class="jFiler-item-container">\
                              // <div class="jFiler-item-inner">\
                                  // <div class="jFiler-item-thumb">\
                                      // <div class="jFiler-item-status"></div>\
                                      // <div class="jFiler-item-info">\
                                          // <span class="jFiler-item-title"><b title="{{fi-name}}">{{fi-name | limitTo: 25}}</b></span>\
                                          // <span class="jFiler-item-others">{{fi-size2}}</span>\
                                      // </div>\
                                      // {{fi-image}}\
                                  // </div>\
                                  // <div class="jFiler-item-assets jFiler-row">\
                                      // <ul class="list-inline pull-left">\
                                          // <li>{{fi-progressBar}}</li>\
                                      // </ul>\
                                      // <ul class="list-inline pull-right">\
                                          // <li><a class="icon-jfi-trash jFiler-item-trash-action"></a></li>\
                                      // </ul>\
                                  // </div>\
                              // </div>\
                          // </div>\
                      // </li>',
              // itemAppend: '<li class="jFiler-item">\
                              // <div class="jFiler-item-container">\
                                  // <div class="jFiler-item-inner">\
                                      // <div class="jFiler-item-thumb">\
                                          // <div class="jFiler-item-status"></div>\
                                          // <div class="jFiler-item-info">\
                                              // <span class="jFiler-item-title"><b title="{{fi-name}}">{{fi-name | limitTo: 25}}</b></span>\
                                              // <span class="jFiler-item-others">{{fi-size2}}</span>\
                                          // </div>\
                                          // {{fi-image}}\
                                      // </div>\
                                      // <div class="jFiler-item-assets jFiler-row">\
                                          // <ul class="list-inline pull-left">\
                                              // <li><span class="jFiler-item-others">{{fi-icon}}</span></li>\
                                          // </ul>\
                                          // <ul class="list-inline pull-right">\
                                              // <li><a class="icon-jfi-trash jFiler-item-trash-action"></a></li>\
                                          // </ul>\
                                      // </div>\
                                  // </div>\
                              // </div>\
                          // </li>',
              // progressBar: '<div class="bar"></div>',
              // itemAppendToEnd: false,
              // removeConfirmation: true,
              // _selectors: {
                  // list: '.jFiler-items-list',
                  // item: '.jFiler-item',
                  // progressBar: '.bar',
                  // remove: '.jFiler-item-trash-action'
              // }
          // },
          // dragDrop: {
              // dragEnter: null,
              // dragLeave: null,
              // drop: null,
          // },
          // uploadFile: {
              // url: "../plugins/jquery.filer/php/upload.php",
              // data: null,
              // type: 'POST',
              // enctype: 'multipart/form-data',
              // beforeSend: function(){},
              // success: function(data, el){
                  // var parent = el.find(".jFiler-jProgressBar").parent();
                  // el.find(".jFiler-jProgressBar").fadeOut("slow", function(){
                      // $("<div class=\"jFiler-item-others text-success\"><i class=\"icon-jfi-check-circle\"></i> Success</div>").hide().appendTo(parent).fadeIn("slow");
                  // });
              // },
              // error: function(el){
                  // var parent = el.find(".jFiler-jProgressBar").parent();
                  // el.find(".jFiler-jProgressBar").fadeOut("slow", function(){
                      // $("<div class=\"jFiler-item-others text-error\"><i class=\"icon-jfi-minus-circle\"></i> Error</div>").hide().appendTo(parent).fadeIn("slow");
                  // });
              // },
              // statusCode: null,
              // onProgress: null,
              // onComplete: null
          // },
      // files: [
        // {
          // name: "1.jpg",
          // size: 145,
          // type: "image/jpg",
          // file: "assets/images/small/img-1.jpg"
        // },
        // {
          // name: "2.jpg",
          // size: 145,
          // type: "image/jpg",
          // file: "assets/images/small/img-2.jpg"
        // }
      // ],
          // addMore: false,
          // clipBoardPaste: true,
          // excludeName: null,
          // beforeRender: null,
          // afterRender: null,
          // beforeShow: null,
          // beforeSelect: null,
          // onSelect: null,
          // afterShow: null,
          // onRemove: function(itemEl, file, id, listEl, boxEl, newInputEl, inputEl){
              // var file = file.name;
              // $.post('../plugins/jquery.filer/php/remove_file.php', {file: file});
          // },
          // onEmpty: null,
          // options: null,
          // captions: {
              // button: "Choose Files",
              // feedback: "Choose files To Upload",
              // feedback2: "files were chosen",
              // drop: "Drop file here to Upload",
              // removeConfirmation: "Are you sure you want to remove this file?",
              // errors: {
                  // filesLimit: "Only {{fi-limit}} files are allowed to be uploaded.",
                  // filesType: "Only Images are allowed to be uploaded.",
                  // filesSize: "{{fi-name}} is too large! Please upload file up to {{fi-maxSize}} MB.",
                  // filesSizeAll: "Files you've choosed are too large! Please upload files up to {{fi-maxSize}} MB."
              // }
          // }
      // });
	  this.Countries()
    }
    // onChangeHandler(e){
    //     this.setState({['formData.'+e.target.name]:e.target.value})
    // }
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
  
  onChangeHandler(e){
	 
    const formData=this.state.formData
    const ownerDetailObj={
      "owner_name":"jireh",
      "address":"test1",
      "city":"Bangalore",
      "state":"Karnataka",
      "country":"India",
      "zip_code":"560029"
    }
      if(e.target.name!="img_path"&&e.target.name!="owner_details"){
        if(e.target.name=="title")
			formData.title=e.target.value    
        else if(e.target.name=="address")
			formData.address=e.target.value
		else if(e.target.name=="country")
		{
			formData.country=e.target.value
			var SelectCountry = formData.country;
			this.stateLists(SelectCountry);
		}
		else if(e.target.name=="state")
		{
			formData.state=e.target.value
			var SelectState = formData.state;
			this.cityList(SelectState);
		}
        else if(e.target.name=="city")
			formData.city=e.target.value
       
       
        else if(e.target.name=="zip_code")
			formData.zip_code=e.target.value
        else if(e.target.name=="property_type")
			formData.property_type=e.target.value
        else if(e.target.name=="property_status")
			formData.property_status=e.target.value
        else if(e.target.name=="description")
			formData.description=e.target.value
        else if(e.target.name=="geo_location")
			formData.geo_location=e.target.value
        else if(e.target.name=="square_feet")
			formData.square_feet=e.target.value
        else if(e.target.name=="bedroom")
			formData.bedroom=e.target.value
        else if(e.target.name=="bathroom")
			formData.bathroom=e.target.value
        else if(e.target.name=="total_amount")
			formData.total_amount=e.target.value
        else if(e.target.name=="advance")
			formData.advance=e.target.value
		formData.session_id=JSON.parse(this.state.userData).session_id;
		formData.owner_id=JSON.parse(this.state.userData).assets_id;
      }                    
      else if(e.target.name!='img_path'){
        if(e.target.name==='owner_name')
          ownerDetailObj.owner_name=e.target.value
        else if(e.target.name==='address')
          ownerDetailObj.address=e.target.value
        else if(e.target.name==='city')
          ownerDetailObj.city=e.target.value
        else if(e.target.name==='state')
          ownerDetailObj.state=e.target.value
        else if(e.target.name==='country')
          ownerDetailObj.country=e.target.value
        else if(e.target.name==='pin_code')
          ownerDetailObj.pin_code=e.target.value
	  
		
        formData.owner_details.push(ownerDetailObj)
      }
      else{
        formData.img_path.push(e.target.value)
      }
	  
      this.setState({formData:formData})
	 
  }
  createProperty(){
    var opts=this.state.formData
	 console.log(this.state.formData);
    fetch(`${API_URL}assetsapi/add_property/`, {
    method: 'post',          
    body: JSON.stringify(opts)
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
    if(data.msg=="Property added successfully !!!")
      {
				swal("Assets Watch", data.msg);
				   	//this.props.history.replace('/my-property');
					
      }            
    });   
  }
    render(){
      // if(this.props.owner===undefined)
        // window.location.href='http://'+window.location.host
      const contries=this.state.countries
      var coptions=contries.map(function(item) {
        var selectValue='India'
        if(selectValue === item.name) {
          return <option selected value = {item.name} > {item.name} </option>;
        } else {
          return <option style={{color:'black'}} value = {item.name} > {item.name} </option>;
        }
  
      })
	 
        return(
          <div>            
            <Header name="property"  first_name={window.localStorage.getItem('firstName')} 
                last_name={window.localStorage.getItem('firstName')} />
            <div style={{marginTop:'3%',marginBottom:'6%'}} className="wrapper">
              <div className="container">                     
                <div className="page-title-box">
                    <div className="btn-group pull-right">
                        <ol className="breadcrumb hide-phone p-0 m-0">
                            <li><a href="my-property.html" className="btn btn-custom waves-light waves-effect w-md"><i className="fi-reply"></i>&nbsp;&nbsp;My Propertys</a></li>
                        </ol>
                    </div>
                    <h4 className="page-title">Add Property</h4>
                </div>                    
                <div className="row">
                  <div className="col-12">
                    <div className="card-box">                         
                    {/*<form method="post" className="form-horizontal">*/}
                      <div className="row">
                        <div className="col-md-8">
                            <div className="form-group row">
                              <label className="col-2 col-form-label">Owner 1</label>
                              <div className="col-8">
                                <input type="text" name="owner_id" value={this.props.owner_id} disabled className="form-control" />
                              </div>
                              <div className="col-md-2"> 
                                <a className="btn btn-custom waves-light waves-effect w-md add-owner">
                                Add Owner
                                </a> 
                              </div>
                            </div>
                            {/*add second owner*/}
                            <div  style={{display:'none'}} className="owner-field">
                              <div className="form-group row">
                                <label className="col-2 col-form-label">Owner 2</label>
                                <div className="col-10">
                                  <input name="owner_name" type="text" className="form-control" onChange={this.onChangeHandler} />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-2 col-form-label">Address</label>
                                <div className="col-10">
                                  <input name="address" type="text" className="form-control" onChange={this.onChangeHandler}/>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-2 col-form-label">Country</label>
                                <select className="form-control" name="country"  onChange={this.onChangeHandler} >
								  <option>Please select a country</option>
								  {this.state.countries.map((option, key) => (<option key={key.id} value={option.name}>{option.name}</option>))}
								 </select>
                                <label className="col-2 col-form-label">State</label>
                                <div className="col-4">
                                <select className="form-control" name="state"  onChange={this.onChangeHandler} >
								  <option>Please select a state</option>
								 {this.state.states?this.state.states.map((option, key) => (<option key={key.id} value={option.name}>{option.name}</option>)):''}
								</select>
                                </div>
                              </div>                                  
                              <div className="form-group row">    
								<label className="col-2 col-form-label">City</label>
                                <div className="col-4">
                                  <select className="form-control" name="city" onChange={this.onChangeHandler} >
								  <option>Please select a city</option>
								  {this.state.cities?this.state.cities.map((option, key) => (<option key={key.id} value={option.name}>{option.name}</option>)):''}
								 </select>
                                </div>
                                
                              
                                <label className="col-2 col-form-label">PIN Code</label>
                                <div className="col-4">
                                  <input name="pin_code" type="text" className="form-control" onChange={this.onChangeHandler} />
                                </div>
                              </div>
                            </div>

                            <div className="form-group row">
                              <label className="col-2 col-form-label">Property Title</label>
                              <div className="col-10">
                                <input name="title" onChange={this.onChangeHandler} type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="form-group row">
                              <label className="col-2 col-form-label">Address</label>
                              <div className="col-10">
                                <input type="text" name="address" className="form-control" onChange={this.onChangeHandler} />
                              </div>
                            </div>
                            <div className="form-group row">
							<label className="col-2 col-form-label">Country</label>
                              <div className="col-4">
                               <select className="form-control" name="country"  onChange={this.onChangeHandler} >
								  <option>Please select a country</option>
								  {this.state.countries.map((option, key) => (<option key={key.id} value={option.name}>{option.name}</option>))}
								 </select>
                              </div>
                              
                              <label className="col-2 col-form-label">State</label>
                              <div className="col-4">
                                <select className="form-control" name="state"  onChange={this.onChangeHandler} >
								  <option>Please select a state</option>
								 {this.state.states?this.state.states.map((option, key) => (<option key={key.id} value={option.name}>{option.name}</option>)):''}
								</select>
                              </div>
                            </div>
                            <div className="form-group row">
                              <label className="col-2 col-form-label">City</label>
                              <div className="col-4">
                                <select className="form-control" name="city" onChange={this.onChangeHandler} >
								  <option>Please select a city</option>
								  {this.state.cities?this.state.cities.map((option, key) => (<option key={key.id} value={option.name}>{option.name}</option>)):''}
								 </select>
                              </div>
                              <label className="col-2 col-form-label">PIN Code</label>
                              <div className="col-4">
                                <input type="text" className="form-control" name="zip_code" onChange={this.onChangeHandler} />
                              </div>
                            </div>
                            <div className="form-group row">
                              <label className="col-2 col-form-label">Property Type</label>
                              <div className="col-4">
                                <select className="form-control" name="property_type" onChange={this.onChangeHandler}>
                                  <option selected>Select</option>
                                  <option value="Private Apartment">Private Apartment</option>
								  <option value="Apartment">Apartment</option>
								  <option value="Flat">Flat</option>
                                  <option value="House">House</option>
                                </select>
                              </div>
                              <label className="col-2 col-form-label">Property Status</label>
                              <div className="col-4">
                                <select className="form-control" name="property_status" onChange={this.onChangeHandler}>
                                <option>Select</option>
                                  <option value="Rent">Rent</option>
                                  <option value="Sale">Sale</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-group row">
                              <label className="col-2 col-form-label">Description</label>
                              <div className="col-10">
                                <textarea id="elm1" name="description" onChange={this.onChangeHandler}></textarea>
                              </div>
                            </div>

							{ /* <div className="form-group row">
                              <label className="col-2 col-form-label">GEO Location</label>
                              <div className="col-10">
                                <div className="geo-loaction-mp">
                                  <div id="gmaps-basic" className="gmaps"></div>
                                </div>
                              </div>
						</div>*/}

                            <div className="form-group row">
                              <label className="col-2 col-form-label">Square Feet</label>
                              <div className="col-10">
                                <input name="square_feet" onChange={this.onChangeHandler} type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="form-group row">
                              <label className="col-2 col-form-label">Bedrooms</label>
                              <div className="col-4">
                                <input type="text" name="bedroom" onChange={this.onChangeHandler} className="form-control" />
                              </div>
                              <label className="col-2 col-form-label">Bathrooms</label>
                              <div className="col-4">
                                <input type="text" name="bathroom" className="form-control" onChange={this.onChangeHandler} />
                              </div>
                            </div>
                            <div className="form-group row">
                              <label className="col-2 col-form-label">Total Amount</label>
                              <div className="col-4">
                                <input type="text" className="form-control" name="total_amount" onChange={this.onChangeHandler}/>
                              </div>
                              <label className="col-2 col-form-label">Advance</label>
                              <div className="col-4">
                                <input type="text" className="form-control" name="advance" onChange={this.onChangeHandler} />
                              </div>
                            </div>
                        </div>                            
                        <div className="col-md-4">
                          <div className="autohide-scroll" style={{height:'500px'}}>
                            <div className="p-b-0">
                              <div className="form-group">
                                <div className="col-sm-12 padding-left-0 padding-right-0">
                                  <input style={{display:'none'}} type="file" name="img_path" onChange={this.onChangeHandler} id="filer_input1"
                                                            multiple="multiple"  />
                          {/* <label for="tttest">
                          <div class="jFiler-input-dragDrop">
                          <div class="jFiler-input-inner">
                            <div class="jFiler-input-icon">
                              <i class="icon-jfi-cloud-up-o"></i>
                            </div>
                            <div class="jFiler-input-text">
                              <h3>Drag & Drop files here</h3>
                               <span style={{display:'inline-block', margin:'15px 0'}}>or</span>
                            </div>
                            <a class="jFiler-input-choose-btn btn btn-custom waves-effect waves-light">Browse Files</a>
                          </div>
                        </div>
                        </label> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="row">
                            <div className="col-md-8"></div>
                            <div className="col-md-4 submit-btn">
                              <button type="button" onClick={this.createProperty} className="btn btn-success waves-effect w-md waves-light">Submit</button>
                              <button type="button" className="btn btn-secondary waves-effect w-md">Cancel</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*</form>*/}
                    </div>
                  </div>
                </div>
                {/* <!-- End row -->  */}
                
              </div>
              {/* <!-- end container -->  */}
            </div>
          </div>
          );
    }
}
export default connect(state=>({ userData: state.userData, userProfile: state.userProfile }))(AddProperty)