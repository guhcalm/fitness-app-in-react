import { exercises } from "../../response"
import {
  ReducerType as RT,
  ActionsEnum,
  ThemesEnum,
  StateInterface,
  ExercisesInterface
} from "../../interfaces"
import { ThemesStyles } from "../../styles"

const {
  SWITCH_THEME,
  SET_EXERCISES_DATA,
  SET_FILTER,
  SET_PAGE,
  SET_SEARCH,
  SET_FILTERED_LIST,
  SET_SEARCHED_LIST
} = ActionsEnum
const { LIGHT, DARK } = ThemesEnum
const { Light, Dark } = ThemesStyles

export const initialState = {
  theme: Light,
  exercises,
  response: {
    bodyPartsList: [],
    filter: "all",
    exercisesList: [],
    filteredList: [],
    searchedList: [],
    page: 0,
    itemsPerPage: 12
  }
} as StateInterface

const actions = {
  dispatchers: {
    switchTheme: () => ({ type: SWITCH_THEME }),
    setExercisesData: (payload: {
      bodyPartsList: string[]
      exercisesList: ExercisesInterface[]
    }) => ({
      type: SET_EXERCISES_DATA,
      payload
    }),
    setFilter: (payload: string) => ({ type: SET_FILTER, payload }),
    setPage: (payload: number) => ({ type: SET_PAGE, payload }),
    setSearch: (payload: any) => ({ type: SET_SEARCH, payload }),
    setFilteredList: (payload: ExercisesInterface[]) => ({ type: SET_FILTERED_LIST, payload }),
    setSearchedList: (payload: ExercisesInterface[]) => ({ type: SET_SEARCHED_LIST, payload })
  },
  reducers: ((state, action) => ({
    [SWITCH_THEME]: () => {
      return { ...state, theme: state.theme.name === LIGHT ? Dark : Light }
    },
    [SET_EXERCISES_DATA]: () => ({
      ...state,
      response: {
        ...state.response,
        bodyPartsList: action.payload.bodyPartsList,
        exercisesList: action.payload.exercisesList
      }
    }),
    [SET_FILTER]: () => ({
      ...state,
      response: {
        ...state.response,
        filter: action.payload
      }
    }),
    [SET_PAGE]: () => ({
      ...state,
      response: {
        ...state.response,
        page: action.payload
      }
    }),
    [SET_SEARCH]: () => ({
      ...state,
      response: {
        ...state.response,
        search: action.payload
      }
    }),
    [SET_FILTERED_LIST]: () => ({
      ...state,
      response: {
        ...state.response,
        filteredList: action.payload
      }
    }),

    [SET_SEARCHED_LIST]: () => ({
      ...state,
      response: {
        ...state.response,
        searchedList: action.payload
      }
    })
  })) as RT
}

export const { dispatchers, reducers } = actions
export default ((state, action) => reducers(state, action)[action.type]()) as RT
