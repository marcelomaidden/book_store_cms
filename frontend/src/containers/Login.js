import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setCredentials } from '../actions';

const Login = ({credentials, login}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const history = useHistory();

  const handleLogin = async() => {
    login(username, password);
    const result = await credentials;

    setMessage("Checking credentials");
    setTimeout(() => {
      if (result.token === 'Invalid credentials')
        setMessage(result.token)
      else
        history.push("/")
    }, 2000);
  };

  return (
    <>
      {
        <h6 className='mx-auto w-50'>
          { message }
        </h6>           
      }
      {
          <>
            <div className="input-group mb-3 w-50 mx-auto">
              <span className="input-group-text" id="basic-addon1">@</span>
              <input
                type="email" name = "username"
                onChange={e => { setUsername(e.target.value)}} 
                className="form-control" placeholder="Username" aria-label="Username" 
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3 mx-auto w-50">
              <span className="input-group-text" id="basic-addon1"><i className='fa fa-user-circle' /></span>
              <input
                type="password"
                name = "password" onChange={e => { setPassword(e.target.value)} }
                onBlur={e => setPassword(e.target.value)}
                className="form-control" placeholder="Password"
                aria-label="Password" aria-describedby="basic-addon1"
              />
            </div>
            <div className="m-0 w-50 mx-auto">
              <button type = 'button' onClick={handleLogin} className="btn-create w-100 btn btn-outline-secondary">Enter</button>
            </div>    
          </>
      }
    </>
  );
}

const mapStateToProps = state => ({ credentials: state.credentials });

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(setCredentials(username, password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);