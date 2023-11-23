import packageInfo from "../package.json";
import { OverridedMixpanel } from "mixpanel-browser";

export type Generic<T = unknown> = {
  [key: string]: T;
};

export type ExcelRow = {
  value: string;
  span: number;
  type: string;
};

export type VoidFunction = () => void;

export type OnChangeEvent = {
  currentTarget: {
    name: string;
    value: string;
  };
};

export type WithDirty<T> = T & {
  dirty?: boolean;
};

export type BasicResponse<T = unknown> = {
  data: T;
};

export type WithMeta<T = unknown> = {
  data: T[];
  meta: {
    from: number;
    lastPage: number;
    page: number;
    perPage: number;
    to: number;
    total: number;
  };
};

export type GraphQLFind<T = unknown> = {
  data: T;
};

export type GraphQLMeta<T = unknown> = {
  data: WithMeta<T>;
};

export type GraphQLMutation<T = unknown> = {
  data: T;
};

export type NavItem = {
  _tag?: "CNavItem" | "CSidebarNavDropdown";
  name: string;
  icon: JSX.Element;
  route?: string;
  to?: string;
  _children?: Omit<NavItem, "children" | "icon">[];
  permissionKey?: string;
};

export const AppVersion = packageInfo.version;

/**
 *  USERS
 */

export type User = {
  id: number;
  name: string;
  lastname: string;
  email: string;
  createdAt: Date;
};

export type UserWithToken = User & {
  accessToken: string;
  isAdmin: boolean;
  image: string;
};

export type SearchForm = {
  search: string;
  trashed?: number;
};

export type WithDate<T = unknown> = T & {
  date: string;
};

declare module "yup" {
  interface StringSchema {
    integer(): StringSchema;
    numeric(): StringSchema;
    dniOrCuit(): StringSchema;
  }

  interface DateSchema {
    afterThan(ref: any): DateSchema;
  }
}

export type PermissionValue = {
  storeId: number;
  value: boolean;
};

export type MixPanel = OverridedMixpanel;

export enum EventKey {
  ScreenView = "ScreenView",
  Logout = "Logout",
  LogEvent = "LogEvent",
}

export type LogEvent = {
  eventName: string;
  eventData: Generic;
};

export type WithTrash<T> = T & {
  deletedAt: string | null;
};

export type RoundingMethod = {
  floor: number;
  none: number | null;
  ceil: number | null;
};

export type RoundingConfig = {
  rounding: string;
  roundingMethod?: RoundingMethod;
};
