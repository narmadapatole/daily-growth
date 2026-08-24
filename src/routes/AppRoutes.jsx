import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Dashboard from "../pages/Dashboard";
import ProjectHosting from "../pages/ProjectHosting";

// import Layout from "../components/Layout";
// import Dashboard from "../pages/Dashboard";
// import ProjectHosting from "../pages/ProjectHosting";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />

      <Route
        path="/project-hosting"
        element={
          <Layout>
            <ProjectHosting />
          </Layout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;