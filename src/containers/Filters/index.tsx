import { FilterCard, HorizontalScroll } from "../../components"

const bodyPart = [
  "all",
  "back",
  "cardio",
  "chest",
  "lower arms",
  "lower legs",
  "neck",
  "shoulders",
  "upper arms",
  "upper legs",
  "waist"
]

export default () => {
  return (
    <HorizontalScroll>
      {bodyPart.map(item => (
        <FilterCard item={item} key={item} />
      ))}
    </HorizontalScroll>
  )
}
