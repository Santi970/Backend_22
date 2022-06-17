import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CartTable from "./../components/CartTable";
import { firebase } from "@firebase/app";
import "firebase/firestore";
import Formulario from "./../components/Formulario";
import { UseCart } from "../Context/CartContext";
import { UseForm } from "../Context/FormContext";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    paddingBottom: "10px",
    alignItems: "rigth",
    marginLeft: 140,
  },
  vaciarCarrito: {
    position: "relative",
    left: 120,
  },
  pagarCarrito: {
    position: "relative",
    left: 140,
    marginBottom: 50,
  },
  title: {
    backgroundColor: theme.primary,
  },
  ordenCompra: {
    marginLeft: theme.spacing(40),
    height: theme.spacing(40)
  },
}));

const Cart = () => {
  const [id, setId] = useState([]); //NUEVO

  //const [userInfo,  setUserInfo] = useState([]) //NUEVO
  // const [price, setPrice] = useState([]);

  const [setPrice] = useState([]); //NUEVO guardamos en estado el valor ingresado.

  var db = firebase.firestore();
  const ordersColection = db.collection("orders"); //A esta coleccion le agregamos newOrders

  const classes = useStyles();

  const { cart, clearCart, total } = UseCart();

  const { userInfo } = UseForm();

  const [cartItems, setCartItems] = useState(null);

  useEffect(() => {
    if (cart) {
      setCartItems(cart);
    } else {
      setCartItems([]);
    }
  }, []);

  // var newOrder = {
  //   buyer: userInfo,
  //   date: firebase.firestore.Timestamp.fromDate(new Date()),
  //   items: cart,
  //   total: total,
  // };

  const sendOrder = async () => {
    console.log('Este es el cart', cart)
    try{
        const url = `http://localhost:4000/api/carritos`;
        const params = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cart)
        }
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    }catch(err){
        console.log(`Error al registrar ${err}`);
        return null;
    }
};


  //Creando
  // const sendOrder = () => {
  //   ordersColection
  //     .add(newOrder)
  //     .then(({ id }) => {
  //       setId(id);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     })
  //     .finally(console.log("se termino"));
  // };

  // function savePrice(e) {
  //   //que retoren el precio total. ver si hace falta
  //   setPrice(e.target.value);
  // }

  //Actualizamos lo que querramos.
  // function upDateData() {
  //   const docRef = db.colection("orders").doc(id);
  //   docRef.update({ cantidad: cart.cantidad });
  // }

  return (
    <>
    
      {cartItems && cartItems.length === 0 && (
        <>
          <h2>Comienza a comprar!</h2>
          <h2>Tu carrito esta vacio</h2>
        </>
      )}
      {cartItems && cart.length !== 0 &&  cartItems.length !== 0 &&  (
        <>
          <Grid>
            <CartTable />
            <Button
              variant="contained"
              color="primary"
              className={classes.vaciarCarrito}
              onClick={clearCart}
            >
              {" "}
              Vaciar Carrito
            </Button>
          </Grid>

          <Grid className={classes.ordenCompra}>
            <Formulario />
          </Grid>
          <Button
            variant="contained"
            color="primary"
            className={classes.pagarCarrito}
            onClick={sendOrder}
          >
            {" "}
            Orden de compra
          </Button>
        </>
      )}
    </>
  );
};

export default Cart;
