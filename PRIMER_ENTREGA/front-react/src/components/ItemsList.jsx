import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardItem from "./CardIItem";
import { Grid } from "@material-ui/core";
import Spinner from "./Spinner";

const useStyles = makeStyles({
  container: {
    display: "flex",
    paddingBottom: "100px",
    marginRight: "50px",
    marginLeft: "290px",
  },
});

function ItemsList() {
  const classes = useStyles();

  const [loading, setLoading] = useState(true);

  const [items, setItems] = useState([]);

  const getData = async () => {
    const response = await fetch("http://127.0.0.1:4000/api/productos", {
      method: "GET",
    });
    const data = await response.json();
    setItems(data); //Seteo la DATA.
  };

  useEffect(() => {
    getData();
    setLoading(false);
  }, []);
  return (
    <div className={classes.container}>
      <Grid container spacing={8}>
        {loading ? (
          <Spinner />
        ) : (
          <>
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
          </>
        )}
      </Grid>
    </div>
  );
}

export default ItemsList;
