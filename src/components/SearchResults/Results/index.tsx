import { Card } from ".."
import { useCustomContext } from "../../../hooks"
import Container from "./styles"

export default () => {
  const {
    state: { exercises }
  } = useCustomContext()
  return (
    <Container>
      {exercises.slice(0, 12).map(item => (
        <Card item={item} key={item.id} />
      ))}
    </Container>
  )
}
