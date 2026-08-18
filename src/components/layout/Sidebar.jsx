import {
  Dashboard,
  MenuBook,
  TrackChanges,
  Notes,
  Folder,
  BarChart,
  FitnessCenter,
  CalendarMonth,
  LibraryBooks,
  Person,
  Settings,
  Close,
  EmojiObjects,
} from "@mui/icons-material";

import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  IconButton,
} from "@mui/material";

const drawerWidth = 250;

const menuItems = [
  {
    label: "Dashboard",
    icon: <Dashboard />,
  },
  {
    label: "Study",
    icon: <MenuBook />,
  },
  {
    label: "Goals",
    icon: <TrackChanges />,
  },
  {
    label: "Notes",
    icon: <Notes />,
  },
  {
    label: "Projects",
    icon: <Folder />,
  },
  {
    label: "Progress",
    icon: <BarChart />,
  },
  {
    label: "Habits",
    icon: <FitnessCenter />,
  },
  {
    label: "Calendar",
    icon: <CalendarMonth />,
  },
  {
    label: "Resources",
    icon: <LibraryBooks />,
  },
];

const bottomItems = [
  {
    label: "Profile",
    icon: <Person />,
  },
  {
    label: "Settings",
    icon: <Settings />,
  },
];

const Sidebar = ({ mobileOpen, handleDrawerToggle }) => {
  const drawerContent = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background:
          "linear-gradient(180deg, #071D3A 0%, #06172E 100%)",
        color: "#fff",
      }}
    >
      {/* Logo */}
      <Box
        sx={{
          height: 76,
          display: "flex",
          alignItems: "center",
          px: 2,
          gap: 1.2,
        }}
      >
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 22,
          }}
        >
          🌱
        </Box>

        <Typography
          sx={{
            fontSize: 20,
            fontWeight: 700,
            color: "#fff",
          }}
        >
          Daily Growth
        </Typography>

        {/* Mobile close button */}
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            display: {
              xs: "flex",
              md: "none",
            },
            ml: "auto",
            color: "#fff",
          }}
        >
          <Close />
        </IconButton>
      </Box>

      {/* Main Menu */}
      <List sx={{ px: 1.5 }}>
        {menuItems.map((item, index) => (
          <ListItemButton
            key={item.label}
            sx={{
              minHeight: 45,
              mb: 0.5,
              borderRadius: 2,

              backgroundColor:
                index === 0
                  ? "#1769E8"
                  : "transparent",

              color: "#fff",

              "&:hover": {
                backgroundColor:
                  index === 0
                    ? "#1769E8"
                    : "rgba(255,255,255,0.08)",
              },
            }}
            onClick={handleDrawerToggle}
          >
            <ListItemIcon
              sx={{
                minWidth: 40,
                color: "#fff",
              }}
            >
              {item.icon}
            </ListItemIcon>

            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                fontSize: 14,
                fontWeight:
                  index === 0 ? 600 : 500,
              }}
            />
          </ListItemButton>
        ))}
      </List>

      {/* Bottom section */}
      <Box sx={{ mt: "auto" }}>
        <List sx={{ px: 1.5 }}>
          {bottomItems.map((item) => (
            <ListItemButton
              key={item.label}
              sx={{
                minHeight: 45,
                mb: 0.5,
                borderRadius: 2,
                color: "#fff",

                "&:hover": {
                  backgroundColor:
                    "rgba(255,255,255,0.08)",
                },
              }}
              onClick={handleDrawerToggle}
            >
              <ListItemIcon
                sx={{
                  minWidth: 40,
                  color: "#fff",
                }}
              >
                {item.icon}
              </ListItemIcon>

              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: 14,
                  fontWeight: 500,
                }}
              />
            </ListItemButton>
          ))}
        </List>

        {/* Growth Card */}
        <Box
          sx={{
            mx: 1.5,
            mb: 2,
            p: 2,
            minHeight: 145,
            borderRadius: 3,

            background:
              "linear-gradient(145deg, #293BA8, #1D2B86)",

            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.7,
            }}
          >
            <EmojiObjects
              sx={{
                fontSize: 21,
                color: "#FFD54F",
              }}
            />

            <Typography
              sx={{
                fontWeight: 700,
                fontSize: 16,
              }}
            >
              Keep going!
            </Typography>
          </Box>

          <Typography
            sx={{
              mt: 1,
              width: "78%",
              fontSize: 13,
              lineHeight: 1.6,
              color: "#E4E9FF",
            }}
          >
            Every day is a chance to grow
            better.
          </Typography>

          <Typography
            sx={{
              position: "absolute",
              right: 12,
              bottom: 5,
              fontSize: 38,
              transform: "rotate(-10deg)",
            }}
          >
            🚀
          </Typography>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Desktop */}
      <Drawer
        variant="permanent"
        sx={{
          display: {
            xs: "none",
            md: "block",
          },

          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            border: "none",
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>

      {/* Mobile */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: {
            xs: "block",
            md: "none",
          },

          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            border: "none",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Sidebar;