import { memo } from "react";
import { CSidebar, CSidebarBrand, CSidebarNav } from "@coreui/react-pro";
import AppSidebarNav from "./AppSidebarNav";
import CIcon from "@coreui/icons-react";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import Logo from "src/assets/brand/logo";
import navigation, { bottomNavigation } from "src/_nav";
import { useAdminStore } from "src/store";

const AppSidebar = () => {
  const { visibleSidebar, toggleSidebar } = useAdminStore();

  return (
    <CSidebar
      position="fixed"
      visible={visibleSidebar}
      onVisibleChange={(visible) => {
        toggleSidebar(visible);
      }}
    >
      <CSidebarBrand className="d-none d-md-flex">
        <CIcon className="sidebar-brand-full" icon={Logo} height={60} />
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
        <SimpleBar>
          <AppSidebarNav items={bottomNavigation} />
        </SimpleBar>
      </CSidebarNav>
    </CSidebar>
  );
};

export default memo(AppSidebar);
