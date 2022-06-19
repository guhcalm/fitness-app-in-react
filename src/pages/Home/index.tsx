import Container from "./styles"
import { PagesManager } from "../../components"
import { Filters, Header, SearchResults } from "../../containers"

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
