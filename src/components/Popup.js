import {
  Dialog,
  DialogContent,
  DialogTitle,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import Controls from "./controls/Controls";
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    padding: theme.spacing(2),
    position: "absolute",
    top: theme.spacing(3),
    maxHeight: "95vh",
    zoom: '90%'
  },
  formHeading: {
    // width: '100%',
    // height: '30px',
    // marginTop: '20px',
    paddingLeft: "15px",
    fontSize: "22px",
    color: "black",
    fontWeight: "bold",
    // marginBottom: '10px',
    flexGrow: '1'
  },
  popupHeading: {
      display: 'flex'
  },
//   dialogTitle: {
//       paddingRight: '0px'
//   }
}));

export default function Popup(props) {
  const { title, children, openPopup, setOpenPopup } = props;

  const classes = useStyles();

  return (
    <Dialog
      open={openPopup}
      maxWidth="lg"
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle>
        <div className={classes.popupHeading}>
          <div className={classes.formHeading}>{title}</div>
          <Controls.ActionButton
           color="secondary"
           onClick={() => {setOpenPopup(false)}}
           >
           <CloseIcon/>
           </Controls.ActionButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
}
