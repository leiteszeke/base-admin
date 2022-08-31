import { lazy, Suspense, useEffect } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import "./scss/style.scss";
import { useAdminStore } from "./store";
import { newGraphQLClient } from "./client";
import { ApolloProvider } from "@apollo/client";
import AppLoader from "./components/Loader";

const Layout = lazy(() => import("./components/Layout/Layout"));
const Login = lazy(() => import("./pages/login/Login"));

const Logout = () => {
  const { resetStore } = useAdminStore();

  useEffect(() => {
    resetStore();
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
          <Suspense fallback={<AppLoader />}>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          </Suspense>
        </HashRouter>
      </ApolloProvider>
    );
  }

  return (
    <ApolloProvider client={GraphQLClient}>
      <HashRouter>
        <Suspense fallback={<AppLoader />}>
          <Routes>
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<Layout />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </ApolloProvider>
  );
};

export default App;
