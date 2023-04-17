import { Link } from 'react-router-dom';
import './Nav.css'
function nav(props) {

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light ">
      <a class="navbar-brand" href="#">
        {/* BLOCKCHAIN<center>IN</center>HEALTHCARE */}
        Navbar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link class="nav-link info" to='/Firstpg'>
            Patient-Info <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" to="/about">
              About
            </Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" href="#">
              Video
            </Link>
          </li>
          <li class="nav-item active log_btn">
            <a class="py-1 px-3  logout" onClick={props.onlogout}>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default nav;