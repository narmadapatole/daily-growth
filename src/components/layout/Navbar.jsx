import {
  Menu,
  Search,
  LightModeOutlined,
  NotificationsNone,
  KeyboardArrowDown,
} from "@mui/icons-material";

import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";

const Navbar = ({
  handleDrawerToggle,
}) => {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "#fff",
        borderBottom: "1px solid #EDF0F5",
        color: "#17233C",
      }}
    >
      <Toolbar
        sx={{
          minHeight: "76px !important",
          px: {
            xs: 1.5,
            sm: 2.5,
            md: 3,
          },

          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Left */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: {
              xs: 1,
              sm: 2,
            },
          }}
        >
          {/* Menu */}
          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              width: 42,
              height: 42,
              backgroundColor: "#F7F9FC",

              "&:hover": {
                backgroundColor: "#EDF2FA",
              },
            }}
          >
            <Menu />
          </IconButton>

          {/* Search */}
          <Box
            sx={{
              width: {
                xs: 150,
                sm: 250,
                md: 325,
              },

              height: 42,

              display: "flex",
              alignItems: "center",

              gap: 1,

              px: 1.5,

              border: "1px solid #E2E7EF",

              borderRadius: 2,

              color: "#7B879A",
            }}
          >
            <Search fontSize="small" />

            <InputBase
              placeholder="Search anything..."
              sx={{
                width: "100%",
                fontSize: 14,

                "& input::placeholder": {
                  color: "#9AA5B5",
                  opacity: 1,
                },
              }}
            />
          </Box>
        </Box>

        {/* Right */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: {
              xs: 0.3,
              sm: 1,
            },
          }}
        >
          {/* Theme */}
          <IconButton
            sx={{
              width: 40,
              height: 40,
              backgroundColor: "#F8F9FC",

              "&:hover": {
                backgroundColor: "#EDF2FA",
              },
            }}
          >
            <LightModeOutlined
              sx={{
                fontSize: 21,
                color: "#536176",
              }}
            />
          </IconButton>

          {/* Notification */}
          <IconButton
            sx={{
              width: 40,
              height: 40,
              backgroundColor: "#F8F9FC",

              "&:hover": {
                backgroundColor: "#EDF2FA",
              },
            }}
          >
            <Badge
              badgeContent={3}
              color="error"
              sx={{
                "& .MuiBadge-badge": {
                  fontSize: 9,
                  minWidth: 17,
                  height: 17,
                },
              }}
            >
              <NotificationsNone
                sx={{
                  fontSize: 21,
                  color: "#536176",
                }}
              />
            </Badge>
          </IconButton>

          {/* Profile */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,

              ml: {
                xs: 0.5,
                sm: 1,
              },

              cursor: "pointer",
            }}
          >
            <Avatar
              sx={{
                width: 38,
                height: 38,
                background:
                  "linear-gradient(135deg,#FFD6C7,#F1A88C)",
                color: "#17233C",
                fontWeight: 700,
              }}
            >
              N
            </Avatar>

            <Typography
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                },

                fontSize: 14,
                fontWeight: 600,
              }}
            >
              Narmada
            </Typography>

            <KeyboardArrowDown
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                },

                fontSize: 19,
                color: "#536176",
              }}
            />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;