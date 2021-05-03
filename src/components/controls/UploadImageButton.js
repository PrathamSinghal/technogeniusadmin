import React from 'react';
import { FormControl, FormLabel, makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    imageLabel: {
        marginLeft:"18px",
        fontSize:"18px",
        color: "black"
    },
    inputStyle:{
        marginLeft:"20px",
        marginTop:"4px",
        fontSize:"16px",
        color: "black"

    }
}))


export default function UploadImage(props) {

    // const {} = props;

    const classes = useStyles();


    return (
        <>
        <FormControl>
        <FormLabel className={classes.imageLabel}>Upload Image (200px x 200px) *</FormLabel>
        <br/>
        <input
        accept="image/*"
        id="contained-button-file"
        type="file"
        className={classes.inputStyle}
        />
        </FormControl>
        </>
    )
}