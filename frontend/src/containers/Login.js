import React from 'react';

const Login = () => (
  <>
    <div className="input-group mb-3 w-50 mx-auto">
      <span className="input-group-text" id="basic-addon1">@</span>
      <input type="email" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
    </div>
    <div className="input-group mb-3 mx-auto w-50">
      <span className="input-group-text" id="basic-addon1"><i className='fa fa-user-circle' /></span>
      <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" />
    </div>
    <div className="m-0 w-50 mx-auto">
      <button type = 'button' className="btn-create w-100 btn btn-outline-secondary">Enter</button>
    </div>    
  </>
);

export default Login;