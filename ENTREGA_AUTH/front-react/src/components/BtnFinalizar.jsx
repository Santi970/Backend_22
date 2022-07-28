import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  btnFinalizar: {
    margin: 50,
    textDecoration: "none",
  },
});

const BtnFinalizar = () => {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className={classes.btnFinalizar}
      >
        {" "}
        Finalizar Compra
      </Button>
    </div>
  );
};
export default BtnFinalizar;
