import React from 'react';
import { connect } from 'react-redux';
import FacebookLoginBtn from 'react-facebook-login';

import './LoginFacebook.scss';
import { login } from '../../actions/UserActions'
import { useHistory } from 'react-router'

const LoginFacebook = (props) => {
  const history = useHistory();
  const click = () => {
    history.push("/")
  }
  const { loggedIn } = props;
  const componentClicked = () => {
    console.log('FaceBook clicked')
  }
  const responseFacebook = (response) => {
    if(response.status === "unknown"){
      return
    }
    else {
      props.login(response.accessToken);
      click();
    }
  }
  let facebookData;

  loggedIn ?
      facebookData = (
        <div>
          <h1>Welcome</h1>
        </div>
      ) :
      facebookData = (
        <FacebookLoginBtn
          appId="237809637287215"
          fields="name,picture"
          onClick={componentClicked}
          callback={responseFacebook} />
      )
  return(
    <>{facebookData}</>
    );
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.users.loggedIn
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (token) => dispatch(login(token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginFacebook);