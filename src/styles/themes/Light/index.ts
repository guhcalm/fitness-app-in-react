import { ThemeInterface, ThemesEnum } from "../../../interfaces"

export default {
  name: ThemesEnum.LIGHT,
  palette: {
    surface: {
      main: "rgb(209,209,213)",
      on: "rgb(55,55,55)",
      dark: "rgb(195,195,199)",
      light: "white"
    },
    background: {
      main: "rgb(209,209,213)",
      on: "rgb(55,55,55)"
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
