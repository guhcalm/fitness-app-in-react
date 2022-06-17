import styled from "styled-components"

export default styled.div`
  position: relative;
  height: 120px;
  width: 100%;
  background-color: var(--surface);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;

  & > input {
    outline: none;
    display: block;
    flex-grow: 0.5;
    height: 30px;
    border-radius: 20px;
    background-color: var(--surface-on-dark);
    text-align: center;
    margin-top: 55px;
    transform: translateY(-50%);
  }
`
