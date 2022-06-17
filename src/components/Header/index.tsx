import { NavigateButtons, Filters } from ".."
import Container from "./styles"

export default () => (
  <Container>
    <Filters />
    <NavigateButtons.Left />
    <input placeholder="Explore" />
    <NavigateButtons.Right />
  </Container>
)
