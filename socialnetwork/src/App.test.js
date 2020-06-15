import React from "react";
import ReactDOM from "react-dom";
import AppForWrappers from "./App";


it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AppForWrappers/>, div);
    ReactDOM.unmountComponentAtNode(div);
})