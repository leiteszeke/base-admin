import { NavLink } from "react-router-dom";
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from "@coreui/react-pro";
import { cilApplicationsSettings, cilMenu } from "@coreui/icons";
import CIcon from "@coreui/icons-react";

import AppBreadcrumb from "./AppBreadcrumb";
import Logo from "src/assets/brand/logo-gray";
import { useAdminStore } from "src/store";

const AppHeader = (): JSX.Element => {
  const { toggleAside, toggleSidebar } = useAdminStore();

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler className="ps-1" onClick={() => toggleSidebar()}>
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none">
          <CIcon icon={Logo} height={42} />
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <CNavLink to="/" component={NavLink}>
              Home
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderToggler
          className="px-md-0 me-md-3"
          onClick={() => toggleAside()}
        >
          <CIcon icon={cilApplicationsSettings} size="lg" />
        </CHeaderToggler>
      </CContainer>
      <CHeaderDivider />
      <CContainer fluid>
        <AppBreadcrumb />
      </CContainer>
    </CHeader>
  );
};

export default AppHeader;
