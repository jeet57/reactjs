import React from 'react';
import { connect } from 'react-redux';
import vn from '../../../images/vn.png'
import us from '../../../images/us.png'
import fr from '../../../images/fr.png'
import swal from 'sweetalert';

import $ from 'jquery'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import {Redirect,Route} from 'react-router-dom'
import API_URL from '../../../app-config';
import { setUser } from '../../../actions';
import Cookies from 'js-cookie';

class Headernav extends React.Component {
    constructor(props){
        super(props)

        this.owner=React.createRef();
        this.agent=React.createRef();
        this.tenants=React.createRef();
        this.activeSignIn=this.activeSignIn.bind(this);
        this.Login=this.Login.bind(this)
        this.state={
          email:'',
          password:'',
          flag:false
        }

        this.onChangeHandler=this.onChangeHandler.bind(this);
        this.activeSignIn=this.activeSignIn.bind(this)
        this.Login=this.Login.bind(this)
    }
    
    onChangeHandler(e){
          this.setState({[e.target.name]:e.target.value})
      }
    Login() {
        // console.log(JSON.stringify(store.getState()))
        var _that=this
        var opts=this.state;
        var $=window.$;
        var Data;
        fetch(`${API_URL}assetsapi/login/`, {
            method: 'post',
            body: JSON.stringify(opts)
        }).then((response)=> {
            response.json().then(data=>{
         // console.log("data 1st: "+JSON.stringify(data))
                if(data.msg==="Invalid Email or Password") {
                  //  console.log(data.msg)
                    swal("Assets Watch", data.msg);
                    $(".login-open").fadeToggle();
                } else{
                    setTimeout(()=>{

                    fetch(`${API_URL}assetsapi/profile/${data.userdata.assets_id}/${data.userdata.session_id}`, {
                        method: 'get'
                    })
                    .then(res => res.json())
                    .then(
                      (result) => {
                        //console.log("data 2: "+JSON.stringify(result))
                        if (result.success) {
                           // alert('profile:'+JSON.stringify(result.profile)+""+JSON.stringify(data.userdata.agentType));
                            localStorage.setItem('firstName',JSON.stringify(result.profile.first_name))
                            localStorage.setItem('lastName',JSON.stringify(result.profile.last_name))
                            this.props.setUser(data.userdata, result.profile);
                            Cookies.set("profile_data", data.userdata);

                            if(result.profile.assets_type==="1"){
                             this.props.history.push('/user')
                            }else if(result.profile.assets_type==="2"){
                                if(data.userdata.agentType==="Broker")
                                {
                                    this.props.history.push('/agent-broker')
                                }
                                else{
                                    this.props.history.push('/agent-serviceprovider')
                                }
                               
                            }else{
                                
                                this.props.history.push('/tenant')
                            }
                        } else {
                            this.props.setUser(data.userdata, result.profile);
                            // console.log(result.msg);
                        }
                        // this.props.updateInfo(result.profile)
                      },
                      // Note: it's important to handle errors here
                      // instead of a catch() block so that we don't swallow
                      // exceptions from actual bugs in components.
                      (error) => {
                        console.log('error')
                      }
                    )
                }, 1000)
                }
            })
        })
      }
      activeSignIn(actionId){
        if(actionId==="agent")
        {
            if(!this.state.flag){
                if(window.location.pathname==="/"||window.location.pathname==="/Home"||window.location.pathname==="/index")
                document.getElementById('loginDiv').setAttribute('style','left:15%')
                else
                document.getElementById('loginDiv').setAttribute('style','left:15%')
                $(".login-open").fadeToggle();
                this.setState({flag:true,flag1:false,flag2:false})
            }
            else{
                $(".login-open").hide();
                this.setState({flag:false,flag1:false,flag2:false})
            }

        }
        else if(actionId==="tenant")
        {
            if(!this.state.flag1)
            {
                if(window.location.pathname==="/"||window.location.pathname==="/Home"||window.location.pathname==="/index")
                document.getElementById('loginDiv').setAttribute('style','left:30%')
                else
                document.getElementById('loginDiv').setAttribute('style','left:30%')
                $(".login-open").fadeToggle();
                this.setState({flag1:true,flag:false,flag2:false})
            }
            else{
                $(".login-open").hide();
                this.setState({flag:false,flag1:false,flag2:false})
            }
        }
        else{

            if(!this.state.flag2)
            {
                if(window.location.pathname==="/"||window.location.pathname==="/Home"||window.location.pathname==="/index")
                document.getElementById('loginDiv').setAttribute('style','left:0')
                else
                document.getElementById('loginDiv').setAttribute('style','left:0')
                $(".login-open").fadeToggle();
                this.setState({flag2:true,flag:false,flag1:false})
            }
            else{
                $(".login-open").hide();
                this.setState({flag:false,flag1:false,flag2:false})
            }
        }
      }

    render(){
        return(
            <div className="">
        <div className="pull-right">
        <a className= "typeli login" id="owner"   onClick={()=>this.activeSignIn("owner")}>Owners<span></span></a>
            <div id="loginDiv" className="login-1 text-left  login-open">
            <form className="form-signin">
                <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" onChange={this.onChangeHandler} name="email" placeholder="Email Address"/>
                </div>
                <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" onChange={this.onChangeHandler} name="password" placeholder="Password"/>
                </div>
                <div className="remember-checkbox">
                <input type="checkbox" name="one" id="one" />
                <label className="remember" htmlFor="one">Remember me</label>
                </div>
                <a onClick={this.Login} className="button"> <span>Login</span> </a> <span>-or-</span>
                {/*need to add router link*/}
                <Link to={{pathname:'/register'}} className="button button-grey"> <span>Register</span> </Link>
                <a>Forgot password ?</a>
            </form>
            <div className="login-with">
                <span>Login With: </span>
                <a className="fb"><i className="fa fa-facebook"></i></a>
                <a className="twitter"><i className="fa fa-twitter"></i></a>
                <a className="google-plus"><i className="fa fa-google-plus"></i></a>
                <a className="linkedin"><i className="fa fa-linkedin"></i></a>
            </div>
            </div>

            <a className="typeli login" id="agent" onClick={()=>this.activeSignIn("agent")}>Agents<span></span></a>
            <a className="typeli login" id="tenant" onClick={()=>this.activeSignIn("tenant")}>Tenants<span></span></a>
        </div>
        <div className="tz-header-wpml pull-right">
            <div id="lang_sel">
                <ul>
                    <li> <a className="lang_sel_sel icl-en"> USA
                    <img className="iclflag" width="18" height="12" alt="en" src={us} /> </a>
                    {/* <ul>
                        <li className="icl-vi"> <a>
                            Viet Nam
                            <img className="iclflag" title="Viet Nam" width="18" height="12" alt="ru" src={vn} /> </a> </li>
                        <li className="icl-fr">
                             <a> French
                                 <img className="iclflag" title="French" width="18" height="12" alt="en" src={fr} /> </a> </li>
	</ul>*/}
                    </li>
                </ul>
            </div>
    </div>
    </div>
    );
    }
}

export default withRouter(connect(state=>({ userData: state.userData }), { setUser })(Headernav));
