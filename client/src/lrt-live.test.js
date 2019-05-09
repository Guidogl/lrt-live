import React from "react";
import ReactDOM from "react-dom";
import LrtLive from "./lrtLive";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<LrtLive />, div);
  ReactDOM.unmountComponentAtNode(div);
});
