import styled from "styled-components"

export default styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: var(--background);

  background-image: radial-gradient(circle at 0 0, rgba(255, 0, 0, 0.05), transparent),
    radial-gradient(circle at 0% 100%, rgba(255, 255, 0, 0.05), transparent),
    radial-gradient(circle at 100% 50%, rgba(0, 0, 255, 0.05), transparent);

  & > span {
    font-size: 20px;
    font-family: Poiret One;
    font-weight: 900;
    align-self: start;
    padding-left: 20px;
    padding-top: 15px;
    color: var(--on-background);
  }
`
