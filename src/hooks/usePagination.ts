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

export const usePagination = (route: string): PaginationProps => {
  const navigate = useNavigate();
  const queryPage = useLocation().search.match(/page=([0-9]+)/);
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1);
  const [page, setPage] = useState(currentPage);
  const [params, setParams] = useState<Generic>();

  const pageChange = (newPage: number) => {
    currentPage !== newPage && navigate(`/${route}?page=${newPage}`);
  };

  const resetAndSearch = (values: Generic) => {
    const queryString = objectToQueryString({
      page: 1,
      ...values,
    });
    setParams(values);
    navigate(`/${route}?${queryString}`);
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
