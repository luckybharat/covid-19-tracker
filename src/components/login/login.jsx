import React from 'react'
import './login.css'
import mailIcon from '../../assets/icons/mail.svg';
// import mailWhiteIcon from '../../assets/icons/mail white.svg';
import lockIcon from '../../assets/icons/lock.svg';
// import lockWhite from '../../assets/icons/lock white.svg';
import Bacteria from '../../assets/icons/bacteria.svg'
import {withRouter} from 'react-router-dom';
import $ from 'jquery';
class Login extends React.Component{
    componentDidMount(){
        $("input").on("focus", function()  {
            $(this).parent("div").addClass("focused")
        });
        $("input").on("focusout", function()  {
            $(this).parent("div").removeClass("focused")
        });
    }
    goToSignup = () => {
        this.props.history.push("/Sign-up")
    }
    render(){
        return (
            <div className="container p-5">
            <div className="row rounded border">
                <div className="col-md-6 pl-0 pr-0">
                    <div className="login-form-container d-flex flex-column align-items-center h-100">
                        <div className="center-form d-flex flex-column justify-content-center h-100">
                            <div className="form-heading">
                                Sign In
                            </div>
                            <div className="form-sub-heading mt-2">
                                Sign in to continue to the application
                            </div>
                            <div className="input-element mt-3">
                                <input type="text" placeholder="email"/>
                                <img src={mailIcon} alt="icon"/>
                            </div>
                            <div className="input-element mt-2">
                                <input type="password" placeholder="password"/>
                                <img src={lockIcon} alt="icon"/>
                            </div>
                            <div className="mt-3">
                                <button className="btn link-btn w-100">Sign in</button>
                            </div>
                            <div className="link-nav" onClick={() => this.goToSignup()}>
                                Need An Account? Click Here
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 pl-0 pr-0">
                    <div className="img-bg d-flex flex-column align-items-center justify-content-center">
                        <div className="create-round">
                            <img src={Bacteria} className="img-logo" alt=""/>
                            
                        </div>
                        <div className="mt-2" style={{fontSize: "2rem", color: "#FFF"}}>CoronVirus Tracking System</div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default withRouter(Login);