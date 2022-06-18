import { useNavigate } from "react-router-dom"
import { useCustomContext } from "../../../hooks"
import Container, { Icon, Exercise } from "./styles"

export default ({ item }) => {
  const { bodyPart, equipment, gifUrl, name, target, id } = item
  const { icons } = useCustomContext()
  const navigate = useNavigate()
  return (
    <Container data-card="">
      <Exercise src={gifUrl} alt={name} loading="lazy" draggable="false" />
      <Icon src={icons.bodyPart[bodyPart]} alt="" loading="lazy" draggable="false" />
      <span
        onClick={() => {
          navigate(`/exercise/${id}`)
          window.scrollTo(0, 0)
        }}
      >{`- ${name} -`}</span>
      <div>
        <span>{target}</span>
        <span>{bodyPart}</span>
        <span>{equipment}</span>
      </div>
    </Container>
  )
}
