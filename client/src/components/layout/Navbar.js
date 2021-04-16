import React, {Fragment, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';

const Navbar = ({ auth: { isAuthenticated, user }, logout, getCurrentProfile}) => {
  useEffect(() => {
    { isAuthenticated &&
      getCurrentProfile();
    }}, [getCurrentProfile]);

  const authLinks = (
    <ul>
      <li>
        <Link className="nav-link" to="/dashboard">
          {
            isAuthenticated && user &&
              <span className="hide-sm">{user.name}</span>
          }
          {
            !isAuthenticated &&
            <span className="hide-sm">Register</span>
          }
        </Link>
      </li>
      <li>
        <a className="nav-link" onClick={logout} href="#!">
          <span className="hide-sm">LOGOUT</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link className="nav-link" to="/register">REGISTER</Link>
      </li>
      <li>
        <Link className="nav-link" to="/login">LOGIN</Link>
      </li>
    </ul>
  );

  return (
    <nav className="fixed-nav-bar">
      <header>
        <h1>Movie Page Information</h1>

        <section id="nav-bar">
          <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <Link className="navbar-brand" to="/">
              <img style={{ width: "80px", height: "60px" }} src={require('../../asset/tmdb.png')} alt={""} />
              <a className="ml-2">Home</a>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li>
                  <Link className="nav-link" to="/search/">Search</Link>
                </li>
                <li>
                  <Link className="nav-link" to="/profiles">Community</Link>
                </li>
                <li>
                  <Link className="nav-link" to="/watch">Watch List</Link>
                </li>
                <li>
                  <Link className="nav-link" to="/favorite">Favorite List</Link>
                </li>
                <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
              </ul>
            </div>
          </nav>
        </section>
        <div className="alert alert-warning" role="alert">
          <span
            className="closebtn"
            onClick={(e) => { e.target.parentElement.style.display = 'none'; }}
          >&times;</span>

          <p>
            <img style={{ width: "80px", height: "60px" }} src={require('../../asset/background2.png')} alt={""} />
            Welcome to MovieDB website </p>
          More movie information visit <a href="https://www.themoviedb.org/?language=en-US"
            className="alert-link"
          >TMDB</a>
        </div>
      </header>
    </nav >
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { logout, getCurrentProfile })(Navbar);
