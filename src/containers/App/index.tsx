import { ReactNode } from "react"
import { useCustomContext, useData } from "../../hooks"
import Container from "./styles"

export default ({ children }: { children: ReactNode }) => {
  const { state } = useCustomContext()
  useData()
  return (
    <Container data-app="" palette={state.theme.palette}>
      {children}
    </Container>
  )
}
