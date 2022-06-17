import styled from "styled-components"

export default styled.div`
  position: absolute;
  bottom: 0;
  height: 40px;
  width: 100%;
  overflow: hidden;
  transform: translateY(5px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  & > ul {
    height: 35px;
    user-select: none;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    & > li {
      list-style: none;
      height: 100%;
      min-width: 100px;
      padding: 0 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      &.current {
        &::before {
          content: "";
          display: block;
          width: 80%;
          height: 5px;
          background-color: cyan;
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translate(-50%, 50%);
          border-radius: 50%;
          filter: blur(3px);
        }
        &::after {
          box-shadow: inset 1px -1.3px 1px -1px var(--surface-on-light);
        }
      }
      &::after {
        position: absolute;
        left: 0;
        right: 0;
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background-color: var(--surface);
        border-bottom: 0.5px solid rgba(255, 255, 255, 0.1);
      }
      & > span {
        cursor: pointer;
        font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode",
          Geneva, Verdana, sans-serif;
        font-size: 12px;
        z-index: 2;
        color: var(--on-surface);
      }
    }
  }
`
