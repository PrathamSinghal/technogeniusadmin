import { Grid, makeStyles, } from "@material-ui/core";
import React, { useEffect } from "react";
import { useForm, Form } from "../../components/ExportComponents";
// import { Form } from "../../components/UseForm";
import Controls from "../../components/controls/Controls";

// import { useForm } from '../../components/ExportComponents';

const initialFValues = {
  id: 0,
  subject: "",
  description: "",
  moredetails: "",
  otherdetails: ""
};


const useStyles = makeStyles((theme) => ({
    root: {
      margin: theme.spacing(1),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    },
    label: {
      textTransform: "none"
    },
    buttonAdjust: {
        display: "flex",
        width: "96%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center"
    },
    formHeading: {
        width: '100%',
        height: '30px',
        marginTop: '20px',
        paddingLeft: '34px',
        fontSize:'22px',
        color: 'black',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    InputAdjust:{
      marginRight: '60px'
    }
}))



export default function OpportunitiesForm(props) {

  const { addOrEdit, recordForEdit } = props;

  const classes = useStyles();
  
  const validate = (fieldValues= values) => {
        let temp = {...errors}
        if('subject' in fieldValues)
          temp.subject = fieldValues.subject?"":"Subject is required."
        if('description' in fieldValues)
          temp.description = fieldValues.description?"":"Description is required."
        if('moredetails' in fieldValues)
          temp.moredetails = fieldValues.moredetails?"":"This field is required."
        if('otherdetails' in fieldValues)
          temp.otherdetails = fieldValues.otherdetails?"":"This field is required."
        setErrors({
          ...temp
        })
        
        if(fieldValues === values)
        return Object.values(temp).every(x => x === "")
        
      }
      
      
      const { values, setValues, errors, setErrors, handleInputChange, resetForm } = useForm(initialFValues, true, validate);
      
      const handleSubmit = (e) => {
        e.preventDefault();
        if(validate()){
          addOrEdit(values,resetForm);
        }
    }
      
    useEffect(() => {
      if(recordForEdit != null) {
        setValues({
          ...recordForEdit
        })
      }
    }, [recordForEdit, setValues])


    
  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={12}>
        <Controls.Input
            placeholder="Add Subject"
            name="subject"
            label="Add Subject *"
            value={values.subject}
            onChange={handleInputChange}
            error={errors.subject}
            />
          <Controls.Input
          placeholder="Add Description"
            name="description"
            label="Add Description *"
            value={values.description}
            onChange={handleInputChange}
            error={errors.description}
            className={classes.InputAdjust}
          />
          <Controls.Input
            placeholder="Add More Details"
            name="moredetails"
            label="Add More Details *"
            value={values.moredetails}
            onChange={handleInputChange}
            error={errors.moredetails}
            />
          <Controls.Input
            placeholder="Add Other Details"
            name="otherdetails"
            label="Add Other Details *"
            value={values.otherdetails}
            onChange={handleInputChange}
            error={errors.otherdetails}
          />
          <Controls.UploadImageButton />
          
          <div className={classes.buttonAdjust}>
          <Controls.Button
                text="Submit"
                variant="contained"
                size="Large"
                color="default"
                type="submit"
                // onClick={handleSubmit}
                classes={{root:classes.root,label:classes.label}}
                />
                <Controls.Button
                text="Reset"
                variant="outlined"
                size="Large"
                color=""
                onClick={resetForm}
                classes={{root:classes.root,label:classes.label}}
                />
            </div>
            
            </Grid>
      </Grid>
      </Form>
      );
}

