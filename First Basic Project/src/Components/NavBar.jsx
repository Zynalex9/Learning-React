import React from "react";

export default function NavBar(props) {
  const handleToggle = () => {
    props.toggleMode();
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg ${props.mode === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
        data-bs-theme={props.mode}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="/">
            Navbar
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                checked={props.mode === 'dark'}
                onChange={handleToggle}
              />
              <label
                className="form-check-label text-primary"
                htmlFor="flexSwitchCheckDefault"
              >
                {props.mode === 'dark' ? 'Enable Light Mode' : 'Enable Dark Mode'}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
