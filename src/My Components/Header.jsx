import React from 'react'

export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About us</a>
            </li>
          </ul>
          {props.searchBar ? <form className="d-flex" >
            <input className="form-control me-2" type="search" placeholder="Search here" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
            : ""}
        </div>
      </div>
    </nav>
  )
}
