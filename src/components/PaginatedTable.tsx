import {
  CCard,
  CCardBody,
  CSmartPagination,
  CSmartTable,
} from "@coreui/react-pro";
import {
  Column,
  Item,
} from "@coreui/react-pro/dist/components/smart-table/CSmartTableInterface";
import { useMemo } from "react";
import { DocumentNode, useQuery } from "@apollo/client";
import { To, useNavigate } from "react-router-dom";
import { routeParser } from "src/helpers/strings";
import { usePagination } from "src/hooks/usePagination";
import { BasicResponse, Generic, WithMeta } from "src/types";
import SearchRow from "./SearchRow";

type EnrichedColumn = Column & {
  className?: string;
};

type PaginatedTableProps<T> = {
  addRoute?: string;
  apiFunction: DocumentNode;
  columns: EnrichedColumn[];
  customSearch?: JSX.Element;
  detailRoute?: string;
  detailRouteKey?: string;
  route: string;
  scopedColumns?: Generic<(item: T) => JSX.Element>;
  searchKey?: string;
  withAdd?: boolean;
  withSearch?: boolean;
};

function hasMeta<T>(item: WithMeta<T> | BasicResponse<T[]> | undefined) {
  return (item as WithMeta<T>)?.meta !== undefined;
}

function PaginatedTable<I = Item>({
  addRoute,
  apiFunction,
  columns,
  customSearch,
  detailRoute,
  route,
  scopedColumns,
  searchKey,
  withAdd = false,
  withSearch = false,
}: PaginatedTableProps<I>) {
  const navigate = useNavigate();
  const {
    data: response,
    loading,
    refetch,
  } = useQuery<WithMeta<I> | BasicResponse<I[]>>(apiFunction);
  const { page, pageChange, resetAndSearch } = usePagination(route, refetch);

  const emptyValues = useMemo(() => {
    if (loading) {
      return false;
    }

    if (typeof response === "undefined" || response.data.length === 0) {
      return true;
    }

    return false;
  }, [loading, response]);

  const lastPage = hasMeta(response)
    ? (response as WithMeta<I>)?.meta.lastPage
    : 0;

  const innerColumns = useMemo(() => {
    if (columns.length > 0) {
      return (columns ?? []).map((column) => ({
        ...column,
        _props: {
          ...column._props,
          className: column.className,
        },
      }));
    }

    const cols = Object.keys(response?.data?.[0] ?? {}).map((col) => ({
      key: col,
      name: col,
    }));

    return cols;
  }, [columns, response?.data]);

  return (
    <CCard>
      <CCardBody>
        {withSearch && (
          <SearchRow
            addRoute={addRoute}
            customSearch={customSearch}
            onSubmit={resetAndSearch}
            searchKey={searchKey}
            withAdd={withAdd}
          />
        )}
        <CSmartTable
          items={(response?.data as unknown as Item[]) ?? []}
          columns={innerColumns}
          scopedColumns={scopedColumns}
          loading={loading}
          clickableRows={!!detailRoute}
          onRowClick={(item: Item) => {
            if (detailRoute) {
              navigate(routeParser(detailRoute, item) as To);
            }
          }}
          noItemsLabel={emptyValues ? "No hay resultados" : ""}
        />
        {lastPage > 1 && (
          <CSmartPagination
            activePage={page}
            onActivePageChange={pageChange}
            pages={lastPage}
            doubleArrows={false}
            align="center"
          />
        )}
      </CCardBody>
    </CCard>
  );
}

export default PaginatedTable;
