import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiFormControl-root": {
        width: "98%",
        margin: theme.spacing(2),
      },
    },
  }));



const useForm = (initialFValues,validateOnChange=false, validate) => {

    const [values,setValues] = useState(initialFValues);
    const [errors,setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name] : value
        })
        if(validateOnChange) {
            validate({[name]: value})
        }
    }

    const resetForm = () => {
        setValues(initialFValues);
        setErrors({});

    }

    return{
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    }

}


const Form = (props) => {
    const classes = useStyles();
    const { children, ...other } = props;

    return (
        <form className={classes.root} autoComplete="off" {...other}>
            {props.children}
        </form>
    )
}

export {
    useForm,
    Form
}