import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import CardCustom from "./Card/CardCustom";

import Img1 from "../../assets/img/bajos/img1.jpg";
import Img26 from "../../assets/img/bajos/img26.jpg";
import Img2 from "../../assets/img/bajos/img2.jpg";

import styles from "../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

export default function NatureSection() {
  const useStyles = makeStyles(styles({ paddingSection: "0 0 0 0" }));
  const classes = useStyles();

  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  const cards = [
    {
      image: <img src={Img1} alt="Bird" className={imageClasses} />,
      // title: "Title1",
      description: "Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1",
      useMediaButtons: false,
    },
    {
      image: <img src={Img26} alt="Bird" className={imageClasses} />,
      // title: "Title2",
      description: "Description 2 Description 2 Description 2 Description 2 Description 2 Description 2 Description 2 Description 2 Description 2 Description 2 Description 2 Description 2",
      useMediaButtons: false,
    },
    {
      image: <img src={Img2} alt="Bird" className={imageClasses} />,
      // title: "Title3",
      description: "Description 3 Description 3 Description 3 Description 3 Description 3 Description 3 Description 3 Description 3 Description 3 Description 3 Description 3 Description 3",
      useMediaButtons: false,
    },
  ];

  return (
    <div className={classes.section}>
    <h2 className={classes.title}>Bird watching</h2>
      <div>
        <GridContainer>
          {cards.map((card, index) => (
            <GridItem xs={12} sm={12} md={4} key={index}>
              <CardCustom card={card} />
            </GridItem>
          ))}
        </GridContainer>
      </div>
    </div>
  );
}
