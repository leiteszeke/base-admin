import { memo } from "react";
import { CCloseButton, CSidebar, CSidebarHeader } from "@coreui/react-pro";

import { useAdminStore } from "src/store";

const AppAside = () => {
  const { visibleAside, toggleAside } = useAdminStore();

  return (
    <CSidebar
      colorScheme="light"
      size="lg"
      overlaid
      placement="end"
      visible={visibleAside}
      onVisibleChange={(visible) => {
        toggleAside(visible);
      }}
    >
      <CSidebarHeader className="bg-transparent">
        <CCloseButton
          className="float-end"
          onClick={() => toggleAside(false)}
        />
      </CSidebarHeader>
    </CSidebar>
  );
};

export default memo(AppAside);
