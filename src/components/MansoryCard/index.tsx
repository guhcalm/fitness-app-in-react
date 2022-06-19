import { useNavigate } from "react-router-dom"
import { useCustomContext } from "../../hooks"
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
  const { bodyPart, equipment, gifUrl, name, target, id } = item
  const { icons } = useCustomContext()
  const navigate = useNavigate()
  const onClick = () => {
    navigate(`/exercise/${id}`)
    window.scrollTo(0, 0)
  }
  return (
    <Container data-card="" className={className()}>
      <Exercise src={gifUrl} alt={name} loading="lazy" draggable="false" />
      <Icon src={icons.bodyPart[bodyPart]} alt="" loading="lazy" draggable="false" />
      <span onClick={onClick}>{`- ${name} -`}</span>
      <div>
        <span>{target}</span>
        <span>{bodyPart}</span>
        <span>{equipment}</span>
      </div>
    </Container>
  )
}
