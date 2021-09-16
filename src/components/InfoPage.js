import ToroAmarilloLogo from "../assets/img/bajos/Logo.png";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import HeaderBajos from "../components/Header/HeaderBajos.js";
import HeaderLinksBajos from "../components/Header/HeaderLinksBajos";
import Footer from "../components/Footer/Footer.js";
import Parallax from "../components/Parallax/Parallax";
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";

// Utils functions
import { checkMobileAndLandscape } from "../utils/Functions";

// Sections for this page
import MainDescriptionSection from "./Sections/MainDescriptionSection.js";

import styles from "../assets/jss/material-kit-react/views/landingPage.js";

const useStyles = makeStyles(styles);

export default function InfoPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const isMobileAndLandscape = checkMobileAndLandscape();

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
              <h1 className={classes.title}>Information</h1>
              {/* { !isMobileAndLandscape &&
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
              } */}
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <MainDescriptionSection />
        </div>
      </div>
      <Parallax filter uping image={require("../assets/img/bajos/img6.jpg").default} height="20.8vh" style={{ top: "-100px" }}>
        <div className={classes.container}>        
          <Footer />
        </div>
      </Parallax>
    </>
  );
}
