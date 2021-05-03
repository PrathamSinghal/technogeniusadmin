import React from "react";
import { FormControl, FormLabel, makeStyles, TextField } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    LabelAdjust : {
        marginLeft:"18px",
        fontSize:"16px",
        color: "black"
    }
}))




export default function Input(props) {
  const { name, label, value, error=null, onChange, placeholder } = props;
    const classes = useStyles();


  return (
    <>
      <FormControl>
        <FormLabel className={classes.LabelAdjust}>{label}</FormLabel>
        <TextField
          variant="outlined"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          {...(error && {error: true, helperText:error})}
          multiline
          />
      </FormControl>
    </>
  );
}
