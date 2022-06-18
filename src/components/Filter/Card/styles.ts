import styled from "styled-components"

export default styled.div`
  background-color: var(--surface);
  min-width: 200px;
  height: 300px;
  // 200 / 300
  border-radius: 15px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
  user-select: none;

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

  & > img {
    width: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.5;
  }

  &.activate,
  &:hover {
    & > img {
      opacity: 1;
    }
  }
`

export const Circle = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 100%;
  border: 3px solid black;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.5;
`
