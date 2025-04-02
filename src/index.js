"use strict";

// IMPORTS
import "./styles.css";
import { initialise } from "./init.js";
import { showDropDown } from "./showDropDown.js";
import { renderImage } from "./renderImage.js";
import { renderDots } from "./renderDots.js";

// IMAGE CAROUSEL
import { images } from "./images.js";

// QUERY SELECTORS
const dropdownDiv = document.querySelector(".dropdown-content");
const dropDown = document.querySelector(".dropdown");
const imageDiv = document.querySelector(".image");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const navigationDots = document.querySelector(".navigation-dots");

const numberImages = images.length;

// FUNCTIONS
const init = function () {
  initialise(dropdownDiv);
  renderImage(images[0], imageDiv);
  renderDots(numberImages, navigationDots);
};

// EVENT LISTENERS

window.addEventListener("DOMContentLoaded", (e) => {
  init();
});

dropDown.addEventListener("mouseover", (e) => {
  e.preventDefault();
  showDropDown(dropdownDiv);
});

dropDown.addEventListener("mouseout", (e) => {
  e.preventDefault();
  showDropDown(dropdownDiv);
});

prevBtn.addEventListener("click", (e) => {
  console.log(`prev button clicked`);
});

nextBtn.addEventListener("click", (e) => {
  console.log(`next button clicked`);
});
