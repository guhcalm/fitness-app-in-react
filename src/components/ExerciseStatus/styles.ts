import styled from "styled-components"

export default styled.div`
  position: absolute;
  right: 0px;
  top: calc(50%);
  transform: translateY(-50%);

  & > div {
    padding: 10px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    & > div {
      background-image: radial-gradient(circle at 0 0, rgba(255, 0, 0, 0.1), transparent),
        radial-gradient(circle at 0% 100%, rgba(255, 255, 0, 0.1), transparent),
        radial-gradient(circle at 100% 50%, rgba(0, 0, 255, 0.1), transparent);
      box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
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
        font-size: 10px;
        color: var(--on-surface);
        opacity: 0.8;
      }
    }
  }
`
