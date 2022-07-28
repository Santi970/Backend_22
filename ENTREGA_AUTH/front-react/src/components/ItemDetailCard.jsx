import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Contador from "./../components/Contador";
import { Divider } from "@material-ui/core";
import BtnFinalizar from "./../components/BtnFinalizar";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { UseCart } from "../Context/CartContext";
import { getFirestore } from "./../firebase/firebase";

const useStyles = makeStyles({
  container: {
    width: 800,
  },
  root: {
    position: "relative",
    left: 100,
    display: "flex",
    alignItems: "center",
  },
  media: {
    height: 400,
    width: 400,

    marginRigth: 20,
  },
  divider: {
    marginTop: 20,
  },
  cardContent: {
    width: 100,
  },
  btnAddToCar: {
    marginBottom: 20,
  },
  precio: {
    color: "green",
  },
  link: {
    textDecoration: "none",
  },
});

const ItemDetailCard = (props) => {
  const classes = useStyles();

  const [cantidad, setCantidad] = useState(0); //cantidad de objeto en el carrito

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { AddToCart, cart } = UseCart(); //UseContext(CartContext)-> consumer

  //Props para la url
  let id = useParams().id;

    
  useEffect(() => {
    setLoading(true)
    const getData = async () => {
      const response = await fetch(`http://localhost:4000/api/productos/${id}`, {
        method: "GET",
      });
      const data = await response.json();
      setItems(data[0]); //Seteo la DATA.
    };
    getData();
  }, []);


  //Aca de guarda al carrito Context.
  function addToCart(cantidad) {
    setCantidad(props.cantidad);

    const productObject = {
      id: items.id,
      title: items.title,
      price: items.price,
      img: items.thumbnail,
      cantidad: cantidad,
    };

    AddToCart(productObject, cantidad);

    //Convertimos objeto a una cadena JSON, y lo guardamos en el localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  return (
    <Grid className={classes.container} spacing={8}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            component="img"
            alt="ProductoDetalle"
            heigth="400"
            image={items.thumbnail}
            title={items.title}
          />
        </CardActionArea>
        <CardContent classes={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {items.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="H2"
            className={classes.precio}
          >
            Precio: ${items.price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            Stock: {items.available_quantity}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Condicion: {items.condition}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Cantidad Vendida: {items.sold_quantity}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
          ></Typography>

          <Divider className={classes.divider} />

          {cantidad === 0 ? (
            <>
              <Contador
                onAdd={addToCart}
                initial={1}
                stock={items.available_quantity}
              />
            </>
          ) : (
            <Link to={`/`} classes={classes.link}>
              <BtnFinalizar />
            </Link>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ItemDetailCard;
