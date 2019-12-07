// Constants
import { Roles, Systems } from '../../constants';
// Helpers
import { getUser } from '../../helpers/session';
// Menus
import webmasterMenu from './webmaster.json';
import ticketsMenu from './tickets.json';
import boxesMenu from './boxes.json';
import trackingMenu from './tracking.json';
import queriesMenu from './queries.json';
import proceduresMenu from './procedures.json';
import mapMenu from './map.json';

const getUserRole = () => getUser().rank_id || null;
const getUserPermissions = () => getUser().permissions || [];

const getMenu = () => {
  const userRole = getUserRole();
  let menu = [];

  if (userRole === Roles.ADMIN || userRole === Roles.WEBMASTER) {
    menu = menu.concat(webmasterMenu);
    menu = menu.concat(ticketsMenu);
    return menu;
  }

  const permissions = getUserPermissions().map(
    permission => permission.system_id
  );

  if (permissions.indexOf(Systems.BOXES) >= 0) {
    menu = menu.concat(boxesMenu);
  }

  if (permissions.indexOf(Systems.TRACKING) >= 0) {
    menu = menu.concat(trackingMenu);
  }

  if (permissions.indexOf(Systems.QUERIES) >= 0) {
    menu = menu.concat(queriesMenu);
  }

  if (permissions.indexOf(Systems.PROCEDURES) >= 0) {
    menu = menu.concat(proceduresMenu);
  }

  if (permissions.indexOf(Systems.MAP) >= 0) {
    menu = menu.concat(mapMenu);
  }

  if (permissions.indexOf(Systems.TICKETS) >= 0) {
    menu = menu.concat(ticketsMenu);
  }

  return menu;
};

export { getMenu };
