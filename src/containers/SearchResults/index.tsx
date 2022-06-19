import { useCustomContext } from "../../hooks"
import MansoryCard from "../../components/MansoryCard"
import MansoryLayout from "../../components/MansoryLayout"

export default () => {
  const { state } = useCustomContext()
  const { page, itemsPerPage } = state.response
  const first = page * itemsPerPage
  const last = first + itemsPerPage
  return (
    <MansoryLayout>
      {state.response.searchedList.slice(first, last).map(item => (
        <MansoryCard item={item} key={item.id} />
      ))}
    </MansoryLayout>
  )
}
