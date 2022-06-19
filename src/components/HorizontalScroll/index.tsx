import { ReactNode, useRef } from "react"
import Container, { Items } from "./styles"
import { useHorizontalMove } from "../../hooks"

export default ({ children: Cards }: { children: ReactNode }) => {
  const containerRef = useRef()
  const itemsRef = useRef()
  const { left } = useHorizontalMove(containerRef, itemsRef)
  return (
    <Container ref={containerRef}>
      <Items ref={itemsRef} style={{ left }}>
        {Cards}
      </Items>
    </Container>
  )
}
