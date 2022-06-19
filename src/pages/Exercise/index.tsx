import { useParams } from "react-router-dom"
import Container from "./styles"
import { ExerciseDetails } from "../../components"
import { useCustomContext } from "../../hooks"
import { Outdoor, SimilarResults } from "../../containers"

export default () => {
  const { id } = useParams()
  const { state } = useCustomContext()
  const [currentExercise] = state.exercises.filter(item => item.id === id)
  return (
    <Container data-exercise="">
      <Outdoor item={currentExercise} />
      <ExerciseDetails item={currentExercise} />
      <span>Similar exercises:</span>
      <SimilarResults />
    </Container>
  )
}
