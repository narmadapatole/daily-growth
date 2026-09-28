import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Dashboard from "../pages/Dashboard";
import ProjectHosting from "../pages/ProjectHosting";
import ReactNotes from "../react/pages/ReactNotes";
import ReactBasics from "../react/pages/ReactBasics";

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

      {/* for React Notes */}
  <Route path="/react-notes" element={ <Layout> <ReactNotes /> </Layout> } />
  {/* for React Basics */}
  <Route path="/react-basics" element={ <Layout> <ReactBasics/> </Layout> } />


    </Routes>
  );
};

export default AppRoutes; 