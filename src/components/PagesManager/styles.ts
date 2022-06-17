import styled from "styled-components"

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 20px;
  & > div {
    height: 40px;
    width: 130px;
    display: flex;
    padding: 0 10px;
    justify-content: space-between;
    align-items: center;
    border-radius: 25px 25px 0 0 / 25px 25px 0 0;
    background-color: var(--surface);
    box-shadow: 1px 1px 3px black;

    & > span {
      display: flex;
      background-image: linear-gradient(transparent, var(--surface-on-light));
      height: 30px;
      width: 30px;
      border-radius: 15px;
    }
    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: Poiret One, cursive;
      font-weight: 900;
      user-select: none;
      font-size: 13px;
      color: var(--on-surface);
    }
  }
`
