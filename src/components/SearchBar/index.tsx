import { useState } from "react"
import Container from "./styles"
import searchLight from "../../assets/icons/search_light.png"
import removeLight from "../../assets/icons/remove_light.png"
import searchDark from "../../assets/icons/search_dark.png"
import removeDark from "../../assets/icons/remove_dark.png"
import { useCustomContext } from "../../hooks"
import { ThemesEnum } from "../../interfaces"

const { LIGHT } = ThemesEnum

export default () => {
  const { state } = useCustomContext()
  const { name } = state.theme
  const [term, setTerm] = useState("")
  const [focus, setFocus] = useState(false)
  const onChange = ({ target }) => setTerm(target.value)
  const onRemove = () => setTerm("")
  const onSearch = e => {
    e.preventDefault()
    term && console.log(term)
  }
  const onFocus = () => setFocus(true)
  return (
    <Container className={focus && "focus"}>
      <button type="submit" onClick={onSearch}>
        <img src={name === LIGHT ? searchLight : searchDark} alt="search" />
      </button>
      <input placeholder="Explore" value={term} onChange={onChange} onFocus={onFocus} />
      <img
        src={name === LIGHT ? removeLight : removeDark}
        alt="remove"
        onClick={onRemove}
        className={focus && term ? "visible" : "hidden"}
      />
    </Container>
  )
}
