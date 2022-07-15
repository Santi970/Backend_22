import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { UseForm } from "../Context/FormContext";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  miBotonPersonalizado: {
    border: 0,
    borderRadius: 3,
    background: theme.primary,
    marginLeft: 130,
    color: theme.primary,
    height: 48,
    padding: "0 30px",
    marginTop: 40,
    width: "30ch",
    alignItems: "center",
    marginBottom: 40,
    marginRight: 390,
  },
  miInputPersonalizado: {
    color: "white",
  },
  miInputPersonalizadoMargin: {
    color: "white",
    marginTop: 50,
  },
  containerForm: {
    marginTop: 50,
    backgroundColor: "#2C2E43",
    width: "60ch",
    height: "22ch",
    padding: "0 10px 0px 200px",
  },
}));

const Formulario = () => {
  const classes = useStyles();

  const { saveForm } = UseForm();

  const initialDataForm = {
    name: "",
    email: "",
    phone: "",
  };
  const [dataForm, setDataForm] = useState(initialDataForm);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const handleSubmit = (e) => {
    //recibe la info del evento
    e.preventDefault();
    console.log(dataForm);
    saveForm(dataForm);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.containerForm}>
      <Grid container spacing={3}>
        <Grid item md={3}>
          <FormControl className={classes.miInputPersonalizadoMargin}>
            <InputLabel htmlFor="name" className={classes.miInputPersonalizado}>
              {" "}
              Nombre{" "}
            </InputLabel>
            <Input
              onChange={handleInputChange}
              id="name"
              type="name"
              name="name"
              aria-describedby="name-helper"
              className={classes.miInputPersonalizado}
            />
            <FormHelperText
              id="name-helper"
              className={classes.miInputPersonalizado}
            >
              {" "}
              Coloca tu nombre
            </FormHelperText>
          </FormControl>
        </Grid>

        <Grid item md={3}>
          <FormControl className={classes.miInputPersonalizadoMargin}>
            <InputLabel
              htmlFor="email"
              className={classes.miInputPersonalizado}
            >
              {" "}
              Email{" "}
            </InputLabel>
            <Input
              onChange={handleInputChange}
              id="email"
              type="email"
              name="email"
              aria-describedby="email-helper"
              className={classes.miInputPersonalizado}
            />
            <FormHelperText
              id="email-helper"
              className={classes.miInputPersonalizado}
            >
              {" "}
              Coloca tu email
            </FormHelperText>
          </FormControl>
        </Grid>

        <Grid item md={3}>
          <FormControl className={classes.miInputPersonalizadoMargin}>
            <InputLabel
              htmlFor="phone"
              className={classes.miInputPersonalizado}
            >
              {" "}
              Phone{" "}
            </InputLabel>
            <Input
              onChange={handleInputChange}
              id="phone"
              type="phone"
              name="phone"
              aria-describedby="phone-helper"
              className={classes.miInputPersonalizado}
            />
            <FormHelperText
              id="phone-helper"
              className={classes.miInputPersonalizado}
            >
              {" "}
              Coloca tu telefono
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item md={12}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={classes.miBotonPersonalizado}
          >
            Guardar Datos
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Formulario;
