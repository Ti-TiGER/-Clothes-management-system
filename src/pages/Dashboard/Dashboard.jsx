import * as React from "react";
import PropTypes from "prop-types";

// MUI import
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import MuiDrawer from "@mui/material/Drawer";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";

// import font
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

//Icon Stuff
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

import { mainListItems, secondaryListItems } from "./listItems";

//import component
import Chart from "./Chart";
import Product from "./Product";
import Orders from "./Orders";
import Stock from "./Stock";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Doodepp.co.th
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   "& .MuiDrawer-paper": {
//     position: "relative",
//     whiteSpace: "nowrap",
//     width: drawerWidth,
//     transition: theme.transitions.create("width", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     boxSizing: "border-box",
//     ...(!open && {
//       overflowX: "hidden",
//       transition: theme.transitions.create("width", {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//       }),
//       width: theme.spacing(7),
//       [theme.breakpoints.up("sm")]: {
//         width: theme.spacing(9),
//       },
//     }),
//   },
// }));

const mdTheme = createTheme({
  palette: {
    primary: {
      main: "#001345",
      info: "#e7e8fc",
    },
    secondary: {
      main: "#878787",
    },
  },
});

function DashboardContent(props) {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ border: 1, bgcolor: "primary.info", display: "flex" }}>
        <CssBaseline />

        <AppBar elevation={0} sx={{ bgcolor: "primary" }} position="absolute">
          <Grid container spacing={0.5}>
            <Grid item xs={12}>
              <Toolbar
                sx={{
                  justifyContent: "flex-end",
                }}
              >
                {/* <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  onClick={toggleDrawer}
                  sx={{
                    color: "#878787",
                    marginRight: "36px",
                    ...(open && { display: "none" }),
                  }}
                >
                  <MenuIcon />
                </IconButton> */}

                <IconButton sx={{ marginRight: 2 }} color="secondary">
                  <Badge badgeContent={"99+"} color="error">
                    <NotificationsNoneOutlinedIcon style={{ fontSize: 30 }} />
                  </Badge>
                </IconButton>

                <Avatar
                  sx={{ marginRight: 2 }}
                  alt="velenopy"
                  src="https://cdn.discordapp.com/attachments/744696824220221502/986162718660784188/unknown.png"
                />

                <Typography
                  sx={{ marginRight: 2 }}
                  component="h1"
                  variant="h6"
                  color="inherit"
                  noWrap
                >
                  Ti_TiGER
                </Typography>

                <Link href="/Login" sx={{ mt: 1, color: "#878787" }}>
                  <LogoutIcon style={{ fontSize: 25 }} />
                </Link>
              </Toolbar>
            </Grid>
          </Grid>

          <Paper
            square
            elevation={3}
            sx={{ display: "flex", p: 0.5, pl: 5, ml: 8.88 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={2} sm={4} md={6}>
                <Button>
                  <Typography sx={{ mx: 3 }} component="h2" variant="h7">
                    Home
                  </Typography>
                </Button>

                <Button>
                  <Typography sx={{ mx: 3 }} component="h2" variant="h7">
                    Dashboard
                  </Typography>
                </Button>
                <Button>
                  <Typography sx={{ mx: 3 }} component="h2" variant="h7">
                    Category
                  </Typography>
                </Button>
                <Button>
                  <Typography sx={{ mx: 3 }} component="h2" variant="h7">
                    Tagging
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </AppBar>

        {/* <Drawer variant="permanent" open={open}>
            <Toolbar
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                px: [1],
              }}
            >
              <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
              </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
              {mainListItems}
              <Divider sx={{ my: 1 }} />
            </List>
          </Drawer> */}

        <Box
          component="main"
          sx={{
            border: 1,
            flexGrow: 0,
            display: "flex",
            marginTop: 6,
            borderLeft: 71,
            borderColor: "primary.main",
          }}
        >
          <Container maxWidth="xlg" sx={{ border: 1, mt: 15, ml: 4, mb: 4 }}>
            <Grid container>
              {/* Fluid grids */}
              <Grid item xs={4}>
                {/* Tags Counted */}
                <Grid item xs={12} md={4} lg={3}>
                  <Paper
                    sx={{
                      p: 2,
                      m: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: 96,
                      width: 286,
                    }}
                  >
                    <Typography
                      sx={{ justifyContent: "flex-start", fontSize: "20px" }}
                    >
                      จำนวนสินค้าในคลัง
                    </Typography>
                    <Product />
                  </Paper>
                </Grid>

                {/* Tags Counted */}
                <Grid item xs={12} md={4} lg={3}>
                  <Paper
                    sx={{
                      p: 2,
                      m: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: 96,
                      width: 286,
                    }}
                  >
                    <Typography
                      sx={{ justifyContent: "flex-start", fontSize: "15px" }}
                    >
                      Stock
                    </Typography>
                    <Box sx={{ alignItems: "center" }}>
                      <Stock />
                    </Box>
                  </Paper>
                </Grid>
                {/* Tags Counted */}
                <Grid item xs={12} md={4} lg={3}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      height: 145,
                      width: 286,
                      paddingTop: 8,
                    }}
                  >
                    <Product />
                  </Paper>
                </Grid>
                {/* Tags Counted */}
                <Grid item xs={12} md={4} lg={3}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      height: 145,
                      width: 286,
                      paddingTop: 8,
                    }}
                  >
                    <Product />
                  </Paper>
                </Grid>
              </Grid>

              {/* Fluid grids */}
              <Grid item xs={8}>
                {/* Chart */}
                <Grid item xs={12} md={8} lg={9}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: 260,
                      justifyContent: "center",
                    }}
                  >
                    <Chart />
                  </Paper>
                </Grid>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <Orders />
                </Paper>
              </Grid>
            </Grid>

            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
