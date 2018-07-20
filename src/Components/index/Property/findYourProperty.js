import React from 'react'
// import jQuery from 'jquery'

export default class FindYourProperty extends React.Component{
  constructor(props){
    super(props)
    this.state={
    keyword:'',
    city:'',
    property_type:'',
    property_status:'',
    area:'',
    min_price:'',
    max_price:'',
    status:''
    }
    this.onChangeHandler=this.onChangeHandler.bind(this);
    this.searchPropertys=this.searchPropertys.bind(this)
  }
  onChangeHandler(e){
      this.setState({[e.target.name]:e.target.value})
  }
  searchPropertys(){
    var opts=this.state
    fetch('assetsapi/property_search', {
    method: 'post',    
    body: JSON.stringify(opts)
  }).then(function(response) {
    return response.json();
  }).then(function(data) {
    if(data.success===1)
    {
      console.log(data);    
      window.location.href='http://'+window.location.hostname+':'+window.location.port+'/property-detail'
      // window.location.pathname="/property-detail"
      
      // <Redirect to={{pathname:'/property-detail'}} />
    }    
  });
}
 	render(){
 		return(
    <div className="form" action="property.html" method="POST" >
      <div className="tz-form-search">
        <div className="col-md-12 col-sm-12 col-xs-12 text-center">
          <h5 className="search-header">Find your property</h5>
        </div>
        <div className="col-md-3 col-sm-3 col-xs-12">
          <label>KEY WORD</label>
          <input type="text" onChange={this.onChangeHandler}  id="keyword1" name="keyword" placeholder="Enter your keyword..."   />
        </div>
        <div className="col-md-3 col-sm-3 col-xs-12 location">
          <label>LOCATION</label>
          <input type="text" onChange={this.onChangeHandler} className="cbp-search-input " id="address" name="city" placeholder="City"  />
          <input type="hidden" id="latitude" name="latitude" value="" />
          <input type="hidden" id="longitude" name="longitude" value="" />
        </div>
        <div className="col-md-3 col-sm-3 col-xs-12 type tz-select">
          <label>PROPERTY TYPE</label>
          <select onChange={this.onChangeHandler} name="property_type" className="cbp-search-select">
            <option selected="" value="">Type</option>
            <option value="for-rent">Privat Apartment</option>
            <option value="for-sale">Apartment</option>
            <option value="house">House</option>
            <option value="property">Flat</option>
          </select>
        </div>
        <div className="col-md-3 col-sm-3 col-xs-12 status tz-select">
          <label>PROPERTY STATUS</label>
          <select onChange={this.onChangeHandler} name="property_type" className="cbp-search-select">
            <option value="">Status</option>
            <option value="For Rent">For Rent</option>
            <option value="For Sale">For Sale</option>
            <option value="Sold">Sold</option>
            <option value="Rented">Rented</option>
          </select>
        </div>
        <div  id="text">
          <div className="col-md-3 col-sm-3 col-xs-12 key">
            <label>Area</label>
            <input type="text" onChange={this.onChangeHandler} className="cbp-search-input tz-pro-search-input" id="keyword" name="area" placeholder="Sq Ft" value="" />
          </div>
          <div className="col-md-3 col-sm-3 col-xs-12 key">
            <label>Min Price</label>
            <input type="text" className="cbp-search-input tz-pro-search-input" id="keyword" name="min_price" placeholder="Min Price" value="" />
          </div>
          <div className="col-md-3 col-sm-3 col-xs-12 key">
            <label>Max Price</label>
            <input type="text" className="cbp-search-input tz-pro-search-input" id="keyword" name="max_price" placeholder="Max Price" value="" />
          </div>
        </div>
        <div className="col-md-9 col-sm-9 col-xs-12"></div>
        <div className="col-md-3 col-sm-3 col-xs-12 advance-serch tz-search-right">
        <a id="toggle">Advance Search</a>
          </div>
        <div className="col-md-3 col-sm-3 col-xs-12 tz-search-right">
          <button  id="submit" name="submit" onClick={this.searchPropertys} className="btn btn-default tz-pro-search-btn">Search </button>
        </div>
      </div>
    </div>);
 	}
 }