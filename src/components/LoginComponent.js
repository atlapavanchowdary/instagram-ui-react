import React from "react";
import './Indexcomponent.css';
import instatitle from "../assets/images/Instagram title.png";
import fbimg from "../assets/images/fb.PNG";
import apple from "../assets/images/Apple store.png";
import google from "../assets/images/Google Play.png";

export function LoginComponent() {
    return (
        <div>
            <div className="col">
                <div className="row-lg-6">
                <div className="card1">
                    <div className="card">
                        <div className="card-body">

                            <div>
                                <img src={instatitle} alt="" id="t1"></img>
                            </div>

                            <div>
                                <input type="text" placeholder="Phone number, username, or email" id="txtb1"></input>
                            </div>

                            <div>
                                <input type="password" placeholder="Password" id="txtb2"></input>
                            </div>

                            <div>
                                <button className="btn">Log In</button>
                            </div>

                            <div className="d-flex">
                                <div className="line-1"></div>
                                <div id="linesep">OR</div>
                                <div className="line-2"></div>
                            </div>

                            <div className="d-flex">
                                <img src={fbimg} alt="" id="f1"></img>
                                <h6 id="cm1">Log in with Facebook</h6>
                            </div>

                            <div id="ps1">Forgot password?</div>

                        </div>
                        </div>
                    </div>
                </div>

                <div className="row-lg-6 mt-3">
                    <div className="card">
                        <div className="card-body">
                            <div id="ps2">Don't have an account? <span>Sign up</span></div>
                        </div>
                    </div>
                </div>

            </div>

            <div id="ft1">Get the app.</div>

            <div className="d-flex">
                <div>
                    <img src={apple} alt="" id="fimg1"></img>
                </div>
                <div>
                    <img src={google} alt="" id="fimg2"></img>
                </div>
            </div>
            
        </div>
    )
}