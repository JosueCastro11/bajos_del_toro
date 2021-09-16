import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "../../../components/Grid/GridItem";
import Button from "../../../components/CustomButtons/Button";
import Card from "../../../components/Card/Card";
import CardBody from "../../../components/Card/CardBody";
import CardFooter from "../../../components/Card/CardFooter";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles());

export default function CardCustom(props) {
  const classes = useStyles();
  const { card } = props;

  return (
    <Card plain>
      <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
        {card.image}
      </GridItem>
      <h4 className={classes.cardTitle}>
        <Link to={card.url}>
          {card.title}
        </Link>
        {/* {card.title} */}
        <br />
        <small className={classes.smallTitle}>{card.smallTitle}</small>
      </h4>
      <CardBody>
        <p className={classes.description}>{card.description}</p>
      </CardBody>
      {card.useMediaButtons && (
        <CardFooter className={classes.justifyCenter}>
          <Button justIcon color="transparent" className={classes.margin5}>
            <i className={classes.socials + " fab fa-twitter"} />
          </Button>
          <Button justIcon color="transparent" className={classes.margin5}>
            <i className={classes.socials + " fab fa-instagram"} />
          </Button>
          <Button justIcon color="transparent" className={classes.margin5}>
            <i className={classes.socials + " fab fa-facebook"} />
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}

CardCustom.propTypes = {
  card: PropTypes.any,
};
