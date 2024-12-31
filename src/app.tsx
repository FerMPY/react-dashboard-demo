import { Route, Routes } from "react-router";

import Login from "./routes/login";
import { ROUTES } from "./constants";
import { Layout } from "./layout";

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {Object.values(ROUTES).map((route) => (
          <Route
            key={route.path}
            path={route.path}
            index
            element={<route.Component />}
          />
        ))}
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
