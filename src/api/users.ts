import { gql } from "@apollo/client";

export const LIST_ALL = gql`
  query {
    data: users {
      id
      name
      lastname
      email
      createdAt
    }
  }
`;
