import React from "react";
import { useEffect, useState } from "react";
import { getFirestore } from "../firebase/firebase";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import CardItem from "./CardIItem";

const useStyles = makeStyles({
  container: {
    display: "flex",
    paddingBottom: "100px",
    marginRight: "50px",
    marginLeft: "290px",
  },
});

const FetchProducts = () => {
  const classes = useStyles();
  const db = getFirestore();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    const response = await fetch("http://localhost:4000/api/productos", {
      method: "GET",
    });
    console.log(response);
    const data = await response.json();
    setItems(data);
  };

  useEffect(() => {
    getData();
    setLoading(false);
  }, []);

  return (
    <div className={classes.container}>
      {console.log(items)}
      <Grid container spacing={8}>
        {items.map((props, index) => (
          <>
            <CardItem
              key={index}
              id={props.id}
              name={props.title}
              description={props.price}
              img={props.imageId}
            ></CardItem>
          </>
        ))}
      </Grid>
    </div>
  );
};

export default FetchProducts;
