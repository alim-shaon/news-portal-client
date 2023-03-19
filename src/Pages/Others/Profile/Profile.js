import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user.displayName);
  const photoURLRef = useRef(user.photoURL);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(name);
    // console.log(photoURLRef.current.value);
  };
  const handleChanged = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            defaultValue={user?.email}
            readOnly
          />
        </div>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">
            Your name
          </label>
          <input
            type="text"
            className="form-control"
            id="userName"
            defaultValue={name}
            onChange={handleChanged}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="photo" className="form-label">
            Photo URL
          </label>
          <input
            type="text"
            className="form-control"
            id="photo"
            ref={photoURLRef}
            defaultValue={user?.photoURL}
          />
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Profile;
