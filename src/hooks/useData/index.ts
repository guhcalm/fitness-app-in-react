import { useEffect } from "react"
import useCustomContext from "../useCustomContext"
import { bodyParts, equipment, exercises } from "../../response"

export default () => {
  const { state, dispatch, actions } = useCustomContext()
  // global data
  useEffect(() => {
    dispatch(
      actions.setExercisesData({
        exercisesList: exercises,
        bodyPartsList: ["all", ...bodyParts]
      })
    )
  }, [])
  // filtered list
  useEffect(() => {
    ;(() => {
      const { filter } = state.response
      const { exercisesList } = state.response
      if (filter === "all") return dispatch(actions.setFilteredList(exercisesList))
      dispatch(actions.setFilteredList(exercisesList.filter(({ bodyPart }) => bodyPart === filter)))
    })()
  }, [state.response.exercisesList, state.response.filter])
  // searched list
  useEffect(() => {
    ;(() => {
      const { search } = state.response
      const { filteredList } = state.response
      if (!search) return dispatch(actions.setSearchedList(filteredList))
      dispatch(
        actions.setSearchedList(
          filteredList.filter(
            ({ bodyPart, name, equipment, gifUrl, target }) =>
              bodyPart.includes(search) ||
              name.includes(search) ||
              equipment.includes(search) ||
              gifUrl.includes(search) ||
              target.includes(search)
          )
        )
      )
    })()
  }, [state.response.filteredList, state.response.search])
}
