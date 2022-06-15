import * as React from "react";
import PropTypes from "prop-types";

// MUI import
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import MuiDrawer from "@mui/material/Drawer";
import Avatar from "@mui/material/Avatar";
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
import Box from "@mui/material/Box";
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
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

import { mainListItems, secondaryListItems } from "./listItems";

//import component
import Chart from "./Chart";
import Product from "./Product";
import Orders from "./Orders";
import Stock from "./Stock";
import Exported from "./Exported";
import Remaining from "./Remaining";

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
            sx={{ display: "flex", p: 0.5, pl: 5, ml: 9 }}
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
            flexGrow: 0,
            display: "flex",
            marginTop: 6,
            borderLeft: 71,
            borderColor: "primary.main",
          }}
        >
          <Container maxWidth="xlg" sx={{ mt: 15, mb: 4 }}>
            <Grid container>
              {/* Fluid grids */}
              <Grid item xs={3}>
                {/* Tags Counted */}
                <Box
                  sx={{
                    pl: 2,
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Paper
                    sx={{
                      p: 2,
                      mb: 2,
                      display: "flex",
                      borderRadius: "11px",
                      flexDirection: "column",
                      height: 145,
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

                  {/* Tags Counted */}

                  <Paper
                    sx={{
                      p: 2,
                      mb: 2,
                      display: "flex",
                      borderRadius: "11px",
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

                  {/* Tags Counted */}

                  <Paper
                    sx={{
                      p: 2,
                      mb: 2,
                      display: "flex",
                      borderRadius: "11px",
                      flexDirection: "column",
                      height: 96,
                      width: 286,
                    }}
                  >
                    <Typography
                      sx={{ justifyContent: "flex-start", fontSize: "15px" }}
                    >
                      Stock Exported
                    </Typography>
                    <Box sx={{ alignItems: "center" }}>
                      <Stock />
                    </Box>
                  </Paper>

                  {/* Tags Counted */}

                  <Paper
                    sx={{
                      p: 2,
                      mb: 2,
                      display: "flex",
                      borderRadius: "11px",
                      flexDirection: "column",
                      height: 96,
                      width: 286,
                    }}
                  >
                    <Typography
                      sx={{ justifyContent: "flex-start", fontSize: "15px" }}
                    >
                      Stock Remaining
                    </Typography>
                    <Box sx={{ alignItems: "center" }}>
                      <Stock />
                    </Box>
                  </Paper>

                  <Paper
                    sx={{
                      p: 2,

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "11px",
                      flexDirection: "column",
                      height: 206,
                      width: 292,
                    }}
                  >
                    <Typography
                      sx={{ justifyContent: "flex-start", fontSize: "16px" }}
                    >
                      <ShowChartOutlinedIcon sx={{ color: "#DB5116" }} />
                      Stock
                    </Typography>
                    <Typography
                      sx={{ justifyContent: "flex-start", fontSize: "16px" }}
                    >
                      <ShowChartOutlinedIcon sx={{ color: "#0A3000" }} />
                      Exported
                    </Typography>
                    <Typography
                      sx={{ justifyContent: "flex-start", fontSize: "16px" }}
                    >
                      <ShowChartOutlinedIcon sx={{ color: "#000CF9" }} />
                      Remaining
                    </Typography>
                  </Paper>
                </Box>
              </Grid>

              {/* Fluid grids */}
              <Grid container item xs={9} sx={{ display: "flex" }}>
                {/* Chart */}

                <Paper
                  sx={{
                    p: 2,
                    pl: 4,
                    mr: 5.5,
                    display: "flex",
                    flexDirection: "column",
                    width: 457,
                    height: 243,
                    borderRadius: "11px",
                    justifyContent: "center",
                  }}
                >
                  <Exported />
                </Paper>

                <Paper
                  sx={{
                    p: 2,
                    mb: 2,
                    display: "flex",
                    flexDirection: "column",
                    width: 457,
                    height: 243,
                    borderRadius: "11px",
                    justifyContent: "center",
                  }}
                >
                  <Remaining />
                </Paper>

                {/* Recent Orders */}
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "11px",
                    width: 956,
                    height: 444,
                  }}
                >
                  <Chart />
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
