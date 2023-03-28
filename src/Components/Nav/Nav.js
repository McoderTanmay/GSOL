import './Nav.css'
// note : this is just a bummy nav-bar actuall navbar will me created later 
// so do not make any changes in this file
function nav(props) {

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light ">
      <a class="navbar-brand" href="#">
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
            <a class="nav-link" href="#">
              About <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Patient-Info
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Video
            </a>
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