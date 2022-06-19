import { ReactNode } from "react"
import Container from "./styles"

export default ({ children: Cards }: { children: ReactNode }) => {
  return <Container data-results="">{Cards}</Container>
}
