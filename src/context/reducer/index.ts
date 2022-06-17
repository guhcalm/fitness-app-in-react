import * as interfaces from "../../interfaces"
import { ThemesStyles } from "../../styles"

const { SWITCH_THEME } = interfaces.ActionsEnum
const { LIGHT, DARK } = interfaces.ThemesEnum
const { Light, Dark } = ThemesStyles

export const initialState = { theme: Light } as interfaces.StateInterface

const actions = {
  dispatchers: {
    switchTheme: () => ({ type: SWITCH_THEME })
  },
  reducers: {
    [SWITCH_THEME]: state => {
      const theme = state.theme.name === LIGHT ? Light : Dark
      metaThemeColor.content = theme.palette.background.main
      return { ...state, theme }
    }
  }
}
export const { dispatchers } = actions
export default (state, action) => actions.reducers[action.type](state, action)
