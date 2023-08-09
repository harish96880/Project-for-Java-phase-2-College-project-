import { Link } from "react-router-dom";
import "../index.css";

export default function Navbar(props: any) {
  return (
    <nav className="navbar navbar-expand-lg" id="navbar">
      <b className="h3">Food Monitoring</b>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="currentColor"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>
      <div className="collapse navbar-collapse" id="menu">
        <ul className="navbar-nav ms-auto mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="#home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <Link to={"/login"} style={{ textDecoration: "none" }}>
              <a className="nav-link" href="#">
                {props.login}
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
