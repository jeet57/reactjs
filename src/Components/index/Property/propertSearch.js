import React from 'react'
// import img7 from '../../../images/girls_PNG6463-1.png'
// import img8 from '../../../images/young-businessman-2.png'
import '../../../css/propertdetails.css'
// import $ from 'jquery'
// import { Redirect } from 'react-router'
import API_URL from '../../../app-config';

export default class PropertySearch extends React.Component{
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
    console.log('nnooo')
    var opts=this.state
       if(this.state.property_status!=='')
    fetch(`${API_URL}assetsapi/property_search`, {
      method: 'POST',    
      body: JSON.stringify(opts)
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      if(data.success===1)
      {
        console.log(data);
        debugger;

        // this.props.updatePropertyGrid(data)
        window.location.href='http://'+window.location.hostname+':'+window.location.port+'/property-detail'
        // window.location.pathname="/property-detail"
        
        // <Redirect to={{pathname:'/property-detail'}} />
      }    
  });
}
  
  componentDidMount(){
    var $=window.$;
    setTimeout(function(){ $('#tzloadding').remove(); }, 2000);

    $('html, body').animate({scrollTop: 0}, 1500);        
  }
	render(){  
		return(        
      <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12 tz-sidebar-right">
          <div>
            <div className="search-border">
              <div>
                <h5>Search properties<i className="icon-magnifier"></i></h5>
              </div>
              <div className="form">
                <div>
                  <input onChange={this.onChangeHandler} type="text" className="cbp-search-input" id="keyword" name="keyword"  placeholder="Enter your keyword..." />
                </div>
                <div>
                  <input onChange={this.onChangeHandler} type="text" className="cbp-search-input " id="address" name="address"  placeholder="City" />
                  <input type="hidden" id="latitude" name="latitude" />
                  <input type="hidden" id="longitude" name="longitude" />
                </div>
                <div>
                  <label>
                    <select name="property_status" onChange={this.onChangeHandler} className="cbp-search-select">
                      <option>Type</option>
                      <option  value="house" >House</option>
                      <option  value="flat" >Flat</option>
                    </select>
                  </label>
                </div>
                <div>
                  <label>
                    <select name="property_type" onChange={this.onChangeHandler} className="cbp-search-select">
                      <option  value="">Status</option>
                      <option  value="Rent">Rent</option>
                      <option  value="Sale">Sale</option>
                      <option  value="Sold">Sold</option>
                      <option  value="Rented">Rented</option>
                    </select>
                  </label>
                </div>
                <div>
                  <input type="text" onChange={this.onChangeHandler} className="cbp-search-input" id="area" name="area"  placeholder="Min Area (Sq Ft)" />
                </div>
                <div>
                  <input type="text" className="cbp-search-input" onChange={this.onChangeHandler} id="min_price" name="min_price"  placeholder="Min Price" />
                </div>
                <div>
                  <input type="text" className="cbp-search-input" onChange={this.onChangeHandler} id="max_price" name="max_price"  placeholder="Max Price" />
                </div>
                <div>
                  <button type="submit" onClick={this.searchPropertys} name="submit"  className="btn btn-default ">Search </button>
                </div>
              </div>
            </div>
          </div>
           <aside id="tzour_agent-2" className="widget_tzour_agent widget">
            <h3 className="module-title title-widget"><span>Our Agent</span></h3>
            <div className="tzwidget-agent">
              <div className="tz-property-author agent-list">
              {this.props.ownerDetails.map(owner=>(                  

                      <div className="tz-author-item">
                    <div className="tz-thumbnail"> <a> 
                    <img src={API_URL+'assetsadmin/'+owner.img_path} className="home-img wide tall" alt="" width="260" height="420" /> </a> </div>
                    <div className="tz-author-content">
                      <div className="tz-property-author-title">
                        <div className="tz-width-60 text-left pull-left">
                          <h4><a>{owner.owner_name}</a></h4>
                          <p>7&nbsp;Properties</p>
                        </div>
                        <div className="tz-width-40 text-right pull-right">
                          <div className="TzSocialLink"> 
                          <a> <i className="fa fa-linkedin"></i> </a> 
                          <a > <i className="fa fa-google-plus"></i> </a> 
                          <a> <i className="fa fa-twitter"></i> </a>
                           <a> <i className="fa fa-facebook"></i> </a> </div>
                        </div>
                      </div>
                      <div className="tz-property-author-info"> <span> <i className="icon-smartphone"></i> 0123-456-789 </span> <span> <i className="icon-envelope-open"></i> info@agent.com </span> </div>
                    </div>
                  </div>
                  
                ))}
              </div>
            </div>
          </aside>
        </div>);
	}
}