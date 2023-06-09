import { RoundingConfig } from "src/types";
import { chunkRight } from "./arrays";

export const formatCurrency = (value: number) => {
  const [integer, decimal] = Number(value).toFixed(2).split(".");
  const chunks = chunkRight(integer, 3);
  const formatted = chunks
    .map((chunkItem) => {
      if (Array.isArray(chunkItem)) {
        return chunkItem.join("");
      }

      return chunkItem;
    })
    .join(".");

  return `$ ${formatted},${decimal}`;
};

export const getRoundingMethod = (config?: RoundingConfig) => {
  if (config?.rounding === "CEIL") {
    return markNumberUp;
  }

  if (config?.rounding === "FLOOR") {
    return markNumberDown;
  }

  if (config?.rounding === "CUSTOM") {
    return markNumberCustom;
  }

  return Number;
};

export const calculatePrice = (
  cost: number,
  profit: number,
  tax?: number,
  config?: RoundingConfig
) => {
  const absCost = Math.abs(cost);
  const absProfit = Math.abs(profit);
  const profitAmount = absCost * (absProfit / 100);
  const price = absCost + profitAmount;
  const roundingMethod = getRoundingMethod(config);
  const defaultFloor = config?.roundingMethod?.floor ?? 4;

  if (!tax || tax === 0) {
    return roundingMethod(Number(price.toFixed(0)), defaultFloor);
  }

  const taxAmount = price * (tax / 100);

  return roundingMethod(Number((price + taxAmount).toFixed(0)), defaultFloor);
};

export const calculateProfit = (cost: number, price: number, tax?: number) => {
  const absCost = Math.abs(cost);
  const absPrice = Math.abs(price);
  const netPrice = tax ? absPrice / (1 + tax / 100) : absPrice;
  const percentageCost = (netPrice / absCost) * 100 - 100;

  return Number(percentageCost.toFixed(2));
};

export const rest = (...numbers: number[]) => {
  const [first, ...rest] = numbers;

  return rest.reduce((acc, val) => {
    const num1 = Number(acc.toFixed(2));
    const num2 = Number(val.toFixed(2));

    return num1 - num2;
  }, first);
};

export const getLastDigit = (num: number) => Number(num.toString().slice(-1));

export const markNumberDown = (num: number) => {
  if (num < 10) {
    return num;
  }

  return Math.floor(num / 10) * 10;
};

export const markNumberUp = (num: number) => Math.ceil(num / 10) * 10;

export const markNumberCustom = (num: number, floor: number) => {
  const lastDigit = getLastDigit(num);

  if (lastDigit === 0) {
    return num;
  }

  const methodToUse = lastDigit <= floor ? markNumberDown : markNumberUp;

  return methodToUse(num);
};

export const roundingExamples = (values: RoundingConfig) => {
  const numbers1 = [301, 322, 3, 274, 45];
  const numbers2 = [726, 907, 1038, 239];

  if (values.rounding === "FLOOR") {
    return [
      numbers1.map(
        (number) =>
          `${formatCurrency(number)} = ${formatCurrency(
            markNumberDown(number)
          )}`
      ),
      numbers2.map(
        (number) =>
          `${formatCurrency(number)} = ${formatCurrency(
            markNumberDown(number)
          )}`
      ),
    ];
  }

  if (values.rounding === "CEIL") {
    return [
      numbers1.map(
        (number) =>
          `${formatCurrency(number)} = ${formatCurrency(markNumberUp(number))}`
      ),
      numbers2.map(
        (number) =>
          `${formatCurrency(number)} = ${formatCurrency(markNumberUp(number))}`
      ),
    ];
  }

  if (values.rounding === "CUSTOM" && values.roundingMethod) {
    const floor = values.roundingMethod.floor;

    return [
      numbers1.map(
        (number) =>
          `${formatCurrency(number)} = ${formatCurrency(
            markNumberCustom(number, floor)
          )}`
      ),
      numbers2.map(
        (number) =>
          `${formatCurrency(number)} = ${formatCurrency(
            markNumberCustom(number, floor)
          )}`
      ),
    ];
  }

  return [];
};
