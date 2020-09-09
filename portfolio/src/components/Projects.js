import React, { Component } from "react";
import {
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  //CardMenu,
  //IconButton,
  Button,
} from "react-mdl";
import password from "../images/password.png";
import travle from "../images/travle.png";
import game from "../images/game.png";
class Projects extends Component {
  render() {
    return (
      <Grid className="contact-page">
        <Cell col={4}>
          <Card shadow={0} style={{ width: "250px", margin: "100px" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "125px",
              }}
            ></CardTitle>
            <img style={{ width: "250px" }} src={password} alt="avatar" />
            <CardText className="contact"></CardText>
            <CardText className="contact">
              this is an app that generates a paassword depending on length case
              or special characters.
            </CardText>
            <Button
              target="blank"
              href="https://mjaeschke.github.io/PassWordGeneratorHW3//02-Homework/Develop/index.html"
              colored
            >
              Deployed APP
            </Button>
            <Button
              target="blank"
              href="https://github.com/mjaeschke/PassWordGeneratorHW3/"
              colored
            >
              GitHub link
            </Button>
          </Card>
        </Cell>
        <Cell col={4}>
          <Card shadow={0} style={{ width: "250px", margin: "100px" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: { travle },
              }}
            >
              <img style={{ width: "250px" }} src={travle} alt="avatar" />
            </CardTitle>
            <CardText className="contact">
              this is my first group project that consisted of 4 people we
              created a travle app that when you put in a name of a city you
              were given a picture of the city and flight plans to that city.
            </CardText>
            <CardActions border>
              <Button
                target="blank"
                href="https://rgauna.github.io/testProject/"
                colored
              >
                Deployed APP
              </Button>
              <Button
                target="blank"
                href="https://github.com/rgauna/testProject/"
                colored
              >
                GitHub link
              </Button>
            </CardActions>
          </Card>
        </Cell>
        <Cell col={4}>
          <Card shadow={0} style={{ width: "250px", margin: "100px" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
              }}
            >
              <img style={{ width: "250px" }} src={game} alt="avatar" />
            </CardTitle>
            <CardText className="contact">
              this is my second group project that consisted of 3 people where
              we created a platformer game together.
            </CardText>
            <Button
              target="blank"
              href="https://platforming-to-success.herokuapp.com/"
              colored
            >
              Deployed APP
            </Button>
            <Button
              target="blank"
              href="https://github.com/mjaeschke/platforming-to-success"
              colored
            >
              GitHub link
            </Button>
          </Card>
        </Cell>
      </Grid>
    );
  }
}
export default Projects;
