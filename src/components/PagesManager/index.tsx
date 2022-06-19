import { useCustomContext } from "../../hooks"
import Container from "./styles"

export default () => {
  const { state, dispatch, actions } = useCustomContext()
  const { page, itemsPerPage, searchedList } = state.response
  const amount = searchedList.length
  const onClickBefore = () => {
    if (page <= 0) return
    dispatch(actions.setPage(page - 1))
  }
  const onClickAfter = () => {
    const amoutsPages = Math.trunc(amount / page)
    if (page >= amoutsPages) return
    dispatch(actions.setPage(page + 1))
  }
  const visibility = amount < itemsPerPage ? "hidden" : "visible"

  return (
    <Container style={{ visibility }}>
      <div>
        <span onClick={onClickBefore} />
        <div>{page}</div>
        <span className="right" onClick={onClickAfter} />
      </div>
    </Container>
  )
}
