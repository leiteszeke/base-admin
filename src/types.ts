import packageInfo from "../package.json";
import { OverridedMixpanel } from "mixpanel-browser";

export type Generic<T = unknown> = Record<string, T>;

export type BasicResponse<T = unknown> = {
  data: T;
};

export type Meta = {
  from: number;
  lastPage: number;
  page: number;
  perPage: number;
  to: number;
  total: number;
};

export type WithMeta<T = unknown> = BasicResponse<T[]> & {
  meta: Meta;
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

export const AppVersion = packageInfo.version;

/**
 *  USERS
 */

export type User = {
  id: string;
  name: string;
  lastname: string;
  email: string;
  createdAt: Date;
};

export type UserWithToken = User & {
  accessToken: string;
};

/**
 *  Mixpanel
 */

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
