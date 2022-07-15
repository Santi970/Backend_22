import React, { useState } from "react";
import { useEffect } from "react"; // useReducer es como un useState pero mas potente. [estado, disparador]
import PropTypes from "prop-types"; //sistema de definicion de tipos
import CardItem from "../../components/CardIItem";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    paddingBottom: "100px",
    marginRight: "50px",
    marginLeft: "290px",
  },
});

const Products = ({ search }) => {
  const classes = useStyles();
  const [items, setItems] = useState([]);

  const getProducts = async () => {
    try {
      const resultProducts = `http://localhost:4000/api/productos`;
      const params = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(resultProducts, params);
      const result = await response.json();
      setItems(result);
    } catch (err) {
      console.log(`Error ${err}`);
    }
  };
  // En useEffect no se puede poner algo ascincronico por eso el getProducts()
  useEffect(() => {
    getProducts();
  }, [search]); //el useEffect se dispara cuando cambia el search.

  return (
    <div className={classes.container}>
      <Grid container spacing={8}>
        {items.map((props, index) => (
          <>
            <CardItem
              key={index}
              id={props.id}
              name={props.title}
              description={props.price}
              img={props.thumbnail}
            ></CardItem>
          </>
        ))}
      </Grid>
    </div>
  );
};

//Sistema de tipos para decidir que elementos admite un componente y cual no.
Products.propTypes = {
  search: PropTypes.string,
};

export default Products;
