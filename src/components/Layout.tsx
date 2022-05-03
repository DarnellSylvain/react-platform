import React, { useState } from "react";
import {
  Drawer,
  Typography,
  Box,
  Toolbar,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  CssBaseline,
  AppBar,
  IconButton,
  MenuItem,
  Menu,
  Avatar,
} from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ArticleIcon from "@mui/icons-material/Article";
import DashboardIcon from "@mui/icons-material/Dashboard";

import Person from "@mui/icons-material/Person";
import Settings from "@mui/icons-material/Settings";
import ReportIcon from "@mui/icons-material/Report";

import MyEmissionsLogo from "../assets/branding/logos/MyEmissionsLogoWithName.png";
import { Logout } from "@mui/icons-material";
import { blue, green } from "@mui/material/colors";

const drawerWidth = 250;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children, window }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Box display="flex" flexDirection="column" alignItems="center" p={2}>
        <Box
          alignSelf="start"
          component="img"
          sx={{
            height: 36,
            width: 200,
          }}
          alt="My Emissions Logo."
          src={MyEmissionsLogo}
        />

        <Typography
          mt={1}
          px={2}
          py={0.5}
          variant="subtitle1"
          sx={{
            backgroundColor: "#f2f2f3",
            color: "#5D6778",
            borderRadius: "0.25rem",
          }}
        >
          Beta
        </Typography>
      </Box>

      <Divider />
      <List sx={{ paddingTop: 0 }}>
        {[
          {
            name: "Dashboard",
            url: "/",
            icon: <DashboardIcon fontSize="small" />,
          },
          { name: "Recipes", url: "/recipes", icon: <MenuBookIcon /> },
          { name: "Ingredients", url: "/ingredients", icon: <ArticleIcon /> },
        ].map((tab, index) => (
          <ListItem
            button
            component={RouterLink}
            to={tab.url}
            key={index}
            onClick={handleDrawerToggle}
          >
            <ListItemIcon sx={{ marginRight: -1 }}>{tab.icon}</ListItemIcon>
            <ListItemText secondary={tab.name} />
          </ListItem>
        ))}
      </List>
      <Divider sx={{ flexGrow: 1 }} />
      <List sx={{ paddingTop: 0 }}>
        {[
          {
            name: "Something wrong? We would really appreciate your feedback!",
            url: "/feedback",
            icon: <ReportIcon />,
          },

          { name: "Settings", url: "/settings", icon: <Settings /> },
        ].map((tab, index) => (
          <ListItem
            button
            component={RouterLink}
            to={tab.url}
            key={index}
            onClick={handleDrawerToggle}
          >
            <ListItemIcon>{tab.icon}</ListItemIcon>
            <ListItemText secondary={tab.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          bgcolor: "white",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" }, color: "#5D6778" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, color: green[300] }}
          >
            My Emissions
          </Typography>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <Avatar sx={{ bgcolor: blue[500] }}>OP</Avatar>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Person fontSize="small" />
                </ListItemIcon>
                My account
              </MenuItem>
              <Divider />
              <MenuItem
                onClick={handleClose}
                component={RouterLink}
                to="/settings"
              >
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="platform-navigation"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          minHeight: "100vh",
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
