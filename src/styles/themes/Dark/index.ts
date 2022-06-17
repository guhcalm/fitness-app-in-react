import { ThemeInterface, ThemesEnum } from "../../../interfaces"

export default {
  name: ThemesEnum.DARK,
  palette: {
    surface: {
      main: "rgb(36,36,40)",
      on: "rgb(200,200,200)",
      light: "rgb(46,46,50)",
      dark: "rgb(26,26,30)"
    },
    background: {
      main: "rgb(26,26,30)",
      on: "rgb(200,200,200)"
    },
    primary: {
      main: "",
      on: "",
      light: "",
      dark: ""
    },
    secondary: {
      main: "",
      on: "",
      light: "",
      dark: ""
    }
  }
} as ThemeInterface
