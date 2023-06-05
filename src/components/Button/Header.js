import React from "react";

import { Button } from "reactstrap";
import Classes from "../style.module.css";

const Header = ({ addfunction, style }) => (
  <div >
    <div className={`${Classes.collapse} ${Classes.navbar_collapse}`}>
      <ul className="navbar-nav ml-auto">
        <li className="nav__item has-dropdown">
          <a
            href="#"
            data-toggle="dropdown"
            className="dropdown-toggle nav__item-link active"
          >
            Home
          </a>
          <ul className="dropdown-menu">
            <li className="nav__item">
              <a href="index.html" className="nav__item-link">
                Home Main
              </a>
            </li>
            <li className="nav__item">
              <a href="home-modern.html" className="nav__item-link">
                Home Modern
              </a>
            </li>
            <li className="nav__item">
              <a href="home-classNameic.html" className="nav__item-link">
                Home Classic
              </a>
            </li>
            <li className="nav__item">
              <a href="home-dentist.html" className="nav__item-link">
                Home Dentist
              </a>
            </li>
            <li className="nav__item">
              <a href="home-pharmacy.html" className="nav__item-link">
                Home pharmacy
              </a>
            </li>
          </ul>
        </li>
        <li className="nav__item has-dropdown">
          <a
            href="#"
            data-toggle="dropdown"
            className="dropdown-toggle nav__item-link"
          >
            About Us
          </a>
          <ul className="dropdown-menu">
            <li className="nav__item">
              <a href="about-us.html" className="nav__item-link">
                About Us
              </a>
            </li>
            <li className="nav__item">
              <a href="services.html" className="nav__item-link">
                Our Services
              </a>
            </li>
            <li className="nav__item">
              <a href="services-single.html" className="nav__item-link">
                single Services
              </a>
            </li>
            <li className="nav__item">
              <a href="pricing.html" className="nav__item-link">
                Pricing &amp; Plans
              </a>
            </li>
            <li className="nav__item">
              <a href="appointment.html" className="nav__item-link">
                Appointments
              </a>
            </li>
            <li className="nav__item">
              <a href="faqs.html" className="nav__item-link">
                Help &amp; FAQs
              </a>
            </li>
            <li className="nav__item">
              <a href="gallery.html" className="nav__item-link">
                Our Gallery
              </a>
            </li>
          </ul>
        </li>
        <li className="nav__item has-dropdown">
          <a
            href="#"
            data-toggle="dropdown"
            className="dropdown-toggle nav__item-link"
          >
            Doctors
          </a>
          <ul className="dropdown-menu">
            <li className="nav__item">
              <a href="doctors-timetable.html" className="nav__item-link">
                Doctors Timetable
              </a>
            </li>
            <li className="nav__item">
              <a href="doctors-standard.html" className="nav__item-link">
                Our Doctors Standard
              </a>
            </li>
            <li className="nav__item">
              <a href="doctors-modern.html" className="nav__item-link">
                Our Doctors Modern
              </a>
            </li>
            <li className="nav__item">
              <a href="doctors-grid.html" className="nav__item-link">
                Our Doctors Grid
              </a>
            </li>
            <li className="nav__item">
              <a href="doctors-single-doctor1.html" className="nav__item-link">
                Single Doctor 01
              </a>
            </li>
            <li className="nav__item">
              <a href="doctors-single-doctor2.html" className="nav__item-link">
                Single Doctor 02
              </a>
            </li>
          </ul>
        </li>
        <li className="nav__item has-dropdown">
          <a
            href="#"
            data-toggle="dropdown"
            className="dropdown-toggle nav__item-link"
          >
            Blog
          </a>
          <ul className="dropdown-menu">
            <li className="nav__item">
              <a href="blog.html" className="nav__item-link">
                Blog Grid
              </a>
            </li>
            <li className="nav__item">
              <a href="blog-single-post.html" className="nav__item-link">
                Single Blog Post
              </a>
            </li>
          </ul>
        </li>
        <li className="nav__item has-dropdown">
          <a
            href="#"
            data-toggle="dropdown"
            className="dropdown-toggle nav__item-link"
          >
            Shop
          </a>
          <ul className="dropdown-menu">
            <li className="nav__item">
              <a href="shop.html" className="nav__item-link">
                Our Products
              </a>
            </li>
            <li className="nav__item">
              <a href="shop-single-product.html" className="nav__item-link">
                Products Single
              </a>
            </li>
            <li className="nav__item">
              <a href="cart.html" className="nav__item-link">
                Cart
              </a>
            </li>
          </ul>
        </li>
        <li className="nav__item">
          <a href="contact-us.html" className="nav__item-link">
            Contacts
          </a>
        </li>
      </ul>
      <button className="close-mobile-menu d-block d-lg-none">
        <i className="fas fa-times"></i>
      </button>
    </div>
  </div>
);
export default Header;
