import { isEmpty } from "lodash";

export const isTruthy = (value: unknown) => {
  if (
    value === null ||
    value === undefined ||
    typeof value === "undefined" ||
    !value ||
    isEmpty(value) ||
    value === ""
  ) {
    return false;
  }

  return true;
};

export const isNumber = (value: unknown) => {
  if (typeof value === "number") {
    return true;
  }

  return !isNaN(Number(value));
};
