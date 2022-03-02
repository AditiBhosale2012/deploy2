import React from 'react'
import logo from '../bunny.png';

export default function Navbar2(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div>
          <a className="navbar-brand" href="https://www.google.com/" alt="">
            <img className="myimg" src={logo} alt="hello" />
          </a>
        </div>
        <div className="container-fluid">
          <a className="navbar-brand" href="https://www.youtube.com/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="https://reactjs.org/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="https://meet.google.com">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-secondary" href="https://google.com" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="https://meet.google.com">Action</a></li>
                  <li><a className="dropdown-item" href="https://meet.google.com">Hello</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="https://meet.google.com">Something else here</a></li>
                </ul>
              </li>

            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success text-light=" id="src1" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      
    </div>
  )
}
// navbar navbar-expand-lg navbar-light bg-light

