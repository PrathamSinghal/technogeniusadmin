import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'sq', label: 'Sq.', minWidth: 100 },
  { id: 'name', label: 'Name', minWidth: 320, align: 'center' },
  {
    id: 'description',
    label: 'Description',
    minWidth: 340,
    align: 'center',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'image',
    label: 'Image',
    minWidth: 30,
    align: 'right',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'edit',
    label: 'Edit',
    minWidth: 30,
    align: 'right',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'delet',
    label: 'Delete',
    minWidth: 30,
    align: 'right',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'block',
    label: 'Block',
    minWidth: 30,
    align: 'right',
    // format: (value) => value.toLocaleString('en-US'),
  }
];

function createData(sq, name, description, image, edit, delet, block) {
//   const density = population / size;
  return { sq, name, description, image, edit, delet, block };
}

const rows = [
  createData(1,'Water Suppliers', 'Life starts with water', 'Image here', 'Edit Icon', 'delete icon' ,'blockicon'),
  createData(2,'Water Suppliers', 'Life starts with water', 'Image here', 'Edit Icon', 'delete icon' ,'blockicon'),
  createData(3,'Water Suppliers', 'Life starts with water', 'Image here', 'Edit Icon', 'delete icon' ,'blockicon'),
  createData(4,'Water Suppliers', 'Life starts with water', 'Image here', 'Edit Icon', 'delete icon' ,'blockicon'),
  createData(5,'Water Suppliers', 'Life starts with water', 'Image here', 'Edit Icon', 'delete icon' ,'blockicon'),
  createData(6,'Water Suppliers', 'Life starts with water', 'Image here', 'Edit Icon', 'delete icon' ,'blockicon'),
  createData(7,'Water Suppliers', 'Life starts with water', 'Image here', 'Edit Icon', 'delete icon' ,'blockicon'),
  createData(8,'Water Suppliers', 'Life starts with water', 'Image here', 'Edit Icon', 'delete icon' ,'blockicon'),
  createData(9,'Water Suppliers', 'Life starts with water', 'Image here', 'Edit Icon', 'delete icon' ,'blockicon'),
  createData(10,'Water Suppliers', 'Life starts with water', 'Image here', 'Edit Icon', 'delete icon' ,'blockicon'),
  createData(11,'Water Suppliers', 'Life starts with water', 'Image here', 'Edit Icon', 'delete icon' ,'blockicon'),
  createData(12,'Water Suppliers', 'Life starts with water', 'Image here', 'Edit Icon', 'delete icon' ,'blockicon'),
  createData(13,'Water Suppliers', 'Life starts with water', 'Image here', 'Edit Icon', 'delete icon' ,'blockicon'),
  
];

const useStyles = makeStyles({
  root: {
    width: '100%',
    zoom:"94%"
  },
  container: {
    maxHeight: '75vh',
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, fontWeight: 'bold', backgroundColor: '#fff', fontSize: '16px'  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align} style={{ fontWeight: 'bold', backgroundColor: '#fff', fontSize: '16px' }}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
