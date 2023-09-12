/**
 * @param {HTMLElement} element
 * @param {string} className
 */
export const addClassTo = (element, className) => {
  element.classList.add(className);
};

export const addClassTo2Els = (element1, element2, className) => {
  element1.classList.add(className);
  element2.classList.add(className);
};

export const show = (...elements) => {
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.opacity = 1;
  }
};

export const hide = (...elements) => {
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.opacity = 0;
  }
};

export const addStyleTo = (element, styleType, value) => {
  element.style[styleType] = value;
};
export const removeStyleTo = (element, styleType, value) => {
  element.style[styleType] = value;
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

export const removeClassFrom2Els = (element1, element2, className) => {
  element1.classList.remove(className);
  element2.classList.remove(className);
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

export const size = (element, size) => {
  element.style.width = size[0] + "px";
  element.style.height = size[1] + "px";
};
