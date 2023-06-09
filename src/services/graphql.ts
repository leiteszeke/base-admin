import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

import { AdminStore } from "src/store";
import { UserWithToken } from "src/types";
import { removeSession } from "src/helpers/session";
import Config from "src/config";

const link = new HttpLink({
  uri: `${Config.apiUrl}/graphql`,
});

const authLink = setContext((_, { headers }) => {
  const { user } = AdminStore.getState();

  return {
    headers: {
      ...headers,
      authorization: user ? `Bearer ${user.accessToken}` : "",
    },
  };
});

type NetworkError = Error & {
  statusCode: number;
  result: { message: string };
};

const errorLink = onError((error) => {
  if (error.networkError) {
    const currentError = error.networkError as NetworkError;

    if (
      currentError.statusCode === 401 &&
      currentError.result.message === "Unauthorized"
    ) {
      removeSession();
      AdminStore.setState((state) => ({ ...state, user: null }));

      window.location.href = window.location.origin + "/#/login";
    }
  }
});

// Initialize Apollo Client
export const GraphQLClient = new ApolloClient({
  link: authLink.concat(errorLink).concat(link),
  cache: new InMemoryCache({
    addTypename: false,
  }),
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
    link: authLinkWithUser(user).concat(errorLink).concat(link),
    cache: new InMemoryCache(),
  });

export default GraphQLClient;
