import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
  // const [rerender, setRerender] = useState(false);

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  //oauth
  const CLIENT_ID = '6073f6de696178eb4484'

  function loginWithGithub() {
    window.location.assign("https://github.com/login/oauth/authorize?client_id=" + CLIENT_ID);
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        githubUsername: formState.githubUsername,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <section className="vh-100 bg-image">
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-md-9 col-lg-7">
              <div className="card">
                <div className="card-body p-5">
                  <h1 className="text-uppercase text-success text-center mb-5">Create an account</h1>
                  <div className="d-flex justify-content-center">

                    <button onClick={loginWithGithub}>Login with Github</button>

                  </div>
                  <form className="form signup-form" onSubmit={handleFormSubmit}>
                    <div className="form-outline mb-4">
                      <label htmlFor="firstName" className="form-label"></label>
                      <input
                        htmlFor='firstname'
                        className="form-control form-control-lg"
                        placeholder="First Name"
                        name="firstName"
                        type="text"
                        id="firstName"
                        onChange={handleChange}
                        required />
                      <div className="valid-feedback">
                        Looks good!
                      </div>
                    </div>
                    <div className="form-outline mb-4">
                      <label htmlFor="lastName" className="form-label"></label>
                      <input
                        className="form-control form-control-lg"
                        placeholder="Last Name"
                        name="lastName"
                        type="text"
                        id="lastName"
                        onChange={handleChange}
                        required />
                      <div className="valid-feedback">
                        Looks good!
                      </div>
                    </div>
                    <div className="form-outline mb-4">
                      <label htmlFor="githubUsername" className="form-label"></label>
                      <input
                        className="form-control form-control-lg"
                        placeholder="Github Username"
                        name="githubUsername"
                        type="text"
                        id="githubUsername"
                        onChange={handleChange}
                        required />
                      <div className="invalid-feedback">
                        Please input your Github username.
                      </div>
                    </div>
                    <div className="form-outline mb-4">
                      <label htmlFor="email" className="form-label"></label>
                      <input
                        className="form-control form-control-lg"
                        placeholder="E-mail"
                        name="email"
                        type="text"
                        id="email"
                        onChange={handleChange}
                        required />
                      <div className="invalid-feedback">
                        Please enter a valid e-mail address.
                      </div>
                    </div>
                    <div className="form-outline mb-4">
                      <label htmlFor="password" className="form-label"></label>
                      <input
                        className="form-control form-control-lg"
                        placeholder="Password"
                        name="password"
                        type="password"
                        id="password"
                        onChange={handleChange}
                        required />
                      <div className="invalid-feedback">
                        Please input your Github username.
                      </div>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button className="btn btn-success" type="submit">Submit</button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">Have already an account? <Link to="/login">Login Here</Link></p>

                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
