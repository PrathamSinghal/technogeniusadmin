import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Controls from './controls/Controls';
import { BsFillQuestionDiamondFill } from 'react-icons/bs';




const useStyles = makeStyles(theme => ({
    dialog: {
        position:'absolute',
        top: theme.spacing(5),
        padding:theme.spacing(2)
    },
    dialogContent: {
        textAlign: 'center'
    },
    dialogActions: {
        justifyContent: 'center'
    },
    titleIcon: {
        // backgroundColor: theme.palette.secondary.light,
        // color: theme.palette.secondary.main,
        // '&:hover' : {
            // backgroundColor: theme.palette.secondary.light,
            // color: 'default'
        // },
        // '& .MuiSvgIcon-root' :{
            // fontSize: '8rem'
        // }
        fontSize: '8rem',
    },
    titlebutton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    buttonDesignYes: {
        backgroundColor: '#5d6176e6',
        textTransform: 'none'
    },
    buttonDesignNo: {
        textTransform: 'none'
    }
}))



export default function ConfirmDialog(props) {

    const { confirmDialog, setConfirmDialog } = props;
    const classes = useStyles();
    return (
        <Dialog open={confirmDialog.isOpen} classes={{paper: classes.dialog}}>
            <DialogTitle className={classes.titlebutton}>
                <IconButton disableRipple >
                    <BsFillQuestionDiamondFill className={classes.titleIcon} />
                </IconButton>
            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <Typography variant='h6'>
                    {confirmDialog.title}
                </Typography>
                <Typography variant='subtitle2'>
                    {confirmDialog.subTitle}
                </Typography>
            </DialogContent>

            <DialogActions className={classes.dialogActions}>
                <Controls.Button 
                varient="contained" 
                size="large" 
                color="default" 
                text="No" 
                onClick={() => { setConfirmDialog({ ...confirmDialog ,isOpen: false}) }}
                className = {classes.buttonDesignNo}
                />
                <Controls.Button 
                varient="contained" 
                size="large" 
                color="" 
                text="Yes" 
                onClick={confirmDialog.onConfirm}
                className = {classes.buttonDesignYes}
                />
            </DialogActions>
        </Dialog>
    )
}