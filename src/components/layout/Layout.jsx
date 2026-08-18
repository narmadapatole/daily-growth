import { useState } from "react";
import { Box } from "@mui/material";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const drawerWidth = 250;

const Layout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#F5F7FA",
      }}
    >
      {/* Sidebar */}
      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />

      {/* Main Area */}
      <Box
        sx={{
          flexGrow: 1,
          minWidth: 0,

          ml: {
            xs: 0,
            md: `${drawerWidth}px`,
          },
        }}
      >
        {/* Navbar */}
        <Navbar
          handleDrawerToggle={handleDrawerToggle}
        />

        {/* Page Content */}
        <Box
          component="main"
          sx={{
            p: {
              xs: 2,
              sm: 2.5,
              md: 3,
            },
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;