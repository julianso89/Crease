import React from 'react';
import './home.css';
import {GoogleLogin} from 'react-google-login';



export default props => {
    const responseGoogle = (response) => {
        console.log('google responsE!!!',response);
    }

    return (
        <div className="homepage">
            <div className="home-login center">
                <div className="crease-logo"></div>
                <div className="login-area">
                    <GoogleLogin
                        clientId="789130565798-ud616gfbsn8jv90803gvk44ltl6al47l.apps.googleusercontent.com"
                        render={renderProps => (
                            <button className="login-button" type="button" onClick={renderProps.onClick}>LOGIN</button>
                        )}
                        buttonText="LOGIN"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                    />
                    <GoogleLogin
                        clientId="789130565798-ud616gfbsn8jv90803gvk44ltl6al47l.apps.googleusercontent.com"
                        render={renderProps => (
                            <button className="login-button" type="button" onClick={renderProps.onClick}>SIGN UP</button>
                        )}
                        buttonText="SIGN UP"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                    />
                </div>
            </div>
            
            <div className="description-body">
                <div className="description-header">
                    <h3 className="center description-title">What is <span className="lobster">Crease</span> ?</h3>
                </div>
            </div>

            <div className="video-body">
                <h3>VIDEO AREA</h3>
            </div>

            <hr className="hrBar"></hr>

            <div className="homeDivPart">
                <h3>LOGIN AREA</h3>
            </div>
        </div>
    )
}

