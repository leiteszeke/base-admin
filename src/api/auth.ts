import * as yup from "yup";
import { gql } from "@apollo/client";
import { User } from "src/types";

export const LoginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export type LoginUser = Pick<User, "email"> & {
  password: string;
};

export const LOGIN = gql`
  mutation ($user: LoginUserInput!) {
    user: loginAdminUser(user: $user) {
      id
      name
      lastname
      email
      accessToken
    }
  }
`;
