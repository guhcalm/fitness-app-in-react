import styled from "styled-components"

export default styled.div`
  cursor: pointer;
  width: 80px;
  height: 110px;
  overflow: hidden;
  position: relative;
  & > div {
    position: absolute;
    left: calc(50% - 10px);
    top: 50%;
    transform: translate(-50%, -50%);
    height: 20px;
    width: 10px;
    background-color: var(--on-surface);
    clip-path: polygon(100% 0, 4px 50%, 100% 100%, 0 50%);
    opacity: 0.8;
  }
  & > span {
    overflow: hidden;
    position: relative;
    display: block;
    width: 110px;
    height: 110px;
    transform: scaleX(170%);
    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      background-image: radial-gradient(
        circle at 100% 0%,
        var(--surface-on-light),
        var(--surface) 55%
      );
      border-radius: 30px;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
`
