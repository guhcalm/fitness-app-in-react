import styled from "styled-components"

export default styled.div`
  position: relative;
  width: 100%;
  background-image: linear-gradient(to bottom, var(--surface), transparent);
  text-align: center;
  color: var(--on-surface);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 35px;
  padding: 0 30px;
  padding-bottom: 80px;
  font-family: Poiret One;
  & > h1 {
    position: absolute;
    top: 0;
    transform: translateY(calc(-100% - 10px));
    font-size: 20px;
    text-transform: capitalize;
  }
  & > span {
    font-size: 15px;
    font-style: italic;
    font-weight: 900;
    opacity: 0.8;
  }
  & > p {
    font-size: 15px;
    font-weight: 900;
    & > span {
      font-size: 15px;
      font-style: italic;
      font-weight: 900;
      text-transform: capitalize;
      font-style: italic;
      text-decoration: underline;
    }
  }
`
