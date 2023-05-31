import React from 'react';
import '../assets/css/app.css';
import img from "../assets/images/logo TyY.jpg"


function SideBar() {
  return (
    <div>
      <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
          <div className="sidebar-brand-icon">
            <img className="w-100" src={img} alt="Tika y Yura"/>
          </div>
        </a>
        
        <hr className="sidebar-divider my-0"/>

        <li className="nav-item active">
          <a className="nav-link" href="/">
            <i className="fas fa-seedling"></i>
            <span>Dashboard - Tika y Yura</span></a>
        </li>
        
        <hr className="sidebar-divider"/>
        
        <div className="sidebar-heading">Acciones</div>
        
        <li className="nav-item">
          <a className="nav-link collapsed" href="https://www.instagram.com/tika.y.yura/?igshid=YmJhNjkzNzY%3D">
          <i className="fab fa-instagram"></i>
            <span>Instagram</span>
          </a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="https://www.facebook.com/Tika.y.Yura/">
          <i class="fab fa-facebook"></i>
            <span>Facebook</span></a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="http://localhost:3030/">
          <i className="fas fa-seedling"></i>
            <span>Tika y Yura</span></a>
        </li>

        <hr className="sidebar-divider d-none d-md-block"/>
      </ul>
    </div>
  );
}

export default SideBar;