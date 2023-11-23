import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { AdminStore } from "./store";
import { UserWithToken } from "src/types";
import Config from "./config";

const link = new HttpLink({ uri: `${Config.apiUrl}/graphql` });

const authLink = setContext((_, { headers }) => {
  const { user } = AdminStore.getState();

  return {
    headers: {
      ...headers,
      authorization: user ? `Bearer ${user.accessToken}` : "",
    },
  };
});

// Initialize Apollo Client
export const GraphQLClient = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache(),
});

const authLinkWithUser = (user: UserWithToken | null) =>
  setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: user ? `Bearer ${user.accessToken}` : "",
      },
    };
  });

export const newGraphQLClient = (user: UserWithToken | null) =>
  new ApolloClient({
    link: authLinkWithUser(user).concat(link),
    cache: new InMemoryCache(),
  });

export default GraphQLClient;
