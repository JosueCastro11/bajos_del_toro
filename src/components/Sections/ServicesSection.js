import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import CardCustom from "./Card/CardCustom";

import styles from "../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import Img15 from "../../assets/img/bajos/img15.jpg";
import Img37 from "../../assets/img/bajos/img37.jpg";
import Img29 from "../../assets/img/bajos/img29.jpg";

const useStyles = makeStyles(styles());

export default function ServicesSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  const cards = [
    {
      image: (
        <img src={Img15} alt="Tours Toro Amarillo" className={imageClasses} />
      ),
      title: "Tours",
      description: "Quemaderos, Volcan Poas, Rio Agrio",
      useMediaButtons: false,
      url: '/tours',
    },
    {
      image: <img src={Img37} alt="Lodge" className={imageClasses} />,
      title: "Lodging",
      description: "We have one house to be rented. In a quite place.",
      useMediaButtons: false,
      url: '/lodge',
    },
    {
      image: <img src={Img29} alt="Restaurant" className={imageClasses} />,
      title: "Bar and Restaurant",
      description: "All kind of typic food",
      useMediaButtons: false,
      url: '/restaurant',
    },
  ];

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Services</h2>
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
