import styled from "styled-components"

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  & > div {
    height: 50px;
    width: 170px;
    display: flex;
    padding: 0 5px;
    justify-content: space-between;
    align-items: center;
    border-radius: 25px;
    background-color: var(--surface);
    box-shadow: 1px 1px 5px black;

    & > span {
      display: flex;
      background-image: linear-gradient(var(--surface-on-light), transparent);
      height: 40px;
      width: 40px;
      border-radius: 20px;
    }
    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: Poiret One, cursive;
      font-weight: 900;
      user-select: none;
    }
  }
`
