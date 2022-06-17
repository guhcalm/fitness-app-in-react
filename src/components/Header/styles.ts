import styled from "styled-components"

export default styled.div`
  position: relative;
  height: 150px;
  width: 900px;
  background-color: var(--surface);
  box-shadow: 0 2px 5px black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  & > input {
    outline: none;
    display: block;
    flex-grow: 0.6;
    height: 30px;
    border-radius: 20px;
    background-color: var(--surface-on-dark);
    text-align: center;
    max-width: 250px;
  }
`
