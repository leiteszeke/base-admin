export type Generic<T = unknown> = Record<string, T>;

export type BasicResponse<T = unknown> = {
  data: T;
};

export type WithMeta<T = unknown> = BasicResponse<T[]> & {
  meta: {
    from: number;
    lastPage: number;
    page: number;
    perPage: number;
    to: number;
    total: number;
  };
};

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
