import { useNavigate } from "react-router-dom"
import Container from "./styles"

export default () => {
  const navigate = useNavigate()
  return (
    <Container onClick={() => navigate(`/`)}>
      <span />
      <div />
    </Container>
  )
}
