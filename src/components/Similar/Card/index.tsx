import { useCustomContext } from "../../../hooks"
import Container, { Icon, Exercise } from "./styles"

export default ({ item }) => {
  const { bodyPart, equipment, gifUrl, name, target } = item
  const { icons } = useCustomContext()
  return (
    <Container data-card="">
      <Exercise src={gifUrl} alt={name} loading="lazy" draggable="false" />
      <Icon src={icons.bodyPart[bodyPart]} alt="" loading="lazy" draggable="false" />
      <span>{`- ${name} -`}</span>
      <div>
        <span>{target}</span>
        <span>{bodyPart}</span>
        <span>{equipment}</span>
      </div>
    </Container>
  )
}
