import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Dashboard from "../pages/Dashboard";
import ProjectHosting from "../pages/ProjectHosting";
import ReactNotes from "../react/pages/ReactNotes";
import ReactBasics from "../react/pages/ReactBasics";
import JavaScriptBasics from "../pages/javascript/pagees/JavaScriptBasics";
import JavascriptNotes from "../pages/javascript/pagees/JavaScriptNotes";
import JavaScriptCodes from "../pages/javascript/pagees/JavaScriptCodes";

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
      <Route
        path="/react-notes"
        element={
          <Layout>
            {" "}
            <ReactNotes />{" "}
          </Layout>
        }
      />
      {/* for React Basics */}
      <Route
        path="/react-basics"
        element={
          <Layout>
            {" "}
            <ReactBasics />{" "}
          </Layout>
        }
      />
      {/* for JavaScript Notes */}
      <Route
        path="/javascript-notes"
        element={
          <Layout>
            {" "}
            <JavascriptNotes />{" "}
          </Layout>
        }
      />

      {/* for JavaScript Basics */}
      <Route
        path="/javascript-basics"
        element={
          <Layout>
            {" "}
            <JavaScriptBasics />{" "}
          </Layout>
        }
      />
      {/* for JavaScript Code  */}
      <Route
        path="/javascript-codes"
        element={
          <Layout>
            <JavaScriptCodes />
          </Layout>
        }
      />
      {/* for dashboard */}
      <Route
        path="/dashboard"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
