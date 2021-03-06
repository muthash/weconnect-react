import React from 'react';
import { Link } from 'react-router-dom';
import '../../static/css/custom.css';
import '../../static/css/indexBody.css';


const RegisterForm = ({handleSubmit, handleChange, state}) => (
  <div>
    <section id="home" className="main">
      <div className="overlay" />
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 col-xs-12">
            <div className="register-thumb">
              <h1>
                Register for Weconnect
              </h1>
              <h2>
                This platform creates awareness for businesses and gives the users
                the ability to write reviews about the businesses they have interacted with.
              </h2>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12">
            <section className="masthead">
              <div className="form-register"> 
                {state.message && <div className="alert alert-danger" role="alert">{state.message}</div>}
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="username" className="col-form-label col-form-label-sm">
                      Username
                    </label>
                    <div className="input-group">
                      <span className="input-group-addon" id="sizing-addon1">
                        @
                      </span>
                      <input 
                        id="username"
                        name="username" 
                        type="text" 
                        className="form-control"
                        value={state.username}
                        onChange={handleChange}
                      />
                    </div>
                    {state.usernameErr && <div className="invalid-feedback">{state.usernameErr}</div>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="col-form-label col-form-label-sm">
                      Email address
                    </label>
                    <input 
                      name="email"
                      id="useremail"
                      type="email" 
                      className="form-control"
                      value={state.email}
                      onChange={handleChange}
                    />
                    {state.emailErr && <div className="invalid-feedback">{state.emailErr}</div>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="PasswordInput" className="col-form-label col-form-label-sm">
                      Password
                    </label>
                    <input 
                      name="password"
                      type="password"
                      className="form-control"
                      value={state.password}
                      onChange={handleChange}
                    />
                    <small id="passwordHelpBlock" className="form-text text-muted">
                        Use at least one lowercase letter, one numeral, and seven characters.
                    </small>
                    {state.passwordErr && <div className="invalid-feedback">{state.passwordErr}</div>}
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-success btn-block" disabled={state.disabled}>
                      {state.disabled ? 'Sending ...' : 'Sign up for WeConnect'}
                    </button>
                    <small className="form-text text-muted align">
                      Already Registered?
                      <Link to="/login">
                        Sign in 
                      </Link>
                    </small>
                  </div>  
                </form>
              </div>  
            </section>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default RegisterForm;