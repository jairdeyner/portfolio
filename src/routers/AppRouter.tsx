import { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Loader from "../components/atoms/Loader";
import Navbar from "../components/molecules/Navbar";

import { routes } from "./routes";
import styles from "./AppRouter.module.scss";

const AppRouter = () => {
  return (
    <div className={styles.appRouter}>
      <BrowserRouter>
        <Navbar />

        <Suspense
          fallback={
            <div className={styles.appRouter__loaderBox}>
              <Loader />
            </div>
          }
        >
          <Routes>
            {routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.Component />}
              />
            ))}

            <Route path="*" element={<Navigate to={routes[0].to} />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
