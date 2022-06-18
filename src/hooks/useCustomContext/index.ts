import { useContext } from "react"
import { StateContext, dispatchers } from "../../context"
import { StateInterface } from "../../interfaces"
//
import bodyPart from "../../assets/icons/body-part.png"
import equipment from "../../assets/icons/equipment.png"
import target from "../../assets/icons/target.png"
// bodyparts
import back from "../../assets/icons/bodyParts/back.png"
import cardio from "../../assets/icons/bodyParts/cardio.png"
import chest from "../../assets/icons/bodyParts/chest.png"
import lowerArms from "../../assets/icons/bodyParts/lower-arms.png"
import lowerLegs from "../../assets/icons/bodyParts/lower-legs.png"
import neck from "../../assets/icons/bodyParts/neck.png"
import shoulders from "../../assets/icons/bodyParts/shoulders.png"
import upperArms from "../../assets/icons/bodyParts/upper-arms.png"
import upperLegs from "../../assets/icons/bodyParts/upper-legs.png"
import waist from "../../assets/icons/bodyParts/waist.png"

export default () => {
  const [state, dispatch] = useContext(StateContext)
  return {
    state: state as StateInterface,
    dispatch,
    actions: dispatchers,
    icons: {
      equipment: { main: equipment },
      target: { main: target },
      bodyPart: {
        main: bodyPart,
        back,
        cardio,
        chest,
        "lower arms": lowerArms,
        "lower legs": lowerLegs,
        neck,
        shoulders,
        "upper arms": upperArms,
        "upper legs": upperLegs,
        waist
      }
    }
  }
}
