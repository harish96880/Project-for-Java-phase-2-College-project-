import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface UserDetailsState {
  name: string;
  email: string;
  password: string;
}

export default function SignupContainer({
  name,
  email,
  password,
}: UserDetailsState) {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:8080/signup`, user);
      navigate("/main");
    } catch (error) {
      alert("Already exist");
    }
  };

  return (
    <div id="signup">
      <form id="formContainer" onSubmit={(e) => onSubmit(e)} method="post">
        <Link to={"/"}>
          <span style={{ float: "right" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={26}
              height={26}
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </span>
        </Link>
        <h4 className="text-center mb-5">Signup</h4>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            FullName
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={name}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={email}
            onChange={(e) => onInputChange(e)}
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
            value={password}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}
