import { useCustomContext } from "../../hooks"
import Container from "./styles"

export default () => {
  const { state, dispatch, actions } = useCustomContext()
  const { page, itemsPerPage, searchedList } = state.response
  const amount = searchedList.length
  const amoutsPages = Math.trunc(amount / page)

  const onClickBefore = () => {
    if (page <= 0) return
    dispatch(actions.setPage(page - 1))
    window.scrollTo(0, 0)
  }
  const onClickAfter = () => {
    if (page >= amoutsPages) return
    dispatch(actions.setPage(page + 1))
    window.scrollTo(0, 0)
  }
  const visibility = amount < itemsPerPage ? "hidden" : "visible"

  return (
    <Container style={{ visibility }}>
      <div>
        <span onClick={onClickBefore} />
        <div>{page + 1}</div>
        <span role="button" className="right" onClick={onClickAfter} />
      </div>
    </Container>
  )
}
