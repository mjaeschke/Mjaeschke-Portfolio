import React from "react";
import { Layout, Header, Navigation, Content } from "react-mdl";
import "./App.css";
import Main from "./components/Main";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header
          title={
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              Michael Jaeschke
            </Link>
          }
          scroll
        >
          <Navigation>
            <Link to="/Projects">Projects</Link>
            <Link to="/Contact">Contact</Link>
          </Navigation>
        </Header>

        <Content>
          <div className="page-content" />
          <Main></Main>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
