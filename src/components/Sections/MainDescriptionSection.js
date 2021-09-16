import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";

import styles from "../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function MainDescriptionSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justifyContent="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Mainly Description Title</h2>
          <h5 className={classes.description}>
            Mainly Description Mainly Description Mainly Description
            Mainly Description Mainly Description Mainly Description
            Mainly Description Mainly Description Mainly Description
            Mainly Description Mainly Description Mainly Description
            Mainly Description Mainly Description Mainly Description
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
