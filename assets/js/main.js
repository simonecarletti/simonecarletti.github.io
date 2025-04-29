"use strict";

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
  const toggleNavbar = function () {
    navbar.classList.toggle("active");
  };
  navToggler.addEventListener("click", toggleNavbar);

  const closeNavbar = function () {
    navbar.classList.remove("active");
  }
  navbar.addEventListener("click", closeNavbar);

  /**
   * HEADER
   *
   * active header when window scrolled to 50px
   */
  const header = document.querySelector("[data-header]");
  const activeHeader = function () {
    window.scrollY > 50 ? header.classList.add("active") : header.classList.remove("active");
  };
  window.addEventListener("scroll", activeHeader);
}


async function sendContactForm() {
  const form = document.getElementById('contact-form');
  const formData = new FormData(form);

  formData.append("access_key", "4d865b60-e742-429c-bd82-694cd47fef87");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      const json = await response.json();

      if (json.success) {
        alert("✅ Thank you! Your message has been sent.");
        form.reset(); // clear form
      }
      else {
        alert("❌ Oops! There was a problem submitting your form.");
      }
    } 
    else {
      alert("❌ Oops! There was a problem submitting your form.");
    }
  } catch (error) {
    alert("❌ Network error. Please try again.");
  }
}

function setActive(elementId) {
  const curr = document.querySelector(".navbar-link .active");
  if (curr) {
    curr.classList.remove("active");
  }

  const element = document.getElementById(elementId);
  if (element) {
    element.classList.add("active");
  }
}