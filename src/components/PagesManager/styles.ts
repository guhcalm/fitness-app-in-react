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
    border-radius: 25px;
    background-color: var(--surface);
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);

    & > span {
      display: flex;
      height: 30px;
      width: 30px;
      border-radius: 15px;
      background-image: radial-gradient(circle at 0 0, rgba(255, 0, 0, 0.15), transparent),
        radial-gradient(circle at 0% 100%, rgba(255, 255, 0, 0.15), transparent),
        radial-gradient(circle at 100% 50%, rgba(0, 0, 255, 0.15), transparent);
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
