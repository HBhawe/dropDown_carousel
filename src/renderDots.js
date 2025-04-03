/**
 * The `renderDots` function generates HTML elements representing dots for a slideshow, with one dot
 * marked as active based on the provided active index.
 * @param numberImage - The `numberImage` parameter in the `renderDots` function represents the total
 * number of images or items for which you want to render dots. These dots are typically used for
 * navigation or indication purposes, such as in a carousel or slider component.
 * @param container - The `container` parameter in the `renderDots` function is the element where the
 * dots will be rendered. It is the HTML element that will contain the dots representing the images.
 * You can pass the reference to this container element when calling the `renderDots` function to
 * update the dots accordingly
 * @param activeDot - The `activeDot` parameter in the `renderDots` function represents the index of
 * the currently active dot in a slider or image carousel. This index is used to determine which dot
 * should be visually highlighted as active in the pagination dots.
 */
export const renderDots = function (numberImage, container, activeDot) {
  let markup = "";
  container.innerHTML = "";
  for (let index = 1; index <= numberImage; index++) {
    if (index === activeDot) {
      markup += `<span class="dot active-dot" data-slide=${index}></span>`;
    } else {
      markup += `<span class="dot" data-slide=${index}></span>`;
    }
  }
  container.insertAdjacentHTML("beforeend", markup);
};
