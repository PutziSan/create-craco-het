import { hot } from 'react-hot-loader/root'
import { css } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import { theme, ThemeProps } from "./theme";

function InnerApp() {
  return (
    <ThemeProvider theme={theme}>
      <div css={{ display: "flex", height: "100%" }}>
        <div
          css={(theme: ThemeProps) => css`
            margin: auto;
            max-width: 500px;
            width: 100%;
            padding: ${theme.space[6]};
            box-shadow: inset 0 1px 0 hsl(0, 0%, 100%), ${theme.shadows[1]};
          `}
        >
          <input />
        </div>
      </div>
    </ThemeProvider>
  );
}

export const App = hot(InnerApp);
