import styled from "styled-components"

export default styled.li`
  background-color: white;
  max-width: 340px;
  border-radius: 15px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
  user-select: none;
  grid-row: span 20;

  &.small {
    grid-row: span 10;
  }
  &.medium {
    grid-row: span 20;
  }
  &.larger {
    grid-row: span 30;
  }

  & > span {
    font-family: "Poiret One", cursive;
    font-weight: bolder;
    font-size: 10px;
    position: absolute;
    left: 50%;
    bottom: 18px;
    transform: translateX(-50%);
    text-shadow: 0px 0px 20px white;
    cursor: pointer;
    text-transform: capitalize;
  }

  & > div {
    visibility: hidden;
    width: 100%;
    height: 40px;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: var(--surface-on-dark);
    display: flex;
    justify-content: center;
    gap: 1px;
    align-items: center;
    & > span {
      flex-grow: 1;
      height: 100%;
      background-color: var(--surface);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 0.5px;
      font-family: "Poiret One", cursive;
      font-size: 8px;
      font-weight: 900;
      color: var(--on-surface);
      text-transform: uppercase;
    }
  }
  &:hover {
    & > span {
      top: 23px;
    }
    & > div {
      visibility: visible;
    }
  }
`

export const Exercise = styled.img`
  width: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Icon = styled.img`
  width: 30px;
  position: absolute;
  top: 15px;
  left: 15px;
  opacity: 0.5;
`
