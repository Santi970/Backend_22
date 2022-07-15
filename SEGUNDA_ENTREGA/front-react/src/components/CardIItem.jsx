import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import { Link } from "react-router-dom";
import { Divider } from "@material-ui/core";

//ESTE ES EL CARD ITEM QUE SE VE EN EL HOME

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
    minWidth: 345,
    margin: 10,
  },
  media: {
    height: 100,
    paddingTop: "56.25%",
  },
  precio: {
    color: "green",
  },
}));

const CardItem = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link to={`/ItemDetailCard/${props.id}`}>
        <CardMedia
          className={classes.media}
          id={props.id}
          image={props.img}
          title={props.name}
        ></CardMedia>
      </Link>
      <Divider className={classes.divider} />
      <CardHeader
        title={props.name}
        subheader={<small> {new Date().toLocaleString()}</small>}
      />
      <CardContent>
        <Typography
          variant="body2"
          color="green"
          component="p"
          className={classes.precio}
        >
          PRECIO: ${props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default CardItem;
