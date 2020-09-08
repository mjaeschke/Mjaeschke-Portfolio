import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import logo from "../images/pic.jpg";
import Resume from "../images/resume.pdf";
class LandingPage extends Component {
  render() {
    return (
      <div>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img className="avatar-img" src={logo} alt="avatar" />

            <div className="text-box">
              <h1>Fullstack Web Developer</h1>{" "}
              <p>
                My name is Michael Jaeshcke I have aquired an associates in
                science for Computer Science and I am also a coding bootcamp
                graduate
              </p>
              <hr />
              <p>
                HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express |
                MongoDB
              </p>
              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/michael-jaeschke-82a26a153/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i
                    className="fa fa-linkedin-square fa-3x"
                    aria-hidden="true"
                  />
                </a>

                {/* Github */}
                <a
                  href="https://github.com/mjaeschke"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square fa-3x" aria-hidden="true" />
                </a>
                {/* resume*/}
                <a href={Resume} rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-file fa-3x" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default LandingPage;
