import { FilterCard, HorizontalScroll } from "../../components"
import { useCustomContext } from "../../hooks"

export default () => {
  const { state } = useCustomContext()
  return (
    <HorizontalScroll>
      {state.response.bodyPartsList.map(item => (
        <FilterCard item={item} key={item} name={item} />
      ))}
    </HorizontalScroll>
  )
}
