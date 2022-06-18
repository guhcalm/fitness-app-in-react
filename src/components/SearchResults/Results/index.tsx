import { Card } from ".."
import { useCustomContext } from "../../../hooks"
import Container from "./styles"

export default () => {
  const {
    state: { exercises }
  } = useCustomContext()
  return (
    <Container>
      {exercises.map((item, id) => (
        <Card item={item} key={id} />
      ))}
    </Container>
  )
}
