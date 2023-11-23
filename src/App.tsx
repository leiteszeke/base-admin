import { Suspense, useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { useAdminStore } from "src/store";
import { newGraphQLClient } from "src/services/graphql";
import { ApolloProvider } from "@apollo/client";

import SocketProvider from "src/contexts/Socket";
import Login from "src/pages/login/Login";
import Layout from "src/components/Layout/Layout";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const Logout = () => {
  const { resetStore } = useAdminStore();

  useEffect(() => {
    resetStore();

    window.location.href = "/";
  }, [resetStore]);

  return null;
};

const App = () => {
  const { user } = useAdminStore();
  const GraphQLClient = newGraphQLClient(user);

  if (!user) {
    return (
      <ApolloProvider client={GraphQLClient}>
        <HashRouter>
          <Suspense fallback={loading}>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Logout />} />
            </Routes>
          </Suspense>
        </HashRouter>
      </ApolloProvider>
    );
  }

  return (
    <ApolloProvider client={GraphQLClient}>
      <SocketProvider user={user}>
        <HashRouter>
          <Suspense fallback={loading}>
            <Routes>
              <Route path="/logout" element={<Logout />} />
              <Route path="*" element={<Layout />} />
            </Routes>
          </Suspense>
        </HashRouter>
      </SocketProvider>
    </ApolloProvider>
  );
};

export default App;
