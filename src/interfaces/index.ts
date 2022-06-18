// THEME
export enum ThemesEnum {
  LIGHT,
  DARK
}

export interface ColorInterface {
  on: string
  main: string
  light?: string
  dark?: string
}

export interface ThemeInterface {
  name: ThemesEnum
  palette: {
    error?: ColorInterface
    surface?: ColorInterface
    background: ColorInterface
    primary: ColorInterface
    secondary: ColorInterface
  }
}
// STATE
export interface StateInterface {
  theme: ThemeInterface
  exercises: any
}

export enum ActionsEnum {
  SWITCH_THEME
}

export type ReducerType = (
  state: StateInterface,
  action?: { type: string; payload: any }
) => unknown
