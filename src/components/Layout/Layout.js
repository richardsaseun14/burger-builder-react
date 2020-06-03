import React from "react";

import Auxilliary from "../../hoc/Auxilliary";
import classes from "./Layout.module.css";

const layout = (props) => {
  return (
    <Auxilliary>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={classes.content}>{props.children}</main>
    </Auxilliary>
  );
};

export default layout;
