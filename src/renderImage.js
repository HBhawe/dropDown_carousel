export const renderImage = function (imageObject, carouselDiv) {
  const markup = ` <img src="${imageObject.src}" alt="${imageObject.alt}" />`;
  carouselDiv.insertAdjacentHTML("beforeend", markup);
};
