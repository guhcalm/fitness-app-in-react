import { useRef } from "react"
import { Card } from ".."
import Container, { Items } from "./styles"
import { useCustomContext, useHorizontalMove } from "../../../hooks"

export default () => {
  const {
    state: { exercises }
  } = useCustomContext()
  const containerRef = useRef()
  const itemsRef = useRef()
  const { left } = useHorizontalMove(containerRef, itemsRef)
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
