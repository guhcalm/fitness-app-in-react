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
export interface ExercisesInterface {
  bodyPart: string
  target: string
  name: string
  gifUrl: string
  equipment: string
  id: string
}

export interface StateInterface {
  theme: ThemeInterface
  exercises: any
  response?: {
    bodyPartsList: string[]
    filter: string
    exercisesList: ExercisesInterface[]
    filteredList: ExercisesInterface[]
    search: any
    searchedList: ExercisesInterface[]
    page: number
    itemsPerPage: number
  }
}

export enum ActionsEnum {
  SWITCH_THEME,
  SET_EXERCISES_DATA,
  SET_FILTER,
  SET_PAGE,
  SET_SEARCH,
  SET_FILTERED_LIST,
  SET_SEARCHED_LIST
}

export type ReducerType = (
  state: StateInterface,
  action?: { type: string; payload: any }
) => unknown
