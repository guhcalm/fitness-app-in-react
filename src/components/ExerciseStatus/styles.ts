import styled from "styled-components"

export default styled.div`
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translateY(-50%);

  & > div {
    padding: 10px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    & > div {
      border: 1px solid rgba(0, 0, 0, 0.5);
      width: 70px;
      height: 70px;
      border-radius: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      & > img {
        width: 30px;
      }
      & > span {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        text-transform: capitalize;
        font-family: Poiret One;
        font-weight: 900;
        font-size: 11px;
        color: var(--on-surface);
      }
    }
  }
`
