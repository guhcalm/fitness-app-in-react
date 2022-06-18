import { useCustomContext } from "../../hooks"
import Container from "./styles"

export default ({ item: { bodyPart, target, equipment } }) => {
  const { icons } = useCustomContext()
  return (
    <Container>
      <div>
        <div>
          <img src={icons.bodyPart.main} alt="" />
          <span>{bodyPart}</span>
        </div>
        <div>
          <img src={icons.target.main} alt="" />
          <span>{target}</span>
        </div>

        <div>
          <img src={icons.equipment.main} alt="" />
          <span>{equipment}</span>
        </div>
      </div>
    </Container>
  )
}
