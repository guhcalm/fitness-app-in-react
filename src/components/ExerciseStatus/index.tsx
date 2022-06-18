import { NavigateButtons } from ".."
import { useCustomContext } from "../../hooks"
import Container, { Exercise, Gradient } from "./styles"

export default () => {
  const { icons } = useCustomContext()
  return (
    <Container>
      <div>
        <div>
          <img src={icons.bodyPart.main} alt="" />
          <span>bodypart</span>
        </div>
        <div>
          <img src={icons.target.main} alt="" />
          <span>target</span>
        </div>

        <div>
          <img src={icons.equipment.main} alt="" />
          <span>equipment</span>
        </div>
      </div>
    </Container>
  )
}
