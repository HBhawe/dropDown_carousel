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
let currentSlide = 1;
let activeDot = 1;

// FUNCTIONS
const init = function () {
  initialise(dropdownDiv);
  renderImage(images[currentSlide - 1], imageDiv);
  renderDots(numberImages, navigationDots, activeDot);
};

// EVENT LISTENERS

window.addEventListener("DOMContentLoaded", (e) => {
  init();
});

// dropdown - mousover event
dropDown.addEventListener("mouseover", (e) => {
  e.preventDefault();
  showDropDown(dropdownDiv);
});

// dropdown - mouseout event
dropDown.addEventListener("mouseout", (e) => {
  e.preventDefault();
  showDropDown(dropdownDiv);
});

// previous image event listener
prevBtn.addEventListener("click", (e) => {
  e.preventDefault();
  currentSlide -= 1;
  activeDot -= 1;

  if (currentSlide < 1) {
    currentSlide = numberImages - 1;
  }

  if (activeDot < 1) {
    activeDot = numberImages;
  }
  renderImage(images[currentSlide - 1], imageDiv);
  renderDots(numberImages, navigationDots, activeDot);
});

// next image event listener
nextBtn.addEventListener("click", (e) => {
  // console.log(`next button clicked`);
  e.preventDefault();
  currentSlide += 1;
  activeDot += 1;

  if (currentSlide > numberImages) {
    currentSlide = 1;
  }

  if (activeDot > numberImages) {
    activeDot = 1;
  }
  renderImage(images[currentSlide - 1], imageDiv);
  renderDots(numberImages, navigationDots, activeDot);
});
