import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
class LandingPage extends Component {
  render() {
    return (
      <div>
        <Grid className="landing-grid">
          <Cell col={12}>
            <h1>yeet</h1>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default LandingPage;
