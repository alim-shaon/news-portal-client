import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { userSignIn, setLoader } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    userSignIn(email, password)
      .then((result) => {
        const user = result.user;
        if (user.emailVerified) {
          navigate(from, { replace: true });
        } else {
          toast.error("Your Email is not verified please verify");
        }
        setError("");
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      })
      .finally(() => {
        setLoader(false);
      });
  };
  return (
    <div className="container my-5">
      <div className="p-3 border border-2 border-rounded">
        <h1 className="text-center">Log In</h1>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        {error && (
          <div className="alert alert-danger my-2" role="alert">
            {error}
          </div>
        )}
        <p className="my-4">
          Make a New Account <Link to={"/register"}>Register</Link> or go to
          <Link to={"/"}> Home</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
