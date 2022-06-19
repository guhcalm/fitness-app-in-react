import { useCustomContext } from "../../hooks"
import Container, { Circle } from "./styles"

export default ({ item }) => {
  const { icons, dispatch, actions, state } = useCustomContext()
  const { filter } = state.response
  const onClick = () => dispatch(actions.setFilter(item))
  return (
    <Container data-filter-card="" onClick={onClick} className={filter === item && "activate"}>
      {item === "all" ? (
        <Circle className={filter === item && "activate"} />
      ) : (
        <img src={icons.bodyPart[item]} alt={item} loading="lazy" draggable="false" />
      )}
      <span>{`- ${item} -`}</span>
    </Container>
  )
}
