import { cilAccountLogout, cilPeople, cilSpeedometer } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CNavItem } from "@coreui/react-pro";
import { ElementType } from "react";

export type Badge = {
  color: string;
  text: string;
};

export type NavItem = {
  component: string | ElementType;
  name: string | JSX.Element;
  icon?: string | JSX.Element;
  badge?: Badge;
  to: string;
  items?: NavItem[];
};

const _nav = [
  {
    component: CNavItem,
    name: "Home",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    to: "/",
  },
  {
    component: CNavItem,
    name: "Usuarios",
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
    to: "/users",
  },
];

export const bottomNavigation = [
  {
    component: CNavItem,
    name: "Salir",
    icon: <CIcon icon={cilAccountLogout} customClassName="nav-icon" />,
    to: "/logout",
  },
];

export default _nav;
