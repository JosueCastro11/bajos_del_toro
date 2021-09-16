import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import CustomInput from "../CustomInput/CustomInput";
import Button from "../CustomButtons/Button";

import styles from "../../assets/jss/material-kit-react/views/landingPage.js";

const useStyles = makeStyles(styles);

export default function ContactSection() {
  const classes = useStyles();

  function sendContactInformation(event) {

    event.preventDefault();
    const data = {
      name: event.target.name?.value,
      email: event.target.email?.value,
      message: event.target.message?.value
    };

    console.log(data);
    alert(data.name + data.email + data.message);
  }

  return (
    <div className={classes.section} style={{ marginTop: "50px" }}>
      <GridContainer justifyContent="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Contact us</h2>
          <h4 className={classes.description}>
            Divide details about your product or agency work into parts. Write a
            few lines about each one and contact us about any further
            collaboration. We will responde get back to you in a couple of
            hours.
          </h4>
          <form onSubmit={sendContactInformation}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  white="#FFFFFF"
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="Your Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  white="#FFFFFF"
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="Your Message"
                  id="message"
                  formControlProps={{
                    fullWidth: true,
                    className: classes.textArea,
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 5,
                  }}
                  white="#FFFFFF"
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                {/* <input type="submit" value="Send Message"/> */}
                <Button color="primary" type="submit">Send Message</Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
