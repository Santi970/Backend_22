import React from "react";
import Listas from "./Listas";
import { makeStyles, Drawer, Divider } from "@material-ui/core";

const drawerWidth = 240;

const estilos = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
}));

const Box = (props) => {
  const classes = estilos();

  return (
    <Drawer
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
      variant={props.variant}
      open={props.open}
      onClose={props.onClose ? props.onClose : null} //preguntamos si viene algo y si es asi ejecuta la accion del contenedor padre "Abrir"
    >
      <div className={classes.toolbar}></div>

      <Divider />
      <Listas />
    </Drawer>
  );
};

export default Box;
