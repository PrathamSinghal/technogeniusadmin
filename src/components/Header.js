import {
  AppBar,
  Grid,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { BsPersonFill } from "react-icons/bs";
import { FiPower } from "react-icons/fi";
import { IoMenu } from 'react-icons/io5';
import clsx from 'clsx';

import { PageHeader, SideMenuDrawer } from './ExportComponents'


const drawerWidth = 260;



const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#1a1049f2",
    maxHeight: "60px",
  },
  gridAdmin: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logoutIcon: {
    fontSize: "2rem",
    padding: '5.5px',
    margin: "10px",
    "&:hover": {
        backgroundColor: "#e6e5e963",
        transition: "all ease",
        borderRadius: '19px'
    },
},
adminIcon: {
    fontSize: "2rem",
    padding: '5px',
    margin: "10px",
    "&:hover": {
        backgroundColor: "#e6e5e963",
        transition: "all ease",
        borderRadius: '19px'
    },
},
welcomeAdmin: {
    fontSize: "20px",
    margin: "6px",
    "&:hover": {
        cursor: 'pointer'
    }
  },
  technoHeader: {
    fontSize: "20px",
    margin: "6px",
    "&:hover": {
        cursor: 'pointer'
    }
  },



  appBarr: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    // display: 'none',
  },



}));

export default function Header() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  const handleDrawer = () => {
    if (open === true) {
      setOpen(false);
    } 
    else if (open === false) {
      setOpen(true);
    }
  }


  return (
    <>
    <AppBar position="fixed"
    //  className={classes.appBar}
    className={clsx(classes.appBarr, classes.appBar, {
      // [classes.appBarShift]: open,
    })}
    >
      <Toolbar style={{ display: "flex", flexDirection: "row" }}>
        <Grid container>
          <Grid item className={classes.gridAdmin}>
            <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawer}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
            // onDoubleClick={handleDrawerClose}
            >
              <IoMenu />
            </IconButton>
            <Typography variant="h6" noWrap className={classes.technoHeader}>
              TechnoGenius
            </Typography>
          </Grid>
          <Grid item sm />
          <Grid item className={classes.gridAdmin}>
            <Typography variant="h6" noWrap className={classes.welcomeAdmin}>
              Welcome Admin
            </Typography>
            <BsPersonFill className={classes.adminIcon} />
            <FiPower className={classes.logoutIcon} />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
    <SideMenuDrawer
    drawerWidth={drawerWidth}
    open={open}
    setOpen={setOpen}
    // handleDrawerClose={handleDrawerClose}
    />
    <PageHeader
    open={open}
    />
    </>
  );
}
