/**
 * The `renderImage` function takes an image object and a carousel div, then renders the image in the
 * carousel by updating the inner HTML of the div with the image markup.
 * @param imageObject - An object containing information about the image to be rendered, including the
 * image source (src) and alternative text (alt).
 * @param carouselDiv - The `carouselDiv` parameter is a reference to the HTML element where you want
 * to render the image. It is the container or the element in which the image will be displayed.
 */
export const renderImage = function (imageObject, carouselDiv) {
  const markup = ` <img src="${imageObject.src}" alt="${imageObject.alt}" class="image" />`;
  carouselDiv.innerHTML = "";
  carouselDiv.insertAdjacentHTML("beforeend", markup);
};
