import { NavigateButtons, ExerciseStatus } from ".."
import Container, { Exercise, Gradient } from "./styles"

export default () => (
  <Container>
    <Exercise
      src="http://d205bpvrqc9yn1.cloudfront.net/0006.gif"
      name="exercise"
      loading="lazy"
      draggable="false"
    />
    <Gradient />
    <NavigateButtons.Left />
    <ExerciseStatus />
  </Container>
)
