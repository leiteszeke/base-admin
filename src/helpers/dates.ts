import { add as dateFnsAdd } from "date-fns/add";
import { format as dateFnsFormat } from "date-fns/format";
import { sub as dateFnsSub } from "date-fns/sub";
import { es } from "date-fns/locale";
import { Generic } from "src/types";

type Timing = {
  add?: Generic;
  remove?: Generic;
  timeZone?: string;
};

export const dateFormat = (
  date: Date | string,
  formatStr: string,
  timing?: Timing
) => {
  let mappedDate = date;
  const { add = null, remove = null, timeZone } = timing ?? {};

  if (mappedDate === "") {
    mappedDate = new Date();
  }

  if (typeof mappedDate === "string") {
    if (timeZone) {
      return dateFnsFormat(new Date(date), formatStr, { locale: es });
    }

    const mappedDate = add
      ? dateFnsAdd(new Date(date), add)
      : remove
      ? dateFnsSub(new Date(date), remove)
      : new Date(date);

    return dateFnsFormat(mappedDate, formatStr, { locale: es });
  }

  if (timeZone) {
    return dateFnsFormat(mappedDate, formatStr, { locale: es });
  }

  const innerDate = add
    ? dateFnsAdd(mappedDate, add)
    : remove
    ? dateFnsSub(mappedDate, remove)
    : mappedDate;

  return dateFnsFormat(innerDate, formatStr, { locale: es });
};

export const getStartAndEnd = (
  dateFrom: Date | string,
  dateTo?: Date | string
) => {
  const today = dateFnsAdd(new Date(), { days: 1 });

  return {
    dateFrom: `${dateFormat(dateFrom, "yyyy-MM-dd")} 03:00:00`,
    dateTo: dateTo
      ? `${dateFormat(dateTo, "yyyy-MM-dd")} 02:59:59`
      : `${dateFormat(today, "yyyy-MM-dd")} 02:59:59`,
  };
};
