import React from "react";
import { CssBaseline, makeStyles} from "@material-ui/core";
import { Header } from '../../components/ExportComponents';

// import { BsTrash } from "react-icons/bs";
// import { FiEdit } from "react-icons/fi";
// import {
//   Toolbar,
//   Typography,
//   makeStyles,
//   Paper,
//   TableBody,
//   TableCell,
//   TableRow,
//   CssBaseline,
// } from "@material-ui/core";
// // import Controls from "../components/controls/Controls";
// import {
//   ConfirmDialog,
//   Popup,
//   Notification,
//   UseTable,
// } from "../../components/ExportComponents";
// import { AddOpportunities } from "../../pages/ExportPages";
// import * as opportunityService from "../../services/opportunityService";
// // import AddOpportunities from "../../pages/AddOpportunities/AddOpportunities";
// // import ConfirmDialog from '../../components/ConfirmDialog';
// // // import Header from '../../components/Header';
// // import Notification from '../../components/Notification';
// // import Popup from "../../components/Popup";
// // // import SideMenuDrawer from '../../components/SideMenuDrawer';
// // import useTable from "../../components/UseTable";
// // import Button from "../../components/controls/Button";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#fff",
  },
  appMain:{
    // paddingLeft: '260px',
    width: '100%'
  }
}));





export default function ClippedDrawer() {
  
  const classes = useStyles();

  return (
    <>
  {/*<SideMenuDrawer/>*/}
      <div className={classes.appMain}>
        <Header/>
        {/*<PageHeaderr/>*/}
        {/*<PageHeader/>*/}
      </div>
      <CssBaseline/>



    </>



    //     <CssBaseline />
    // {/*<div className={classes.root}>*/}
  //     <Header/>
  //     <SideMenuDrawer/>
  //     <PageHeaderr
  //     title="Page Header"
  //     subTitle="Page Description"
  //     />
      
  // </div>*/}
  );
}
