import { exercises } from "../../response"
import { ReducerType as RT, ActionsEnum, ThemesEnum, StateInterface } from "../../interfaces"
import { ThemesStyles } from "../../styles"

const { SWITCH_THEME } = ActionsEnum
const { LIGHT, DARK } = ThemesEnum
const { Light, Dark } = ThemesStyles

export const initialState = { theme: Light, exercises } as StateInterface

const actions = {
  dispatchers: {
    switchTheme: () => ({ type: SWITCH_THEME })
  },
  reducers: ((state, action) => ({
    [SWITCH_THEME]: () => {
      return { ...state, theme: state.theme.name === LIGHT ? Dark : Light }
    }
  })) as RT
}

export const { dispatchers, reducers } = actions
export default ((state, action) => reducers(state, action)[action.type]()) as RT
