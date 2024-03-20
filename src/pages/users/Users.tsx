import Api from "src/api";
import PaginatedTable from "src/components/PaginatedTable";
import { User } from "src/types";
import { CTableDataCell } from "@coreui/react-pro";
import { format } from "date-fns/format";

const List = () => {
  return (
    <PaginatedTable<User>
      columns={[
        { key: "name", label: "Nombre y Apellido" },
        { key: "email", label: "Email" },
        { key: "createdAt", label: "Fecha de Alta" },
      ]}
      detailRoute="/users/:id"
      addRoute="/users/new"
      withSearch
      key="users"
      withAdd
      scopedColumns={{
        name: (item: User) => (
          <CTableDataCell>
            {item.name} {item.lastname}
          </CTableDataCell>
        ),
        createdAt: (item: User) => (
          <CTableDataCell>
            {format(new Date(item.createdAt), "dd/MM/yyyy HH:mm")}
          </CTableDataCell>
        ),
      }}
      route="users"
      apiFunction={Api.Users.LIST_ALL}
    />
  );
};

export default List;
