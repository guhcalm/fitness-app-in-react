import { useCustomContext } from "../../hooks"
import { HorizontalScroll, SimilarResultsCard } from "../../components"

export default () => {
  const { state } = useCustomContext()
  return (
    <HorizontalScroll>
      {state.response.searchedList.slice(0, 12).map(item => (
        <SimilarResultsCard item={item} key={item.id} />
      ))}
    </HorizontalScroll>
  )
}
