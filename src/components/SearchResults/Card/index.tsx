import { useCustomContext } from "../../../hooks"
import Container, { Icon, Exercise } from "./styles"

const classes = {
  0: "small",
  1: "medium",
  2: "larger"
}

const className = () => {
  const number = Math.round(2 * Math.random())
  return classes[number]
}

export default ({ item }) => {
  const { bodyPart, equipment, gifUrl, name, target } = item
  const { icons } = useCustomContext()
  return (
    <Container data-card="" className={className()}>
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
