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
let currentSlide = 0;
let activeDot = 1;

// FUNCTIONS
const init = function () {
  initialise(dropdownDiv);
  renderImage(images[currentSlide], imageDiv);
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

  // if the current slide is less than 0, we reset it to the last element
  if (currentSlide < 0) {
    currentSlide = numberImages - 1;
  }

  // if the current dot is less than 1, we reset it to the last dot
  if (activeDot < 1) {
    activeDot = numberImages;
  }
  renderImage(images[currentSlide], imageDiv);
  renderDots(numberImages, navigationDots, activeDot);
});

// next image event listener
nextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  currentSlide += 1;
  activeDot += 1;

  // if the current slide is greater than the no. of images, we reset it to the 0th element
  if (currentSlide >= numberImages) {
    currentSlide = 0;
  }

  // if the current dot is greater than the no. of images, we reset it to the 1st dot
  if (activeDot > numberImages) {
    activeDot = 1;
  }
  renderImage(images[currentSlide], imageDiv);
  renderDots(numberImages, navigationDots, activeDot);
});
