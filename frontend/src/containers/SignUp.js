import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { createUser } from '../actions';

const SignUp = ({ create, credentials }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const history = useHistory();

  const handleCreateUser = async () => {
    create(name, email, password);
    const result = await credentials;
    setMessage("Creating user");
    setTimeout(() => {
      if (result.token === 'User not created')
        setMessage("An error ocurred, try again later")
      else
        history.push("/login")
    }, 5000);
  }

  return (
    <>
      {
        <h6 className='mx-auto w-50'>
          { message }
        </h6>           
      }
      {
        //logged === true ? history.push('/') :
          <>
            <div className="input-group mb-3 w-50 mx-auto">
              <span className="input-group-text" id="basic-addon1">@</span>
              <input
                type="text" name = "name"
                onChange={e => { setName(e.target.value)}} 
                className="form-control" placeholder="Enter your name" aria-label="User name" 
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3 w-50 mx-auto">
              <span className="input-group-text" id="basic-addon1">@</span>
              <input
                type="email" name = "email"
                onChange={e => { setEmail(e.target.value)}} 
                className="form-control" placeholder="user@email.com" aria-label="E-mail" 
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
              <button type = 'button' onClick={handleCreateUser} className="btn-create w-100 btn btn-outline-secondary">Enter</button>
            </div>    
          </>
      }
    </>   
  )
};

const mapStateToProps = state => ({
  credentials: state.credentials,
})
const mapDispatchToProps = dispatch => ({
  create: (name, email, password) => {
    return dispatch(createUser(name, email, password))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);