import styled from "styled-components"

export default styled.div`
  cursor: pointer;
  width: 80px;
  height: 110px;
  overflow: hidden;
  position: relative;
  transform: scaleX(-100%);

  & > div {
    position: absolute;
    right: calc(50% + 3px);
    top: 50%;
    transform: translate(-50%, -50%);
    height: 20px;
    width: 10px;
    opacity: 0.6;
    & > img {
      height: 100%;
    }
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
