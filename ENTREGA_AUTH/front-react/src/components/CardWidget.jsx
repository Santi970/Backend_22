import React from "react";
import { UseCart } from "../Context/CartContext";
import IconButton from "@material-ui/core/Icon";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Link } from "react-router-dom";
import { Typography, makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
  },
  quantity: {
    size: 5,
  },
  container: {
    display: "flex",
  },
  cart: {
    color: "#686E60",
  },
  title: {
    color: "#000222",
  },
});

const CardWidget = () => {
  const classes = useStyles();

  const { quantity } = UseCart();

  return (
    <Grid className={classes.container}>
      <Link to={`/carrito`} className={classes.link}>
        <IconButton aria-label="addCar" className={classes.cart}>
          <AddShoppingCartIcon />
        </IconButton>
      </Link>
      <Typography variant="h6" className={classes.title}>
        {quantity}
      </Typography>
    </Grid>
  );
};

export default CardWidget;
