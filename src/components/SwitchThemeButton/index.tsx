import { useCustomContext } from "../../hooks"
import Container from "./styles"
import sun from "../../assets/icons/sun.png"
import moon from "../../assets/icons/moon.png"
import { ThemesEnum } from "../../interfaces"

export default () => {
  const { state, dispatch, actions } = useCustomContext()
  return (
    <Container onClick={() => dispatch(actions.switchTheme())}>
      <span />
      <div>
        <img src={state.theme.name === ThemesEnum.LIGHT ? sun : moon} alt="" />
      </div>
    </Container>
  )
}
