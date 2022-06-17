import Container from "./styles"
import { Header, HorizontalResults, PagesManager } from "../../components"

export default () => {
  return (
    <Container data-home="">
      <Header />
      <HorizontalResults />
      <PagesManager />
    </Container>
  )
}
