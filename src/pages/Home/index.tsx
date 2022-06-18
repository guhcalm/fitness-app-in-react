import Container from "./styles"
import { Header, SearchResults, Filters, PagesManager } from "../../components"

export default () => {
  return (
    <Container data-home="">
      <Header />
      <Filters />
      <SearchResults />
      <PagesManager />
    </Container>
  )
}
