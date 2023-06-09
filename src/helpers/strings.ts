import { camelCase, startCase } from "lodash";
import { Generic } from "src/types";

export const singularOrPlural = (
  value: number,
  singular: string,
  plural: string
) => {
  if (value === 1) {
    return singular;
  }

  return plural;
};

export const pascalCase = (str: string) =>
  startCase(camelCase(str)).replace(/ /g, "");
export const routeParser = (route: string, entries: any) => {
  const regex = /:\w+/g;
  const match = route.match(regex);

  return match?.reduce((routeA, key) => {
    const cleanKey = key.replace(":", "");
    const value = entries[cleanKey];

    if (!value) {
      return routeA;
    }

    return routeA.replace(key, value);
  }, route);
};

export const objectToQueryString = (input: Generic<string>) => {
  Object.entries(input).forEach(([key, value]) => {
    if (value === "") {
      delete input[key];
    }
  });

  const searchParams = new URLSearchParams(input);

  const queryString = searchParams.toString();

  return queryString;
};

export const queryStringToObject = (queryString: string) => {
  const searchParams = new URLSearchParams(queryString);

  return Object.fromEntries(searchParams.entries());
};
