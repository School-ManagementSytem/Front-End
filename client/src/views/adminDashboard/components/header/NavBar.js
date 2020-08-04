import React from 'react';
import Logo from '../../../../assets/Logo.png';
import './navbar.scss';
import { withRouter, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { logOut } from '../../../../actions/authenticationActions';

function NavBar(props) {

  const logout = () => {
    props.logOut(props.history);
  }

  return (
    <div className="nav">
      <div className="navbar-left">
        <Link to="/" className="logo"><img className="logo-image" src={Logo} alt="logo"></img></Link>
      </div>
      <div className="navbar-right">
        <button 
        onClick={logout} 
        >Sign Out</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default withRouter(connect(
  mapStateToProps,
  { logOut }
)(NavBar));