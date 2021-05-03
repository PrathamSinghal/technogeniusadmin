// import { Card, makeStyles, Paper, Toolbar, Typography } from '@material-ui/core';
// import React from 'react';

// import Controls from "../components/controls/Controls";



// const useStyles = makeStyles((theme) => ({
//     category: {
//         width: "100%",
//         height: "40px",
//         marginBottom: "20px",
//         display: "flex",
//         alignItems: "center",
//       },
//       categoryHeading: {
//         fontWeight: "bold",
//         position: "absolute",
//         marginLeft: "20px",
//         // width: '85%'
//         fontSize: "20px",
//       },
//       categoryButton: {
//         backgroundColor: "#1a1049f2",
//         textTransform: "none",
//         position: "absolute",
//         right: "40px",
//       },
// }));



// export default function PageHeader(props) {

//     const classes = useStyles();

//     const { title, subTitle } = props;

//     return (
//         <>
//             <Paper elevation={0} square>
//             <Toolbar />
//             <div className={classes.category}>
//               <Typography variant="h5" noWrap className={classes.categoryHeading}>
//                 Manage Opportunities
//               </Typography>
//               <Controls.Button
//                 text="Add Opportunities"
//                 size="large"
//                 varient="contained"
//                 color="primary"
//                 className={classes.categoryButton}
//                 onClick={() => {
//                 //   setOpenPopup(true);
//                 //   setRecordForEdit(null);
//                 }}
//               />
//               </div>
//                 {/*<div>
//                     <Typography
//                     variant="h6"
//                     component="div"
//                     >
//                     {title}
//                     </Typography>
//                     <Typography
//                     variant="subtitle2"
//                     component="div"
//                     >
//                     {subTitle}
//                     </Typography>
//                 </div>*/}
//             </Paper>
//         </>
//     )
// }