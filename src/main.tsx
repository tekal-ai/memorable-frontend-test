import "./main.css";

import { render } from "react-dom";

import App from "./app/app.page";
import { Providers } from "./providers";

const root = document.getElementById("root");

render(
  <Providers>
    <App />
  </Providers>,
  root,
);
