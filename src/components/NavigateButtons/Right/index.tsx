import { useCustomContext } from "../../../hooks"
import Container from "./styles"

export default () => {
  const { dispatch, actions } = useCustomContext()
  return (
    <Container onClick={() => dispatch(actions.switchTheme())}>
      <span />
    </Container>
  )
}
