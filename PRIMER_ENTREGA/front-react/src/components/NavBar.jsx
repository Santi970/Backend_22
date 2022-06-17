import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/Icon";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";
import CardWidget from "./CardWidget";
import { Grid } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2), //Margen para que no quede pegado el icon. Mutiplicado por 8px
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  title: {
    flexGrow: 1, //flexbox,
  },
  root: {
    "& > *": {
      margin: theme.spacing(2),
      width: "25ch",
    },
  },
  rootMargin: {
    "& .MuiTextField-root": {
      marginRight: theme.spacing(10),
      marginBottom: theme.spacing(2),
      width: 200,
    },
  },
  searchIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backgrounNav: {
    backgroundColor: theme.secondary,
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
}));

//Para elementos que no cambian en el  tiempo es imoprtante memorizarlos. Para que no vuelvar a renderizar
const NavBar = React.memo(({ props, handlerSearch }) => {
  const classes = useStyles();

  const history = useHistory(); //este hooks genera el historial de navegacion

  const search = (e) => {
    e.preventDefault();
    const [{ value }] = e.target; //destructuro el primer elemento y me quedo con la prop value. (para no tener un estado)
    const trimvalue = value.trim();
    if (trimvalue) {
      //si la persona busco algo lo seteamos dentro del estado de la app.
      handlerSearch(trimvalue);
      history.push(`/products?search=${trimvalue}`); //si da enter te lleva a la pagina de products
    }
  };

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.backgrounNav}>
        <IconButton
          color="withe"
          aria-label="menu"
          className={classes.menuButton}
          onClick={() => props.accionAbrir()}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" className={classes.title}>
          TUS COMPRAS
        </Typography>

        <Grid className={classes.searchIcon}>
          <SearchIcon />
          <form
            className={classes.rootMargin}
            noValidate
            autoComplete="on"
            onSubmit={search}
          >
            <TextField
              id="standard-basic"
              label="Que estás buscando?"
            ></TextField>
          </form>
        </Grid>

        <CardWidget />
      </Toolbar>
    </AppBar>
  );
});
export default NavBar;
