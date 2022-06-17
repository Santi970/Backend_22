import React from "react";
import NavBar from "./NavBar";
import Box from "./Box";
import Formulario from "./Formulario";
import CicloDeVida from "../components/CicloDeVida";
import FetchApi from "../components/FetchApi";
import Routes from "../Routes/Routes"; //nuevo
import { useState } from "react"; //nuevo

import { Hidden, makeStyles } from "@material-ui/core";

const estilos = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  size: {
    width: 100,
  },

  mTopform: {
    marginTop: 120,
    alignItems: "center",
    marginLeft: 300,
  },
}));

const Contenedor = () => {
  const [search, setSearch] = useState(null); //nuevo
  const handlerSearch = (product) => setSearch(product); //nuevo

  const classes = estilos();
  const [abrir, setAbrir] = React.useState(false);

  const accionAbrir = () => {
    setAbrir(!abrir);
  };

  return (
    <div className={classes.root}>
      <NavBar accionAbrir={accionAbrir} />
      <Hidden xsDown>
        <Box
          variant="permanent"
          open={true} //nuestro cajon de xsdown
        />
      </Hidden>
      <Hidden smUp>
        <Box
          variant="temporary"
          open={abrir} //nuestro cajon de xsdown
          onClose={accionAbrir}
        />
      </Hidden>
      <div className={classes.content}>
        <div className={classes.toolbar}> </div>
        <div className={classes.toolbar}></div>
        <section>
          <hr />
          <Routes search={search} handlerSearch={handlerSearch} />
        </section>
        <hr />

        <section>
          <FetchApi />
          <CicloDeVida />
        </section>
        <hr />

        <section className={classes.mTopform}>
          <Formulario />
        </section>
        <hr />
      </div>
    </div>
  );
};

export default Contenedor;
