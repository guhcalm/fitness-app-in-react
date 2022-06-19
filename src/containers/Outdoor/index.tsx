import { ExerciseStatus, ReturnButton, SwitchThemeButton } from "../../components"
import Container, { Utils, Exercise, GradientCircle, Gradient } from "./styles"

export default ({ item }) => (
  <Container>
    <Exercise src={item.gifUrl} name="exercise" loading="lazy" draggable="false" />
    <GradientCircle />
    <Gradient />
    <Utils>
      <ReturnButton />
      <SwitchThemeButton />
    </Utils>
    <ExerciseStatus item={item} />
  </Container>
)
