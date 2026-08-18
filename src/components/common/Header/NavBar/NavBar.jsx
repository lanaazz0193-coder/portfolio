const NavBar = () => {
  return ( 
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm py-3 sticky-top">
      <div className="container">
      
        <a href="#"><img src="https://placehold.co/40x40" alt="Logo" /></a>

        <button className="navbar-toggler border-0 shadow-none px-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavegacao" aria-controls="navbarNavegacao" aria-expanded="false" aria-label="Alternar navegação">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavegacao">
          
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-1">
            <li className="nav-item">
              <a className="nav-link px-3" aria-current="page" href="#">Lorem</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#">Lorem</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#">Lorem</a>
            </li>
          </ul>
        
          <a href="#" className="btn btn-secondary px-4 py-2 fw-bold rounded-pill shadow-sm">Lorem</a>

        </div>
        
      </div>
    </nav>
  );
};

export default NavBar;