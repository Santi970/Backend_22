import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { TableFooter } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { UseCart } from "../Context/CartContext";
import Avatar from "@material-ui/core/Avatar";
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    textAlign: "center",
  },
  body: {
    fontSize: 20,
    textAlign: "center",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  container: {
    marginLeft: 370,
    width: 950,
    marginBottom: 50,
  },
  btnVerProductos: {
    width: 140,
    textDecoration: "none",
  },
  rootAvatar: {
    display: "flex",
    "& > *": {
      marginLeft: theme.spacing(9),
    },
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  tableFooter: {
    position: "relative",
    left: 300,
    margin: 10,
    color: "green",
  },
}));

function CartTable(props) {
  const classes = useStyles();

  const { cart, total, removeItem } = UseCart();

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Producto</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right">Precio</StyledTableCell>
            <StyledTableCell align="right">Cantidad</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableFooter>
          <div className={classes.tableFooter}>TOTAL: $ {total}</div>
        </TableFooter>
        <TableBody>
          {cart.map((row, index) => (
            <StyledTableRow key={index}>
              <Link to={`/ItemDetailCard/${row.id}/${row.title}`}>
                <StyledTableCell
                  component="th"
                  scope="row"
                  className={classes.rootAvatar}
                >
                  <Avatar
                    alt="product"
                    src={row.img}
                    className={classes.avatar}
                  />
                </StyledTableCell>
              </Link>
              <StyledTableCell align="right">{row.title}</StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
              <StyledTableCell align="right">{row.cantidad}</StyledTableCell>
              <StyledTableCell align="right">
                <IconButton>
                  <DeleteIcon onClick={() => removeItem(row.id)} />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default CartTable;
