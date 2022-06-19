import { useNavigate } from "react-router-dom"
import { useCustomContext } from "../../hooks"
import Container from "./styles"

export default () => {
  const { actions, dispatch } = useCustomContext()
  const navigate = useNavigate()
  const onClick = () => {
    dispatch(actions.setFilter("all"))
    dispatch(actions.setSearch(""))
    navigate(`/`)
  }
  return (
    <Container onClick={onClick}>
      <span />
      <div />
    </Container>
  )
}
