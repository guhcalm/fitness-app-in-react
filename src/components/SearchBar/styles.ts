import styled from "styled-components"

export default styled.form`
  flex-grow: 0.5;
  height: 30px;
  border-radius: 20px;
  background-color: var(--surface);
  max-width: 250px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  position: relative;

  &.focus {
    transition: border-radius 0.5s linear;
  }

  & > input {
    text-align: center;
    flex: 1;
    background-color: transparent;
    outline: none;
    color: var(--on-surface);
    &::placeholder {
      color: var(--on-surface);
      opacity: 0.7;
      font-size: 12px;
    }
  }

  & > img,
  & > button {
    height: 50%;
    opacity: 0.5;
    cursor: pointer;
  }

  & > button {
    background: transparent;
    & > img {
      height: 100%;
    }
  }

  & > img.visible {
    visibility: visible;
  }

  & > img.hidden {
    visibility: hidden;
  }
`
