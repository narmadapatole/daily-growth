import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
// import ProjectHosting from "../../daily-growth/src/components/study/ProjectHosting";
import ProjectHosting from "./pages/ProjectHosting";
import AppRoutes from "./routes/AppRoutes";


function App() {
  return (
    // <Layout>
    //   <Dashboard />
    // </Layout>
    <>
    
    <AppRoutes />
    </>
  );
}

export default App;