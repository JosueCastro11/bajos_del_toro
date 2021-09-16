import { useEffect, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

// @material-ui/icons

// core components
import HeaderBajos from "../components/Header/HeaderBajos.js";
import Footer from "../components/Footer/Footer.js";
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import Button from "../components/CustomButtons/Button";
import HeaderLinksBajos from "../components/Header/HeaderLinksBajos";
import Parallax from "../components/Parallax/Parallax";

import styles from "../assets/jss/material-kit-react/views/landingPage.js";
import ToroAmarilloLogo from "../assets/img/bajos/Logo.png";

// Sections for this page
import MainDescriptionSection from "./Sections/MainDescriptionSection.js";
import ServicesSection from "./Sections/ServicesSection.js";
import ProductSection from "./Sections/NatureSection.js";
import ContactSection from "./Sections/ContactSection.js";

// Utils functions
import { checkMobileAndLandscape } from "../utils/Functions";

const useStyles = makeStyles(styles);

export default function BajosDelToro(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const [ isMobileAndLandscape, setIsMobileAndLandscape ] = useState(checkMobileAndLandscape());
  // let detectListener = null;

  function detect() {
    setIsMobileAndLandscape(checkMobileAndLandscape());
  }

  useEffect(() => {
    window.addEventListener("resize", detect);
    // detectListener = window.addEventListener("resize", detect);
  }, []);

  return (
    <>
      <HeaderBajos
        color="transparent"
        brand={
          <img
            src={ToroAmarilloLogo}
            alt="Toro Amarillo Logo"
            width="100"
            height="75"
          />
        }
        rightLinks={<HeaderLinksBajos />}
        fixed
        changeColorOnScroll={{
          height: isMobileAndLandscape ? 10 : 50,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter transforming image={require("../assets/img/bajos/img28.jpg").default}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              {/* <h1 className={classes.title}>Bajos del Toro.</h1> */}
              { !isMobileAndLandscape &&
                <>
                  <h4>
                    Located in Alajuela, one of the best places to visit on Costa
                    Rica
                    <br />
                    Amazing waterfalls, forest, rivers, volcanos, people
                    <br />
                    If you are apasionated with walkings, and throught rivers, hike
                    mountains, and volcanoes
                    <br />
                    Bajos del Toro is a place for you
                  </h4>
                  <br />
                  <Button
                    color="primary"
                    size="lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Link to="/places" className={classes.navLink}>
                      What visit?
                    </Link>
                  </Button>
                </>
              }
              { isMobileAndLandscape &&
                <>
                  <h5>
                    Located in Alajuela, one of the best places to visit on Costa
                    Rica
                    <br />
                    Amazing waterfalls, forest, rivers, volcanos, people
                    <br />
                    If you are apasionated with walkings, and throught rivers, hike
                    mountains, and volcanoes
                    <br />
                    Bajos del Toro is a place for you
                  </h5>
                  <br />
                  <Button
                    color="primary"
                    size="sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Link to="/places" className={classes.navLink}>
                      What visit?
                    </Link>
                  </Button>
                </>
              }
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <MainDescriptionSection />
          <ServicesSection />
          <ProductSection />
        </div>
      </div>
      <Parallax filter uping image={require("../assets/img/bajos/img6.jpg").default} height="170vh" style={{ top: "-100px" }}>
      {/* <Parallax filter image={require("../assets/img/bajos/img6.jpg").default} tranforming={false} style={{ top: "-100px" }}> */}
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              
              <ContactSection />

            </GridItem>
          </GridContainer>
        
          <Footer />
        </div>
      </Parallax>
    </>
  );
}
