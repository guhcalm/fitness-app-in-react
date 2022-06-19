import { useRef } from "react"
import { Card } from ".."
import useHorizontalResults from "./useHorizontalResults"
import Container, { Items } from "./styles"

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
  const containerRef = useRef()
  const itemsRef = useRef()
  const { left } = useHorizontalResults(containerRef, itemsRef)
  return (
    <Container ref={containerRef}>
      <Items ref={itemsRef} style={{ left }} data-filters="">
        {bodyPart.map(item => (
          <Card item={item} key={item} />
        ))}
      </Items>
    </Container>
  )
}
