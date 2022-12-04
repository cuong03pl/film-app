import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "~/Layouts/DefaultLayout/DefaultLayout";
import publicRoutes from "~/routes/routes";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-bgPrimary h-full bg-full">
        <Routes>
          {publicRoutes.map((route, index) => {
            let component = route.component;
            // if (!route.component) {
            //   component = <ErrorPage />;
            // }
            let Layout = DefaultLayout;
            if (route.layout === null) {
              Layout = Fragment;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={<Layout watch={route.watch}>{component}</Layout>}
              ></Route>
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
