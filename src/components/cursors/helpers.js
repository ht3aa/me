/**
 * @param {HTMLElement} element
 * @param {string} className
 */
export const addClassTo = (element, className) => {
  element.classList.add(className);
};

/**
 *
 * @param {HTMLElement} element
 * @param {string} attributeName
 * @param {string} attributeValue
 */
export const addAttributeTo = (element, attributeName, attributeValue) => {
  element.setAttribute(attributeName, attributeValue);
};

/**
 * @param {HTMLElement} element
 * @param {string} className
 */
export const removeClassFrom = (element, className) => {
  element.classList.remove(className);
};

/**
 *
 * @brief The element must have absolute property on it.
 * @param {HTMLElement} element
 * @param {Array<number>} point The first value is (left value) and the second value is the (top value)
 * @param {number} offset
 */
export const moveElTo = (element, point, offset = 0) => {
  element.style.left = point[0] + offset + "px";
  element.style.top = point[1] + offset + "px";
};
