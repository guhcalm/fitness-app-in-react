import { useRef } from "react"
import { Card } from ".."
import useHorizontalResults from "./useHorizontalResults"
import Container, { Items } from "./styles"
import { useCustomContext } from "../../../hooks"

export default () => {
  const {
    state: { exercises }
  } = useCustomContext()
  const containerRef = useRef()
  const itemsRef = useRef()
  const { left } = useHorizontalResults(containerRef, itemsRef)
  return (
    <Container ref={containerRef}>
      <Items ref={itemsRef} style={{ left }}>
        {exercises.slice(0, 12).map(item => (
          <Card item={item} key={item.id} />
        ))}
      </Items>
    </Container>
  )
}
