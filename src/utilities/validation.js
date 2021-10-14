import * as EmailValidator from 'email-validator';

const isEmail = (value, text) => {
  if (!EmailValidator.validate(value)) {
    throw new Error(`Invalid email: ${value} inserted into ${text}`);
  }
};

const isValidCharacters = (value, text) => {
  const validCharacters = /^[Α-Ωα-ωA-Za-z]+$/;
  if (!value.match(validCharacters)) {
    throw new Error(`Invalid characters: ${value} inserted into ${text}`);
  }
};

const isEmpty = (value, text) => {
  if (value === '' || value === undefined || value === null) {
    throw new Error(`Invalid ${text} value: ${value} cannot be empty`);
  }
};

const isNumber = (value, text) => {
  if (typeof value !== 'number' || Number.isNaN(value)) {
    throw new Error(`Invalid ${text} value: ${value} not a number`);
  }
};

const isString = (value, text) => {
  if (typeof value !== 'string') {
    throw new Error(`Invalid ${text} value: ${value} not a string`);
  }
};

const isInRange = (value, min, max, text) => {
  if (value < min) {
    throw new Error(
      `Invalid ${text} value: ${value} precedes minimum range of ${min}`
    );
  }

  if (value > max) {
    throw new Error(
      `Invalid ${text} value: ${value} exceeds maximum range of ${max}`
    );
  }
};

export default {
  isValidCharacters,
  isEmail,
  isNumber,
  isString,
  isInRange,
  isEmpty,
};
