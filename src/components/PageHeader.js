import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import {
  Toolbar,
  Typography,
  makeStyles,
  Paper,
  TableBody,
  TableCell,
  TableRow,
  // CssBaseline,
} from "@material-ui/core";
import Controls from "../components/controls/Controls";
import {
  ConfirmDialog,
  Popup,
  Notification,
  UseTable,
} from "../components/ExportComponents";
import { AddOpportunities } from "../pages/ExportPages";
import * as opportunityService from "../services/opportunityService";

import clsx from "clsx";

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    backgroundColor: "#fff",
  },
  content: {
    // flexGrow: 1,
    padding: theme.spacing(2.5),
  },
  category: {
    width: "100%",
    height: "40px",
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
  },
  categoryHeading: {
    fontWeight: "bold",
    position: "absolute",
    marginLeft: "20px",
    // width: '85%'
    fontSize: "20px",
  },
  categoryButton: {
    backgroundColor: "#1a1049f2",
    textTransform: "none",
    position: "absolute",
    right: "40px",
  },
  pageContent: {
    // backgroundColor: 'blue',
    width: "100%",
    // height: "100vh",
  },
  paperRoot: {
    width: "100%",
  },
  tableCellStyle: {
    fontWeight: "400",
    fontSize: "16px",
    backgroundColor: "#fff",
    // color: 'black',
    boxShadow: "1.5px 1.5px 3px 1px #aaaaaa",
  },
  tableIdStyle: {
    fontWeight: "600",
    fontSize: "16px",
    backgroundColor: "#fff",
    boxShadow: "1.5px 1.5px 3px 1px #aaaaaa",
  },

  contentt: {
    flexGrow: 1,
    // padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    paddingLeft: -drawerWidth,
    // marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  },
}));

const headCells = [
  {
    id: "id",
    label: "Sq.",
    // maxWidth: '10%'
  },
  {
    id: "subject",
    label: "Subject",
    // minWidth: '40%'
  },
  {
    id: "description",
    label: "Description",
    minWidth: "30%",
  },
  {
    id: "moredetails",
    label: "More Details",
    // minWidth: '10%'
  },
  {
    id: "otherdetails",
    label: "Other Details",
    // minWidth: '10%'
  },
  {
    id: "edit",
    label: "Edit",
    // maxWidth: 10,
    // minWidth: '6%',
    // align:'center'
  },
  {
    id: "delete",
    label: "Delete",
    // maxWidth: '20px',
    // minWidth: '10px',
    // align:'right'
  },
];

export default function PageHeader(props) {
  const { open } = props;

  const [openPopup, setOpenPopup] = useState(false);
  const [records, setRecords] = useState(
    opportunityService.getAllOpportunities()
  );
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });

  const classes = useStyles();
  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting,
  } = UseTable(records, headCells);

  const addOrEdit = (opportunity, resetForm) => {
    if (opportunity.id === 0) {
      opportunityService.insertOpportunities(opportunity);
    } else {
      opportunityService.updateOpportunity(opportunity);
    }
    resetForm();
    setRecordForEdit(null);
    setOpenPopup(false);
    setRecords(opportunityService.getAllOpportunities());
    setNotify({
      isOpen: true,
      message: "Submitted Successfully",
      type: "success",
    });
  };

  const openInPopup = (item) => {
    setRecordForEdit(item);
    setOpenPopup(true);
  };

  const onDelete = (id) => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    opportunityService.deleteOpportunity(id);
    setRecords(opportunityService.getAllOpportunities());
    setNotify({
      isOpen: true,
      message: "Deleted Successfully",
      type: "error",
    });
  };

  return (
    <>
      <main
        className={clsx(classes.contentt, {
          [classes.contentShift]: open,
        })}
      >
        {/*<div className={classes.drawerHeader} />*/}
        <Paper className={classes.root}>
          <div className={classes.content}>
            {/*<CssBaseline />*/}
            <Toolbar />
            <div className={classes.category}>
              <Typography
                variant="h5"
                noWrap
                className={classes.categoryHeading}
              >
                Manage Opportunities
              </Typography>
              <Controls.Button
                text="Add Opportunities"
                size="large"
                varient="contained"
                color="primary"
                className={classes.categoryButton}
                onClick={() => {
                  setOpenPopup(true);
                  setRecordForEdit(null);
                }}
              />
            </div>
            {/*<CssBaseline/>*/}
            <Paper className={classes.pageContent}>
              <TblContainer>
                <TblHead />
                <TableBody>
                  {recordsAfterPagingAndSorting().map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className={classes.tableIdStyle}>
                        {item.id}
                      </TableCell>
                      <TableCell className={classes.tableCellStyle}>
                        {item.subject}
                      </TableCell>
                      <TableCell className={classes.tableCellStyle}>
                        {item.description}
                      </TableCell>
                      <TableCell className={classes.tableCellStyle}>
                        {item.moredetails}
                      </TableCell>
                      <TableCell className={classes.tableCellStyle}>
                        {item.otherdetails}
                      </TableCell>
                      <TableCell className={classes.tableCellStyle}>
                        <Controls.ActionButton
                          onClick={() => {
                            openInPopup(item);
                          }}
                        >
                          <FiEdit
                            fontSize="large"
                            style={{
                              fontWeight: "600",
                              color: "blue",
                              fontSize: "20px",
                            }}
                          />
                        </Controls.ActionButton>
                      </TableCell>
                      <TableCell className={classes.tableCellStyle}>
                        <Controls.ActionButton
                          onClick={() => {
                            setConfirmDialog({
                              isOpen: true,
                              title: "Are you sure to delete this record",
                              subTitle: `You can't undo this operation`,
                              onConfirm: () => {
                                onDelete(item.id);
                              },
                            });
                            // onDelete(item.id);
                          }}
                        >
                          <BsTrash
                            fontSize="large"
                            style={{
                              color: "red",
                              fontWeight: "600",
                              fontSize: "20px",
                            }}
                          />
                        </Controls.ActionButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </TblContainer>
              <TblPagination />
            </Paper>
            <Popup
              openPopup={openPopup}
              setOpenPopup={setOpenPopup}
              title="Add Opportunity"
            >
              <AddOpportunities
                addOrEdit={addOrEdit}
                recordForEdit={recordForEdit}
              />
            </Popup>
            <Notification notify={notify} setNotify={setNotify} />
            <ConfirmDialog
              confirmDialog={confirmDialog}
              setConfirmDialog={setConfirmDialog}
            />
          </div>
        </Paper>
      </main>
    </>
  );
}
