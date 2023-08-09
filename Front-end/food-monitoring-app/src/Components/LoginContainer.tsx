import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

interface UserLoginState {
  email: string;
  password: string;
}

export default function LoginContainer({ email, password }: UserLoginState) {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [exist, setExist] = useState(false);

  const navigate = useNavigate();

  const onInputChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("From");
    try {
      const result = await axios.post(`http://localhost:8080/login`, login);
      setExist(result.data);
      if (exist) navigate("/main");
    } catch (error) {
      alert("Invalid Credentials");
    }
  };
  return (
    <div id="login">
      <form
        id="formContainer"
        onSubmit={(e) => onSubmit(e)}
        action=""
        method="post"
      >
        <Link to={"/"}>
          <span style={{ float: "right" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </span>
        </Link>
        <div className="mb-3 mx-auto">
          <h4 className="text-center mb-5">Login</h4>
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
          <label htmlFor="password" className="form-label">
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
        <button type="submit" className="btn btn-primary mb-5">
          Sign in
        </button>
        <span>
          New User?{" "}
          <Link to={"/signup"}>
            <a href="#">Register here</a>
          </Link>
        </span>
      </form>
    </div>
  );
}
