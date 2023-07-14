import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo-colored.svg';

function Header() {
  return (
    <div className="containerHeader">
      <nav>
        <div className="navbar">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <ul>
            <li>
              <NavLink exact to="/profile" activeClassName="active">
                <i className="fas fa-user"></i>
                <span className="nav-item">My Profile</span>
              </NavLink>
            </li>
            
            <li>
              <NavLink to="/myDocuments" activeClassName="active">
                <i className="fab fa-dochub"></i>
                <span className="nav-item">My Documents</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/myPay" activeClassName="active">
                <i className="fa-solid fa-money-check-dollar"></i>
                <span className="nav-item">My Pay</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/reimbursement" activeClassName="active">
                <i className="fa-solid fa-money-check-dollar"></i>
                <span className="nav-item">Reimbursement</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/taxcalculator" activeClassName="active">
                <i className="fas fa-cog"></i>
                <span className="nav-item">Tax Calculator</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/investment" activeClassName="active">
                <i className="fas fa-question-circle"></i>
                <span className="nav-item">Investment Details</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
