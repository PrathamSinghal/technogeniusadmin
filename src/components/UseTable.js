import { makeStyles, Table, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@material-ui/core';
import React, { useState } from 'react';


const useStyles = makeStyles(theme => ({
    table: {
        '& tbody tr:hover': {
            // backgroundColor: '#fffbf2',
            cursor: 'pointer',
        },
        // overflowX: 'none'
    },
    container: {
        maxHeight: '77vh',
        // border: '5px solid rgba(224, 224, 224, 1)',
        width:'100%'

    },
    tableHeadStyle: {
        fontWeight: 'bold', backgroundColor: '#fff', fontSize: '16px',
        // border: '4px solid blue',
        
    },
    // pageContent: {
    //     width:'100%',
    //     backgroundColor: 'black',
    //     border: '4px solid black'
    // }
    // tablehead:{
    //     width: '100%',
    //     boxSizing:'border-box',
    //     backgroundColor:'black'
    // }
}))




 

export default function useTable(records,headCells,filterFn) {

    const classes = useStyles();

    const pages = [5,10,25]
    const [page, setPage] = useState(0);
    const [rowsPerPage,setRowsPerPage] = useState(pages[page])


   const TblContainer = props => (
       <TableContainer className={classes.container}>
       {/*<Paper className={classes.pageContent}>*/}
       <Table className={classes.table} 
       stickyHeader 
       aria-label="sticky table"
       >
       {/*<CssBaseline/>*/}
        {props.children}
       </Table>
       {/*</Paper>*/}
   </TableContainer>
   )


   const handleChangePage = (event, newPage)  => {
       setPage(newPage);
   }

   const handleChangeRowsPerPage = event => {
       setRowsPerPage(parseInt(event.target.value,10))
       setPage(0);

    }

    const TblPagination = () => (
        <TablePagination
        component="div"
        page = {page}
        rowsPerPageOptions={pages}
        rowsPerPage={rowsPerPage}
        count= {records.length}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        />
    )

    const recordsAfterPagingAndSorting = () => {
        return records.slice(page*rowsPerPage,(page+1)*rowsPerPage)
    }


   const TblHead = props => {

    // const { minWidth } = props;

    return (
        <TableHead>
            <TableRow>
                {
                    headCells.map(headCell => (
                        // <TableCell key={headCell.id} className={classes.tableHeadStyle} style={{minWidth:headCell.minWidth,maxWidth:headCell.maxWidth,boxShadow: '1px 0px 4px 1px #aaaaaa',align:headCell.align
                        <TableCell key={headCell.id} className={classes.tableHeadStyle} style={{width: 'auto',boxShadow: '1px 0px 4px 1px #aaaaaa'
                    }}>
                            {headCell.label}
                        </TableCell>
                    ))
                }
            </TableRow>
        </TableHead>
    )
   }
   
    return {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    }
}