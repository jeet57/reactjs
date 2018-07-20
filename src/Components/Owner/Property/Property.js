import React from 'react'
// import property_1 from '../../../images/Owner/property/property-01.jpg'
import img_1 from '../../../images/Owner/property/img.jpg'
import Header from '../Header/Header'
import {Link} from 'react-router-dom'
import API_URL from '../../../app-config';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
class Property extends React.Component{
    constructor(props){
        super(props)
        this.imgServer=API_URL+'assetsadmin/',
        this.state = {
            flag:true,
			userInfo:props.userData,
			  userData:Cookies.get('profile_data'),
			  profileData:'',
            property:[{
                "id":"1",
                "owner_id":"2",
                "title":"prop1",
                "description":"This owner built home was created to cater for every possible family need without quality compromise. Every living space has been ",
                "address":"madiwala",
                "city":"Bangalore",
                "state":"Karnataka",
                "country":"India",
                "zip_code":"560029",
                "property_type":"Flat",
                "property_status":"Sale",
                "geo_location":"https://maps.google.com/maps?q=8600%20Blair%20St,%20Leeds,%20AL%2035094,%20USA&ie=UTF8&&output=embed",
                "owner_details":[
                    {
                        "id":"1",
                        "property_id":"1",
                        "owner_name":"jireh",
                        "address":"test",
                        "city":"Bangalore",
                        "state":"Karnataka",
                        "country":"India",
                        "pin_code":"560029"
                    },{
                        "id":"2",
                        "property_id":"1",
                        "owner_name":"jireh123",
                        "address":"test",
                        "city":"Bangalore",
                        "state":"Karnataka",
                        "country":"India",
                        "pin_code":"560029"
                    }
                    ],
                    "img_path":[
                        {"id":"1",
                        "property_id":"1",
                        "img_path":"/uploads/Tulips.jpg"
                    },
                        {
                            "id":"2",
                            "property_id":"1",
                            "img_path":"/uploads/Tulips.jpg"
                        }
                    ]
            }],
            loggedOwner:props.owner,
            owner_id:props.owner_id
            }
        this.getPropertiesByType=this.getPropertiesByType.bind(this)
        this.deleteProperty=this.deleteProperty.bind(this)
    }
    componentDidMount(){
        if(this.state.flag)
        {
            this.getPropertiesByType("Rent")
        }


        // if(this.state.flag)
        // fetch('assetsapi/property/')
		// .then((response)=> {				
		// 	response.json().then((data)=>{
		// 		this.setState({property:data.property,flag:false})
		// 		console.log(this.state.properties)
		// 	})
		// });
		fetch(`${API_URL}assetsapi/property_by/${JSON.parse(this.state.userData).assets_id}/${JSON.parse(this.state.userData).session_id}`, {
		  method: 'get'
		})
		.then(res => res.json())
		.then(
		  (data) => {
			//console.log("data 2: "+JSON.stringify(result.profile))
			if (data.success) {
			  this.setState({property:data.property})
			  //console.log(this.state.statics);
			} 
			//console.log("set user data"+JSON.stringify(this.state.profileData))
		  },
		(error) => {
		  console.log('error')
		}
	  )

    }
    getPropertiesByType(type){
//         var opts={"property_status":type}
//         var temp=[]
//         fetch('assetsapi/property_search', {
//                 method: 'post',    
//                 body: JSON.stringify(opts)
//             })
//             .then(res => res.json())
//             .then(json =>{    
//                 json.value.forEach(element => {
//                 var tmp={};
//                 tmp=element
//                 temp.push(tmp);
//             });                                                                                   
//             this.setState({property:temp,flag:false})             
//    });   
    }
    deleteProperty=(id)=>(e)=>{
        // if(window.confirm('Do you want to delete property..?'))
        // {
        // const properties=this.state.property;
        // var tempProperty=[]
        // var opts={'property_id':id}
        // fetch('assetsapi/delete_property',{
        //     method: 'post',          
        //     body: JSON.stringify(opts)
        //     })
        //     .then(res => res.json())
        //     .then(json =>{ 
        //         if(json.msg==="Property deleted successfully !!!")  
        //         {
        //             properties.forEach(propr=>{
        //                 if(propr.id!==id)
        //                 tempProperty.push(propr)                    
        //             })
        //             this.setState({property:tempProperty})
        //         }
                
        //      })
        // }
    }
    render(){
        const imgSer=this.imgServer
        // if(this.props.owner===undefined)
        // window.location.href='http://'+window.location.host
        return(
            <div>
                {/*<Header name="property" />*/}
                <Header logoutLink={this.logoutLink} 
                name="property" 
                first_name={window.localStorage.getItem('firstName')} 
                last_name={window.localStorage.getItem('firstName')} />
                <div  style={{marginTop:'3%',marginBottom:'3%'}} className="wrapper">
                <div className="container">                     
                <div className="page-title-box">
                <div className="btn-group pull-right">
                    <ol className="breadcrumb hide-phone p-0 m-0">
                    <li><Link to={{pathname:'/add-property'}} className="btn btn-custom waves-light waves-effect w-md"><i className="fi fi-circle-plus"></i>&nbsp;&nbsp;Add Property</Link></li>
                    </ol>
                </div>
                <h4 className="page-title">My Propertys</h4>
                </div>
                    <div className="row">
                    <div className="col-sm-12">
                        <div className="card-box">
                        <div className="table-responsive">
                            <table className="table table-hover m-0 table-actions-bar">
                            <thead>
                                <tr>
                                <th> <i className="fi fi-image"></i> </th>
                                <th>Title</th>
                                <th>Location</th>
                                <th>Property Status</th>                                
                                <th>Status</th>
                                <th>Posted Date</th>
                                <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.property.map(element=>(
                                    <tr>
                                        <td>
                                            <img src={(element.img_path&&element.img_path.length>0)?img_1:imgSer+element.img_path[0].img_path} alt="contact-img" title="contact-img" className="rounded-circle property-img" />
                                        </td>
                                        <td><h5 className="m-b-0 m-t-0 font-600">{element.title}</h5></td>
                                        {/* <td><i className="mdi mdi-map-marker text-primary"></i> #0,22ndFloor,27th Main NewYork </td> */}
                                        <td><i className="mdi mdi-map-marker text-primary"></i>{element.address}</td>
                                        {/*<td><i className="mdi mdi-currency-usd text-warning"></i> 2333 </td>*/}
                                        <td>{element.property_type}</td>
                                        {/* <td><i className="mdi mdi-currency-usd text-warning"></i> 366 </td> */}
                                        <td><i></i> {element.property_status}</td>
                                        <td><i></i> 28/02/2018 </td>
                                        <td>
                                            <a  className="table-action-btn">
                                                <i className="mdi mdi-pencil"></i>
                                            </a> 
                                            <a  className="table-action-btn">
                                                <i className="mdi mdi-eye"></i>
                                            </a>
                                            <a onClick={this.deleteProperty(element.id)} id={element.id} className="table-action-btn">
                                                <i style={{cursor:'pointer'}} className="mdi mdi-close"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    ))
                                }
                                
                                {/* <tr>
                                <td><img src={img_1} alt="contact-img" title="contact-img" className="rounded-circle property-img" /></td>
                                <td><h5 className="m-b-0 m-t-0 font-600">Real Property Investment</h5></td>
                                <td><i className="mdi mdi-map-marker text-primary"></i> #0,22ndFloor,27th Main NewYork </td>
                                <td><i className="mdi mdi-currency-usd text-warning"></i> 2333 </td>
                                <td><i className="mdi mdi-currency-usd text-warning"></i> 366 </td>
                                <td><i></i> Pending </td>
                                <td><i></i> 28/02/2018 </td>
                                <td><a  className="table-action-btn"><i className="mdi mdi-pencil"></i></a> <a  className="table-action-btn"><i className="mdi mdi-eye"></i></a> <a  className="table-action-btn"><i className="mdi mdi-close"></i></a></td>
                                </tr>
                                <tr>
                                <td><img src={img_1} alt="contact-img" title="contact-img" className="rounded-circle property-img" /></td>
                                <td><h5 className="m-b-0 m-t-0 font-600">Real Property Investment</h5></td>
                                <td><i className="mdi mdi-map-marker text-primary"></i>#0,22ndFloor,27th Main NewYork </td>
                                <td><i className="mdi mdi-currency-usd text-warning"></i> 2333 </td>
                                <td><i className="mdi mdi-currency-usd text-warning"></i> 366 </td>
                                <td><i></i>Pending </td>
                                <td><i></i> 28/02/2018 </td>
                                <td><a  className="table-action-btn"><i className="mdi mdi-pencil"></i></a> <a  className="table-action-btn"><i className="mdi mdi-eye"></i></a> <a  className="table-action-btn"><i className="mdi mdi-close"></i></a></td>
                                </tr>
                                <tr>
                                <td><img src={img_1} alt="contact-img" title="contact-img" className="rounded-circle property-img" /></td>
                                <td><h5 className="m-b-0 m-t-0 font-600">Real Property Investment</h5></td>
                                <td><i className="mdi mdi-map-marker text-primary"></i> #0,22ndFloor,27th Main NewYork </td>
                                <td><i className="mdi mdi-currency-usd text-warning"></i> 2333 </td>
                                <td><i className="mdi mdi-currency-usd text-warning"></i> 366 </td>
                                <td><i></i> Pending </td>
                                <td><i></i> 28/02/2018 </td>
                                <td><a  className="table-action-btn"><i className="mdi mdi-pencil"></i></a> <a  className="table-action-btn"><i className="mdi mdi-eye"></i></a> <a  className="table-action-btn"><i className="mdi mdi-close"></i></a></td>
                                </tr>
                                <tr>
                                <td><img src={img_1} alt="contact-img" title="contact-img" className="rounded-circle property-img" /></td>
                                <td><h5 className="m-b-0 m-t-0 font-600">Real Property Investment</h5></td>
                                <td><i className="mdi mdi-map-marker text-primary"></i> #0,22ndFloor,27th Main NewYork </td>
                                <td><i className="mdi mdi-currency-usd text-warning"></i> 2333 </td>
                                <td><i className="mdi mdi-currency-usd text-warning"></i> 366 </td>
                                <td><i></i> Pending </td>
                                <td><i></i> 28/02/2018 </td>
                                <td><a  className="table-action-btn"><i className="mdi mdi-pencil"></i></a> <a  className="table-action-btn"><i className="mdi mdi-eye"></i></a> <a  className="table-action-btn"><i className="mdi mdi-close"></i></a></td>
                                </tr>
                                <tr>
                                <td><img src={img_1} alt="contact-img" title="contact-img" className="rounded-circle property-img" /></td>
                                <td><h5 className="m-b-0 m-t-0 font-600">Real Property Investment</h5></td>
                                <td><i className="mdi mdi-map-marker text-primary"></i> #0,22ndFloor,27th Main NewYork </td>
                                <td><i className="mdi mdi-currency-usd text-warning"></i> 2333 </td>
                                <td><i className="mdi mdi-currency-usd text-warning"></i> 366 </td>
                                <td><i></i> Pending </td>
                                <td><i></i> 28/02/2018 </td>
                                <td><a  className="table-action-btn"><i className="mdi mdi-pencil"></i></a> <a  className="table-action-btn"><i className="mdi mdi-eye"></i></a> <a  className="table-action-btn"><i className="mdi mdi-close"></i></a></td>
                                </tr>
                                <tr>
                                <td><img src={img_1} alt="contact-img" title="contact-img" className="rounded-circle property-img" /></td>
                                <td><h5 className="m-b-0 m-t-0 font-600">Real Property Investment</h5></td>
                                <td><i className="mdi mdi-map-marker text-primary"></i> #0,22ndFloor,27th Main NewYork </td>
                                <td><i className="mdi mdi-currency-usd text-warning"></i> 2333 </td>
                                <td><i className="mdi mdi-currency-usd text-warning"></i> 366 </td>
                                <td><i></i> Pending </td>
                                <td><i></i> 28/02/2018 </td>
                                <td><a  className="table-action-btn"><i className="mdi mdi-pencil"></i></a> <a  className="table-action-btn"><i className="mdi mdi-eye"></i></a> <a  className="table-action-btn"><i className="mdi mdi-close"></i></a></td>
                                </tr> */}
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* <!-- end row --> */}
                    
                    <div className="row">
                    <div className="col-sm-12"> </div>
                    </div>
                    {/* <!-- end Panel -->  */}
                    
                </div>
                {/* <!-- end container -->  */}
                </div>
            </div>
        );
    }
}
export default connect(state=>({ userData: state.userData, userProfile: state.userProfile }))(Property)