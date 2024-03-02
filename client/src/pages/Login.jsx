import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container mb-4">
      <Link to="/signup">← Go to Signup</Link>

      <h2 className='text-success h1-responsive font-weight-bold text-center my-4'>Login</h2>

      <div className="row">
        <div className=" mb-md-0 mb-5">
          <form onSubmit={handleFormSubmit} id="login-form" name="login-form" action="tbd" method="POST">

            <div className="row my-2">
              <div className="">
                <div className="md-form mb-0">
                  <label htmlFor="email" className="">Email address</label>
                  <input placeholder="youremail@test.com" type="email" id="email" name="email" className="form-control" onChange={handleChange} />
                </div>
              </div>
            </div>

            <div className="row my-4">
              <div className="">
                <div className="md-form">
                  <label htmlFor="pwd">Password</label>
                  <input placeholder="******" type="password" id="pwd" name="password" rows="2" className="form-control" onChange={handleChange}></input>
                </div>
              </div>
            </div>

            {error ? (
              <div>
                <p className="error-text">The provided credentials are incorrect</p>
              </div>
            ) : null}

            <div className="text-center text-md-left mt-3">
              <a className="btn btn-success" >Submit</a>
              {/* onClick="document.getElementById('login-form').submit();" */}
            </div>
            <div className="status"></div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
