/** @format */

import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Skills from "./components/Skills.js";
import Experience from "./components/Experience.js";
import Certificates from "./components/Certificates.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";
import smoothScroll from "./features/smoothScroll.js";
import scrollReveal from "./features/scrollReveal.js";
import activeNav from "./features/activeNav.js";
import skillAnimation from "./features/skillAnimation.js";
import navbarShrink from "./features/navbarShrink.js";
import themeToggle from "./features/themeToggle.js";
import projectReveal from "./features/projectReveal.js";
import formValidation from "./features/formValidation.js";
import hireButton from "./features/hireButton.js";

document.querySelector("#navbar").innerHTML = Navbar();
document.querySelector("#hero").innerHTML = About();
document.querySelector("#projects").innerHTML = Projects();
document.querySelector("#skills").innerHTML = Skills();
document.querySelector("#experience").innerHTML = Experience();
document.querySelector("#certificates").innerHTML = Certificates();
document.querySelector("#contact").innerHTML = Contact();
document.querySelector("#footer").innerHTML = Footer();

smoothScroll();
scrollReveal();
activeNav();
skillAnimation();
navbarShrink();
themeToggle();
projectReveal();
formValidation();
hireButton();