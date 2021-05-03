import { Paper } from '@material-ui/core';
import React from 'react';
import AddOpportunitiesForm from './AddOpportunitiesForm';

// const useStyles = makeStyles(theme => ({
//   pageContent: {
//     // margin: theme.spacing(5),
//     // padding: theme.spacing(3)
//   }
// }))






export default function AddOpportunities(props) {

  const { addOrEdit, recordForEdit } = props;
  // const classes = useStyles();


  return (
    <>
    <Paper 
    // <className={classes.pageContent}
    >
      <AddOpportunitiesForm
      addOrEdit= {addOrEdit}
      recordForEdit={recordForEdit}
      />
    </Paper>    
    </>
  );
}
