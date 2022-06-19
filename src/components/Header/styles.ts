import styled from "styled-components"

export default styled.div`
  position: relative;
  height: 120px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  & > input {
    outline: none;
    display: block;
    flex-grow: 0.5;
    height: 30px;
    border-radius: 20px;
    background-color: var(--surface);
    text-align: center;
    max-width: 250px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  }
`
