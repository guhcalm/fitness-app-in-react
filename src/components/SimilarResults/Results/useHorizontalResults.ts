import { useEffect, useState } from "react"

export default (containerRef, itemsRef) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [mousePress, setMousePress] = useState<boolean>(false)
  const [hover, setHover] = useState<boolean>(false)
  const [stretch, setStretch] = useState<number>(0)
  const [left, setLeft] = useState<number>(0)

  // mouse handlers
  useEffect(() => {
    const onMouseMove = ({ x, y }: MouseEvent) => setMousePos(() => ({ x, y }))
    const onMouseDown = () => setMousePress(() => true)
    const onMouseUp = () => setMousePress(() => false)
    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("mousedown", onMouseDown)
    window.addEventListener("mouseup", onMouseUp)
    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mousedown", onMouseDown)
      window.removeEventListener("mouseup", onMouseUp)
    }
  }, [])
  // hover handler
  useEffect(() => {
    const containerStatus = containerRef.current.getBoundingClientRect()
    ;(() => {
      if (mousePos.y >= containerStatus.top && mousePos.y <= containerStatus.bottom)
        return setHover(() => true)
      setHover(() => false)
    })()
  }, [mousePos])
  // press handler
  useEffect(() => {
    const onMouseMove = ({ movementX }: MouseEvent) =>
      setStretch(() => (hover && mousePress ? movementX * 1.8 : 0))
    window.addEventListener("mousemove", onMouseMove)
    return () => window.removeEventListener("mousemove", onMouseMove)
  }, [mousePos, mousePress, hover])
  // movement
  useEffect(() => {
    ;(() => {
      if (!mousePress || !hover) return
      const containerStatus = containerRef.current.getBoundingClientRect()
      const itemsStatus = itemsRef.current.getBoundingClientRect()
      const possibleMovement = containerStatus.width - itemsStatus.width
      const newPos = left + stretch
      if (newPos > possibleMovement && newPos <= 0) setLeft(() => newPos)
    })()
  }, [hover, mousePress, stretch])

  return { left }
}
