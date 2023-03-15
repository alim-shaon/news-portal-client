import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const [accepted, setAccepted] = useState(false);
  const { createUser, setNameAndPhoto, verifyEmail } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const password = form.password.value;
    console.log(email, password, name, photoUrl);

    createUser(email, password)
      .then((result) => {
        setNameAndPhoto(name, photoUrl)
          .then(() => {})
          .catch((error) => console.log(error));
        handleEmailVerification();
        form.reset();
        setError("");
        toast.success("Please Verify Your Email Address");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  const handleEmailVerification = () => {
    verifyEmail()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const handleAcceted = (event) => {
    setAccepted(event.target.checked);
  };
  return (
    <div className="container my-5">
      <div className="p-3 border border-2 border-rounded">
        <h1 className="text-center">Register</h1>

        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label htmlFor="exampleInputName1" className="form-label">
              Your Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName1"
              aria-describedby="emailHelp"
              name="name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPhotoUrl" className="form-label">
              Photo Url
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPhotoUrl"
              aria-describedby="emailHelp"
              name="photoUrl"
            />
          </div>
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

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              onClick={handleAcceted}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              {
                <>
                  Accept{" "}
                  <Link to={"/termsAndCondition"}>Terms And Condition</Link>
                </>
              }
            </label>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={!accepted}
          >
            Submit
          </button>
        </form>
        {error && (
          <div className="alert alert-danger my-2" role="alert">
            {error}
          </div>
        )}
        <p className="my-4">
          Already have an account? <Link to={"/login"}>Log In</Link> or go to
          <Link to={"/"}> Home</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
