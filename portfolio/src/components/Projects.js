import React, { Component } from "react";
import {
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  //CardActions,
  //CardMenu,
  //IconButton,
  // Button,
} from "react-mdl";
class Projects extends Component {
  render() {
    return (
      <Grid className="contact-page">
        <Cell col={3}></Cell>
        <Cell col={5}>
          <Card shadow={0} style={{ width: "500px", margin: "100px" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover",
              }}
            >
              Contact
            </CardTitle>
            <CardText className="contact">Email:</CardText>
            <CardText className="contact">
              jaeschke.michael@outlook.com
            </CardText>
            <CardText className="contact">Phone Number:</CardText>
            <CardText className="contact">(210)665-6967</CardText>
          </Card>
        </Cell>
        <Cell col={4}></Cell>
      </Grid>
    );
  }
}
export default Projects;
