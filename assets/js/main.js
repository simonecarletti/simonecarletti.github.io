'use strict';


function main() {
  /**
   * PRELOADER
   */
  const preloader = document.querySelector("[data-preloader]");
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");


  /**
   * MOBILE NAV TOGGLE
   */
  const navbar = document.querySelector("[data-navbar]");
  const navToggler = document.querySelector("[data-nav-toggler]");
  const toggleNavbar = function () { navbar.classList.toggle("active"); }
  navToggler.addEventListener("click", toggleNavbar);


  /**
   * HEADER
   * 
   * active header when window scrolled to 50px
   */
  const header = document.querySelector("[data-header]");
  const activeHeader = function () {
    window.scrollY > 50 ? header.classList.add("active")
      : header.classList.remove("active");
  }
  window.addEventListener("scroll", activeHeader);
}