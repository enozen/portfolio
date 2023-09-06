import { Route, Routes } from "react-router-dom";
import "../styles/App.css";

import routes from "./routes";
import Layout from "../layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        {routes.map((route) => (
          <Route key={route.id} {...route} />
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
