import React from 'react';
import './signup.css'
import mailIcon from '../../assets/icons/mail.svg';
// import mailWhiteIcon from '../../assets/icons/mail white.svg';
import lockIcon from '../../assets/icons/lock.svg';
import Bacteria from '../../assets/icons/bacteria.svg'

import { withRouter } from 'react-router-dom';
import $ from 'jquery';
// import lockWhite from '../../assets/icons/lock white.svg';

class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            "username": "",
            "password": "",
            "error": "",
            "isSignedUp": false
        }
    }
    getEmail = event => {
        this.setState ({
            "username": event.target.value,
            "error": ''
        });
    }

    getPassword = event => {
        this.setState({
            "password": event.target.value,
            "error": ''
        });
    }
    signUpUser = () => {
        console.log('called');
        if((this.checkEmail()) && (this.state.password !== undefined )&& (this.state.password !== '')){
            console.log("welcome");
            //this.props.username = this.state.username;
        }
        else{
            this.setState({
                "error":"Invalid email or password!"
            });
            setTimeout(() => {
                console.log(this.state.error)
            }, 500);
            // setInterval( ()=>
            //  {
            //     if(this.state.error){
                   
            //     }
            //  }, 1000);
            
        }
        this.props.history.push('/home')
    }

    checkEmail = () =>{
        if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.username)) { 
            return true;
         }
         else{
             return false;
         }
    }
    componentDidMount(){
        $("input").on("focus", function()  {
            $(this).parent("div").addClass("focused")
        });
        $("input").on("focusout", function()  {
            $(this).parent("div").removeClass("focused")
        });
    }
    goToSignup = () => {
        this.props.history.push('/Login')
    }
    
    render(){
        return (
            <div className="container p-5">
            <div className="row rounded border">
                <div className="col-md-6 pl-0 pr-0">
                    <div className="login-form-container d-flex flex-column align-items-center h-100">
                        <div className="center-form d-flex flex-column justify-content-center h-100">
                            <div className="form-heading">
                                Sign Up
                            </div>
                            <div className="form-sub-heading mt-2">
                                Sign up to continue to the application
                            </div>
                            <div className="input-element mt-3">
                                <input type="text" placeholder="email" value={this.state.username} onChange={this.getEmail}/>
                                <img src={mailIcon} alt="icon"/>
                            </div>
                            <div className="input-element mt-2">
                                <input type="password" placeholder="password" value={this.state.password} onChange={this.getPassword}/>
                                <img src={lockIcon} alt="icon"/>
                            </div>
                            <div className="mt-3">
                                <button className="btn link-btn w-100" onClick={() => this.signUpUser()}>Sign up</button>
                            </div>
                            <div className="link-nav" onClick={() => this.goToSignup()}>
                                Already Having An Account? Sign In
                            </div>
                            <span style={{color: "red", marginTop: "1rem"}}>{this.state.error? this.state.error : ""}</span>

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
        );
    }
}

export default withRouter(Signup);