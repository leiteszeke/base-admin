import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { objectToQueryString } from "src/helpers/strings";
import { Generic } from "src/types";

type PaginationProps = {
  currentPage: number;
  pageChange: (page: number) => void;
  page: number;
  params?: Generic;
  setPage: (page: number) => void;
  resetAndSearch: (values: Generic) => void;
};

export const usePagination = (
  route: string,
  refetch?: ({ filters }: { filters: Generic }) => void,
  extraParams?: Generic
): PaginationProps => {
  const navigate = useNavigate();
  const querySearch = useLocation().search;
  const queryPage = querySearch.match(/page=([0-9]+)/);
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1);
  const [page, setPage] = useState(currentPage);
  const [params, setParams] = useState<Generic>();

  const pageChange = (newPage: number) => {
    const inputString = querySearch !== "" ? querySearch : `page=1`;

    const regexPattern = /\page=\d+(?=&|\b)/;
    const replacementString = `page=${newPage}`;
    const newQueryString = inputString.replace(regexPattern, replacementString);

    const searchParams = new URLSearchParams(newQueryString);
    const queryObject = Object.fromEntries(searchParams.entries());

    resetAndSearch(queryObject);
  };

  const resetAndSearch = (values: Generic) => {
    const newPage = values.page ? Number(values.page) : 1;

    const queryString = objectToQueryString({
      ...values,
      page: newPage.toString(),
    });

    setParams(values);
    navigate(`/${route}?${queryString}`);

    if (values.trashed) {
      values.trashed = Number(values.trashed);
    }

    refetch?.({
      filters: {
        ...extraParams,
        ...values,
        page: newPage,
      },
    });
  };

  useEffect(() => {
    currentPage !== page && setPage(currentPage);
  }, [currentPage, page]);

  return {
    currentPage,
    pageChange,
    page,
    setPage,
    params,
    resetAndSearch,
  };
};
