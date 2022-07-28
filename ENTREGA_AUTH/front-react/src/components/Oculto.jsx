import React from "react";
import { withWidth, Typography, Hidden } from "@material-ui/core";
import { Button } from "@material-ui/core"; //Componente de material UI

//Puntos de quiebre para hacer responsive https://material-ui.com/customization/breakpoints/#withwidth
const Oculto = (props) => {
  return (
    <div>
      <Typography variant="h6" color="initial">
        Ancho: {props.width}
      </Typography>

      <Hidden xsDown>
        <Button variant="contained" color="primary">
          XS
        </Button>
      </Hidden>
      <Hidden smDown>
        <Button variant="contained" color="primary">
          sm
        </Button>
      </Hidden>
      <Hidden mdUp>
        <Button variant="contained" color="primary">
          md
        </Button>
      </Hidden>
      <Hidden only={["lg", "md"]}>
        <Button variant="contained" color="primary">
          Only lg
        </Button>
      </Hidden>
    </div>
  );
};

export default withWidth()(Oculto); //Visualizar los puntos de quiebre
