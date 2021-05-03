import { Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar } from '@material-ui/core';
import { DashboardRounded } from '@material-ui/icons';
import WebRoundedIcon from "@material-ui/icons/WebRounded";
// import IconButton from '@material-ui/core/IconButton';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';



import React from 'react';

const drawerWidth = 260;

const useStyles = makeStyles(theme => ({
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: '0px',
    width: drawerWidth,
    height: "100%",
    // backgroundColor: "black"
  },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "#14131417",
    },
    drawerContainer: {
        overflow: "auto",
    },





    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },


}))

export default function SideMenuDrawer(props) {


    const { open } = props;

    const classes = useStyles();
    // const theme = useTheme();

    return (
      <div className={classes.sideMenu}>
        <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
      {/*<div className={classes.drawerHeader}>
      <IconButton onClick={handleDrawerClose}>
        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButton>
      </div>*/}
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {["Dashboard", "Manage Opportunities"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? (
                    <DashboardRounded />
                  ) : (
                    <WebRoundedIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      </div>
    )
}