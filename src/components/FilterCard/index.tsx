import { useCustomContext } from "../../hooks"
import Container, { Circle } from "./styles"

export default ({ item }) => {
  const { icons } = useCustomContext()
  return (
    <Container data-card="">
      {item === "all" ? (
        <Circle />
      ) : (
        <img src={icons.bodyPart[item]} alt={item} loading="lazy" draggable="false" />
      )}
      <span>{`- ${item} -`}</span>
    </Container>
  )
}
