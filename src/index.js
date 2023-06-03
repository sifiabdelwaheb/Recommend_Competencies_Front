import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { IntlProvider, FormattedRelative, useIntl } from "react-intl";

const root = ReactDOM.createRoot(document.getElementById("root"));
let render = () => {
  require("./AppRenderer");
};
render();
