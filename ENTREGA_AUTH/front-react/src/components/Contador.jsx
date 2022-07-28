import React, { useState } from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Swal from "sweetalert2";

const useStyles = makeStyles({
  contador: {
    marginTop: 20,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  btnAddToCar: {
    margin: 20,
  },
  cantidad: {
    fontSize: 17,
    margin: 10,
  },
  btngoup: {},
});

const Contador = (props) => {
  const classes = useStyles();
  const [cantidad, setClicks] = useState(props.initial);

  const stock = props.stock;

  const aumentarContador = () => {
    if (cantidad <= stock - 1) {
      setClicks(cantidad + 1);
    } else {
      Button.disabled = false;
      alert(`Ups! Tenemos solo ${cantidad} de estos productos en stock`);
    }
  };

  const restarContador = () => {
    if (cantidad > 1) setClicks(cantidad - 1);
  };

  function addToCart() {
    props.onAdd(cantidad);
    Swal.fire({
      title: "Genial!",
      text: `Se agrego ${cantidad} producto al carrito `,
      icon: "success",
      footer: "<span>Gracias!</span>",
      height: "30%",
      width: "30%",
      timer: 1800,
      toast: true,
      marginTop: "200px",
      position: "bottom-right",
      showConfirmButton: false,
      allowOutsideClick: true,
      customClass: { popup: "popup-class" },
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  }

  return (
    <>
      <Grid className={classes.contador}>
        <Typography
          variant="body2"
          color="textSecondary"
          component="h2"
          className={classes.cantidad}
        >
          Cantidad {cantidad}
        </Typography>
        <ButtonGroup
          disableElevation
          variant="contained"
          color="primary"
          className={classes.btngoup}
        >
          <Button onClick={aumentarContador}> + </Button>
          <Button onClick={restarContador}> - </Button>
        </ButtonGroup>

        <Button
          onClick={addToCart}
          variant="contained"
          color="primary"
          className={classes.btnAddToCar}
        >
          Agregar al carrito
        </Button>
      </Grid>
    </>
  );
};

export default Contador;
