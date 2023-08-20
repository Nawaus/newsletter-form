import RobotoBold from "./fonts/Roboto-Bold.ttf";
import RobotoRegular from "./fonts/Roboto-Regular.ttf";

import { createGlobalStyle } from "styled-components";

export const AppGlobalStyle = createGlobalStyle`

:root {
  --Dark-Slate-Grey: hsl(234, 29%, 20%);
  --Charcoal-Grey: hsl(235, 18%, 26%);
  --Grey: hsl(231, 7%, 60%);
  --White: hsl(0, 0%, 100%);
}

  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto";
    background: var(--Charcoal-Grey);
  }


  @font-face {
    font-family: "Roboto";
    src: local("Roboto"),
    url(${RobotoBold});
  }

  @font-face {
    font-family: "Roboto";
    src: local("Roboto"),
    url(${RobotoRegular});
  }

`;
