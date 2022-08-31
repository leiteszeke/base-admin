import { memo, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { CContainer } from "@coreui/react-pro";
import AppLoader from "../Loader";

// routes config
import routes from "../../routes";

const AppContent = () => {
  return (
    <CContainer className="w-full">
      <Suspense fallback={<AppLoader />}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  element={<route.component />}
                />
              )
            );
          })}
        </Routes>
      </Suspense>
    </CContainer>
  );
};

export default memo(AppContent);
