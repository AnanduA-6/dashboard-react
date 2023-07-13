import React from 'react'
import './Header.css'
import logo from '../../assets/logo-colored.svg'
function Header() {
  return (
    <div class="containerHeader">
    <nav>
      <div class="navbar">
        <div class="logo">
          <img src={logo} alt="" />
        </div>
        <ul>
          <li><a href="#">
            <i class="fas fa-user"></i>
            <span class="nav-item">My Profile</span>
          </a>
          </li>
          <li><a href="#">
          <i class="fa-solid fa-money-check-dollar"></i>
            <span class="nav-item">My Pay</span>
          </a>
          </li>
          
          <li><a href="#">
            <i class="fab fa-dochub"></i>
            <span class="nav-item">My Documnents</span>
          </a>
          </li>
          <li><a href="#">
            <i class="fas fa-cog"></i>
            <span class="nav-item">Setting</span>
          </a>
          </li>
          <li><a href="#">
            <i class="fas fa-question-circle"></i>
            <span class="nav-item">Help</span>
          </a>
          </li>
          
        </ul>
      </div>
    </nav>

   
  </div>
  )
}

export default Header