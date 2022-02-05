/**
 * Helps to keep the code clean while trying to
 * merge multiple objects immutably.
 * There is no type checking, so it throws if passed
 * params in other types
 *
 * @param {Object} - Each items passed must be object
 * @returns {Object} - A new object, result of merging
 *  the object properties from right to left
 */
export const merge = (...rest) => Object.assign({}, ...rest);

/**
 * Simple is object check.
 *
 * @param {any} data - any value to check if is an object
 * @returns {boolean}
 */
export const isObject = (data) => (
  data && typeof data === 'object' && !Array.isArray(data) && data !== null
);

/**
 * Removes undefined keys from an object.
 * @param {Object} obj - Source object
 * @returns {Object} - Simplified object
 */
export const removeUndefinedKeys = (obj) => Object.keys(obj).reduce((acc, key) => {
  const item = obj[key];

  if (typeof item !== 'undefined') {
    acc[key] = item;
  }

  return acc;
}, {});

/**
 * Checks if the given collection is empty.
 * @param {Object|Array} collection
 * @returns {Boolean}
 */
export const isEmpty = (collection) => {
  if (Array.isArray(collection)) {
    return collection.length === 0;
  }

  return Object.keys(collection).length === 0;
};

/**
 * Converts hex color code to rgba
 *
 * @param {String} hex value starting with #
 * @param {Number} alpha the opacity between 0 and 1
 *
 * @returns {String} the equivalent rgba color
 */
export const setColorOpacity = (hex, alpha = 1) => {
  if (hex.length !== 7 && hex.length !== 4) {
    // eslint-disable-next-line no-console
    console.warn('setColorOpacity: Invalid hex color.');
    return hex;
  }

  const normalizedHex = hex.length === 4
    ? `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`
    : hex;

  const r = parseInt(normalizedHex.slice(1, 3), 16);
  const g = parseInt(normalizedHex.slice(3, 5), 16);
  const b = parseInt(normalizedHex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

/**
 * Converts space separated strings to camel case
 * Useful for creating key strings from human readable titles.
 *
 * @param {String} str space separated title
 * @returns {String} camelCase string
 */
export const toCamelCase = (str) => {
  if (!str || typeof str !== 'string') {
    return str;
  }
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.toUpperCase();
    })
    .replace(/\s+/g, '');
};

// eslint-disable-next-line no-useless-escape
const DomEventsAttribute = /((abort|afterprint|animationend|animationiteration|animationstart|beforeprint|beforeunload|blur|canplay|canplaythrough|change|click|contextmenu|copy|cut|dblclick|drag|dragend|dragenter|dragleave|dragover|dragstart|drop|durationchange|ended|error|focus|focusin|focusout|fullscreenchange|fullscreenerror|hashchange|input|invalid|keydown|keypress|keyup|load|loadeddata|loadedmetadata|loadstart|message|mousedown|mouseenter|mouseleave|mousemove|mouseover|mouseout|mouseup|mousewheel|offline|online|open|pagehide|pageshow|paste|pause|play|playing|popstate|progress|ratechange|resize|reset|scroll|search|seeked|seeking|select|show|stalled|storage|submit|suspend|timeupdate|toggle|touchcancel|touchend|touchmove|touchstart|transitionend|unload|volumechange|waiting|wheel)=")([a-zA-Z0-9:;\.\s\(\)\-\,{}]*)(")/g;
const scriptTagReg = /<script([^>]+)?([^(</)]+<\/script>|(\/>))/g;
const queryParamsReg = /^\?/;

/**
 * Removes any script tag, including self closing ones.
 *
 * @param {String} str html text
 * @returns {String} same string with any any probable script tag
 */

export const getDetoxifiedMarkup = (string = '') => string
  .replace(scriptTagReg, '')
  .replace(DomEventsAttribute, '');

/**
 * Parses query string to an object
 * @param {String} str - The query string
 * @returns {Object} parameters
 */
export const parseQuery = (str) => str
  .replace(queryParamsReg, '')
  .split('&')
  .reduce((props, item) => {
    const [key, value] = item.split('=');
    // eslint-disable-next-line no-param-reassign
    if (value !== undefined) props[key] = value;
    return props;
  }, {});

/**
 * Flattens given array
 *
 * @param {Array} arr - Given array to be flattened
 * @returns {Array} - Flattened array
 */
const flatten = (arr) => (
  arr.reduce((flat, toFlatten) => (
    flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten)
  ), [])
);

/**
 * Returns a maximum of 10 randomly sequenced digits.
 *
 * @param {Number} length - Digits from 0 to 9.
 * @param {Number} maxValue - Restrict random numbers to less than this value.
 * @returns {Number[]} List of unique digits.
 */
export const dateBasedUniqueRandom = (length = 3, maxValue = 0) => {
  const date = new Date();
  const year = date.getYear();
  const month = date.getMonth();
  const day = date.getDay();
  const dayOfWeek = date.getDay();

  // Mixes date with predictable random noses to produce
  // a randomly sequenced string of digits
  // Returns the same seed during one day.
  const seed = flatten([2, 3, 5, 7].map((nonce) => (
    [day, month, year].map((range) => (
      range * ((dayOfWeek + nonce) % 7)
    )))));

  return seed.join('').split('').reduce((acc, item) => {
    if (!acc.includes(Number(item)) && item < maxValue) acc.push(Number(item));
    return acc;
  }, []).slice(0, length);
};
