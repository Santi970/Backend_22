import React, { useState } from "react";
import { useEffect } from "react"; // useReducer es como un useState pero mas potente. [estado, disparador]
import CardItem from "../components/CardIItem";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  container: {
    display: "flex",
    paddingBottom: "100px",
    marginRight: "50px",
    marginLeft: "290px",
  },
  titleProductos: {
    margin: "40px",
    textAlign: "center",
  },
});

const Pantalones = () => {
  const classes = useStyles();
  // const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  const getData = async () => {
    const response = await fetch("http://127.0.0.1:4000/api/productos", {
      method: "GET",
    });
    console.log(response);
    const data = await response.json();
    setItems(data);
  };

  useEffect(() => {
    getData();
    // setLoading(false);
  }, []);

  return (
    <>
      <Typography
        variant="h4"
        display="block"
        className={classes.titleProductos}
      >
        <h2> PANTALONES </h2>
      </Typography>
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
    </>
  );
};

export default Pantalones;
