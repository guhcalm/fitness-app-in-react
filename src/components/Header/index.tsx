import { NavigateButtons, Filters } from ".."
import Container from "./styles"

export default () => (
  <Container>
    <NavigateButtons.Left />
    <input placeholder="Explore" />
    <NavigateButtons.Right />
  </Container>
)
