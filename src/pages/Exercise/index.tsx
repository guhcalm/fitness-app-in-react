import { useParams } from "react-router-dom"
import Container from "./styles"
import { Outdoor, Detail, SimilarResults } from "../../components"
import { useCustomContext } from "../../hooks"

export default () => {
  const { id } = useParams()
  const {
    state: { exercises }
  } = useCustomContext()
  const [exercise] = exercises.filter(item => item.id === id)
  console.log(exercise)
  return (
    <Container data-exercise="">
      <Outdoor item={exercise} />
      <Detail item={exercise} />
      <span>Similar exercises:</span>
      <SimilarResults item={exercise} />
    </Container>
  )
}
