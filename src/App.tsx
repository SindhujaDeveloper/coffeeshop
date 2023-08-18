import { Suspense } from "react";
import { Spinner } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./utils/helpers/app-routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((it, index) => {
          const Component = it.component;
          if (it.public) {
            return (
              <Route
                key={`publicRouteOf${index}`}
                path={it.route}
                element={
                  <Suspense fallback={<Spinner animation={'border'} />}>
                    <Component />
                  </Suspense>
                }
              />
            );
          } else {
            return (
              <Route
                key={`privateRouteOf${index}`}
                path={it.route}
                element={
                  <Suspense fallback={<Spinner animation={"border"} />}>
                    <Component />
                  </Suspense>
                }
              >
                {it.children?.map((nit, jIndex) => {
                  const NestedComponent = nit.component;
                  return (
                    <Route
                      key={`nestedPrivateRoute${index}${jIndex}`}
                      path={nit.route}
                      element={
                        <Suspense fallback={<Spinner animation={"border"} />}>
                          <NestedComponent />
                        </Suspense>
                      }
                    />
                  );
                })}
              </Route>
            );
          }
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
