import { map } from "lodash";
import { Generic } from "src/types";

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

export const objectToQueryString = (input: Generic) => {
  return map(input, (value: string, key: string) => {
    if (value.toString().trim() === "") {
      return "";
    }

    return `${key}=${value}`;
  }).join("&");
};
