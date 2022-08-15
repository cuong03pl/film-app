import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "~/Layouts/DefaultLayout/DefaultLayout";
import publicRoutes from "~/routes/routes";

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Routes>
          {publicRoutes.map((route, index) => {
            let component = route.component;
            let Layout = DefaultLayout;
            if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={<Layout>{component}</Layout>}
              ></Route>
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
