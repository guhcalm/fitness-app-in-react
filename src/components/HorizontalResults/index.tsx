import { useRef } from "react"
import { Card } from ".."
import useHorizontalResults from "./useHorizontalResults"
import Container, { Items } from "./styles"

export default () => {
  const containerRef = useRef()
  const itemsRef = useRef()
  const { left } = useHorizontalResults(containerRef, itemsRef)
  return (
    <Container ref={containerRef}>
      <Items ref={itemsRef} style={{ left }}>
        {new Array(12).fill("").map(() => (
          <Card />
        ))}
      </Items>
    </Container>
  )
}
