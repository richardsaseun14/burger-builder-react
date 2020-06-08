import React, { Component } from "react";

import Auxilliary from "../../hoc/Auxilliary";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  // sideDrawerClosedHandler = () => {
  //   this.setState({ showSideDrawer: false });
  // };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {
        showSideDrawer: !prevState.showSideDrawer,
      };
    });
  };

  render() {
    return (
      <Auxilliary>
        <Toolbar toggleDrawer={this.sideDrawerToggleHandler}></Toolbar>
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerToggleHandler}
        ></SideDrawer>
        <main className={classes.content}>{this.props.children}</main>
      </Auxilliary>
    );
  }
}

export default Layout;
