import React from 'react';
import GoogleLogin from 'react-google-login'; 
 
const responseGoogle = (response) => {
  console.log(response.profileObj);
}


function Login()
{
	return <GoogleLogin
		    clientId="59228241162-jsa4rn4i8gas6tglhg8on6l6iudirfhe.apps.googleusercontent.com"
		    render={renderProps => (
		      <button className='google_button' onClick={renderProps.onClick} disabled={renderProps.disabled}>Login With Gmail</button>
		    )}
		    buttonText="Login"
		    onSuccess={responseGoogle}
		    onFailure={responseGoogle}
		    cookiePolicy={'single_host_origin'}
		    redirectUri={'http://google.com'}
		  />;
}

export default Login;