import { useRef } from "react"
import useFilters from "./useFilters"
import Container from "./styles"

export default () => {
  const containerRef: { current: HTMLDivElement } = useRef()
  const filtersRef: { current: HTMLUListElement } = useRef()
  const { left } = useFilters(containerRef, filtersRef)
  return (
    <Container ref={containerRef}>
      <ul style={{ left }} ref={filtersRef}>
        <li className="current">
          <span>Hand</span>
        </li>
        <li>
          <span>Hand</span>
        </li>
        <li>
          <span>Hand</span>
        </li>
        <li>
          <span>Hand</span>
        </li>
        <li>
          <span>Hand</span>
        </li>
        <li>
          <span>Hand</span>
        </li>
        <li>
          <span>Hand</span>
        </li>
        <li>
          <span>Hand</span>
        </li>
      </ul>
    </Container>
  )
}
