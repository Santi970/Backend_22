import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  spinnerContainer: {
    marginTop: 300,
  },
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
  spinner: {
    whidth: 100,
  },
}));

const Spinner = () => {
  const classes = useStyles();

  return (
    <div className={classes.spinnerContainer}>
      <CircularProgress className={classes.spinner} />
    </div>
  );
};

export default Spinner;
