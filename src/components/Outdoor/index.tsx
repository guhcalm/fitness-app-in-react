import { NavigateButtons, ExerciseStatus } from ".."
import Container, { Exercise, GradientCircle, Gradient } from "./styles"

export default ({ item }) => (
  <Container>
    <Exercise src={item.gifUrl} name="exercise" loading="lazy" draggable="false" />
    <GradientCircle />
    <Gradient />
    <NavigateButtons.Left />
    <ExerciseStatus item={item} />
  </Container>
)
