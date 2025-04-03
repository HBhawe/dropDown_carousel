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

// CONSTANTS AND GLOBAL VARIABLES
const numberImages = images.length;
let currentSlide = 0;
let activeDot = 1;
let intervalID;

// FUNCTIONS
const init = function () {
  initialise(dropdownDiv);
  renderImage(images[currentSlide], imageDiv);
  renderDots(numberImages, navigationDots, activeDot);
  slideChange();
};

// function to go to the next slide
const nextSlide = function () {
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
  resetInterval(intervalID);
};

// function to go to the previous slide
const prevSlide = function () {
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
  resetInterval(intervalID);
};

// function to auto change slides every 5 seconds
const slideChange = function () {
  intervalID = setTimeout(() => {
    nextSlide();
  }, 5000);
};

const resetInterval = function (intervalID) {
  clearTimeout(intervalID);
  slideChange();
};

// using event bubbling to make sure to click the right dot/ make sure a dot was clicked
const navigationClick = function (event) {
  // change slide only if an actual dot was clicked
  if (event.target.classList.contains("dot")) {
    const dotClicked = Number(event.target.dataset.slide);
    currentSlide = dotClicked - 1;
    activeDot = dotClicked;
    renderImage(images[currentSlide], imageDiv);
    renderDots(numberImages, navigationDots, activeDot);
    resetInterval(intervalID);
  }
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
  prevSlide();
});

// next image event listener
nextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  nextSlide();
});

// event listener for the navigation dots
navigationDots.addEventListener("click", (e) => {
  navigationClick(e);
});
