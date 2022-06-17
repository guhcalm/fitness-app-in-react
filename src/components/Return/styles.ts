import styled from "styled-components"

export default styled.div`
  position: relative;
  width: 90px;
  height: 100px;
  border-radius: 0 100% 100% 0/ 0 50% 50% 0;
  background-image: radial-gradient(
    circle at 100% 50%,
    black 60%,
    transparent 80%
  );
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: "";
    display: block;
    height: 20%;
    width: 12%;
    background-color: var(--background);
    clip-path: polygon(100% 0, 5px 50%, 100% 100%, 0 50%);
    transform: translateX(30%);
  }
`
