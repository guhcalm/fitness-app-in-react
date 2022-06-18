import { NavigateButtons, ExerciseStatus } from ".."
import Container, { Utils, Exercise, GradientCircle, Gradient } from "./styles"

export default ({ item }) => (
  <Container>
    <Exercise src={item.gifUrl} name="exercise" loading="lazy" draggable="false" />
    <GradientCircle />
    <Gradient />
    <Utils>
      <NavigateButtons.Left />
      <NavigateButtons.Right />
    </Utils>
    <ExerciseStatus item={item} />
  </Container>
)
