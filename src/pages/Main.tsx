import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import CodeIcon from "@mui/icons-material/Code";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Playground from "./playground";
import Tooltip from "@mui/material/Tooltip";
import { setSession } from "../features/session/sessionSlice";
import CPTabs from "../components/wigets/Tabs/TabPanel";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import Dialogs from "../components/wigets/Dialogs";
import { setDialog } from "../features/dialog/dialogSlice";
import GitHubIcon from "@mui/icons-material/GitHub";

const drawerWidth = 350;

interface AppBarProps extends MuiAppBarProps {
   open?: boolean;
}

const AppBar = styled(MuiAppBar, {
   shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
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

const Drawer = styled(MuiDrawer, {
   shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
   "& .MuiDrawer-paper": {
      position: "relative",
      whiteSpace: "nowrap",
      width: drawerWidth,
      transition: theme.transitions.create("width", {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: "border-box",
      ...(!open && {
         overflowX: "hidden",
         transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
         }),
         width: 0,
         [theme.breakpoints.up("sm")]: {
            width: 0,
         },
      }),
   },
}));

const mdTheme = createTheme();

function DashboardContent() {
   const [open, setOpen] = React.useState(true);

   const dis = useAppDispatch();
   const session: any = useAppSelector((state) => state.session);
   const dialog: any = useAppSelector((state) => state.dialog);
   const togDM = () =>
      dis(setSession({ ...session, darkMode: !session.darkMode }));

   const dialogCode = () => {
      const open = true,
         title = "Source Code";
      dis(setDialog({ ...dialog, open, title }));
   };

   const dialogExample = () => {
      const open = true,
         title = "Example Objects";
      dis(setDialog({ ...dialog, open, title }));
   };

   const loadGit = () =>
      window.open("https://github.com/mdnelles/anim-3d-obj-npm-publisher");

   const toggleDrawer = () => setOpen(!open);

   return (
      <>
         <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar position='absolute' open={open}>
               <Toolbar
                  sx={{
                     pr: "24px", // keep right padding when drawer closed
                  }}
               >
                  <IconButton
                     edge='start'
                     color='inherit'
                     aria-label='open drawer'
                     onClick={toggleDrawer}
                     sx={{
                        marginRight: "36px",
                        ...(open && { display: "none" }),
                     }}
                  >
                     <MenuIcon />
                  </IconButton>
                  <Box sx={{ flexGrow: 1, ml: -2 }}>3D Playground</Box>
                  <Box sx={{ flexGrow: 1, textAlign: "right" }}>
                     <IconButton onClick={togDM} sx={{ color: "#fff" }}>
                        <Tooltip title='toggle dark mode' sx={{ p: 0 }}>
                           <Brightness4Icon />
                        </Tooltip>
                     </IconButton>
                     <IconButton onClick={dialogExample} sx={{ color: "#fff" }}>
                        <Tooltip title='import example' sx={{ p: 0 }}>
                           <ViewInArIcon />
                        </Tooltip>
                     </IconButton>
                     <IconButton onClick={dialogCode} sx={{ color: "#fff" }}>
                        <Tooltip title='Display React Code' sx={{ p: 0 }}>
                           <CodeIcon />
                        </Tooltip>
                     </IconButton>
                     <IconButton onClick={loadGit} sx={{ color: "#fff" }}>
                        <Tooltip title='Github Docs' sx={{ p: 0 }}>
                           <GitHubIcon />
                        </Tooltip>
                     </IconButton>
                  </Box>
               </Toolbar>
            </AppBar>
            <Drawer variant='permanent' open={open}>
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

               <CPTabs />
            </Drawer>
            <Box
               component='main'
               sx={{
                  backgroundColor: (theme) =>
                     theme.palette.mode === "light"
                        ? theme.palette.grey[100]
                        : theme.palette.grey[900],
                  flexGrow: 1,
                  height: "100vh",
                  overflow: "auto",
               }}
            >
               <Toolbar />
               <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
                  <Playground />
               </Container>
            </Box>
         </Box>
         <Dialogs />
      </>
   );
}

export default function Dashboard() {
   return <DashboardContent />;
}
