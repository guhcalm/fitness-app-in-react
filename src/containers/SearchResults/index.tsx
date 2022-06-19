import { useCustomContext } from "../../hooks"
import MansoryCard from "../../components/MansoryCard"
import MansoryLayout from "../../components/MansoryLayout"

export default () => {
  const { state } = useCustomContext()
  return (
    <MansoryLayout>
      {state.exercises.slice(0, 12).map(item => (
        <MansoryCard item={item} key={item.id} />
      ))}
    </MansoryLayout>
  )
}
