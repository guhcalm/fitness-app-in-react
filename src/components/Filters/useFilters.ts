import { useEffect, useState } from "react"

export default (
  containerRef: { current: HTMLDivElement },
  filtersRef: { current: HTMLUListElement }
) => {
  const [left, setLeft] = useState<number>(0)
  const [hover, setHover] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [mousePress, setMousePress] = useState(false)
  const [stretch, setStretch] = useState(0)

  useEffect(() => {
    const onMouseMove = ({ x, y }) => setMousePos(current => ({ x, y }))
    const onMouseDown = () => setMousePress(() => true)
    const onMouseUp = () => setMousePress(() => false)
    window.addEventListener("pointermove", onMouseMove)
    window.addEventListener("pointerdown", onMouseDown)
    window.addEventListener("pointerup", onMouseUp)
    return () => {
      window.removeEventListener("pointermove", onMouseMove)
      window.removeEventListener("pointerdown", onMouseDown)
      window.removeEventListener("pointerup", onMouseUp)
    }
  }, [])

  useEffect(() => {
    ;(() => {
      const containerStatus = containerRef.current.getBoundingClientRect()
      if (mousePos.y > containerStatus.bottom || mousePos.y < containerStatus.top)
        return setHover(() => false)
      setHover(() => true)
    })()
  }, [mousePos])

  useEffect(() => {
    const onMouseMove = ({ movementX }) =>
      setStretch(() => (mousePress && hover ? movementX * 1.5 : 0))
    window.addEventListener("pointermove", onMouseMove)
    return () => {
      window.removeEventListener("pointermove", onMouseMove)
    }
  }, [mousePress])

  useEffect(() => {
    ;(() => {
      const containerStatus = containerRef.current.getBoundingClientRect()
      const filtersStatus = filtersRef.current.getBoundingClientRect()
      if (!hover) return

      const possibleMove = containerStatus.width - filtersStatus.width
      const newPos = left + stretch
      if (newPos > 0 || newPos <= possibleMove) return
      setLeft(() => newPos)
    })()
  }, [mousePos, mousePress, hover, stretch])

  return { left }
}
