import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";
import Button from "../components/Button";
import Typography from "../components/Typography";
import backgroundImage from "../images/background-image.jpg";
import ProductHeroLayout from "./ProductHeroLayout";

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "center",
  },
  input: {
    display: "none",
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const { classes } = props;

  const uploadPhoto = (event) => {
    console.log(event.target.files[0]);
  };

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Welcome to your smart Closet
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        className={classes.h5}
      >
        Enjoy managing your clothes here.
      </Typography>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        type="file"
        onChange={uploadPhoto}
      />
      <label htmlFor="contained-button-file">
        <Button
          color="secondary"
          variant="contained"
          size="large"
          className={classes.button}
          component="span"
        >
          Take photo
        </Button>
      </label>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Discover the experience
      </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
