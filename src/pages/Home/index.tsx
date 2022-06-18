import Container from "./styles"
import { Header, SearchResults, Filter, PagesManager } from "../../components"

export default () => {
  return (
    <Container data-home="">
      <Header />
      <Filter.Results />
      <SearchResults.Results />
      <PagesManager />
    </Container>
  )
}
