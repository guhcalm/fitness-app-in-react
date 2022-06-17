import styled from "styled-components"

export default styled.div`
  background-color: white;
  width: 200px;
  height: 300px;
  border-radius: 15px;
  box-shadow: 1px 1px 5px black;
  position: relative;
  overflow: hidden;
  user-select: none;

  & > img {
    width: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  & > span {
    font-family: "Poiret One", cursive;
    font-weight: bolder;
    font-size: 10px;
    position: absolute;
    left: 50%;
    bottom: 16px;
    transform: translateX(-50%);
    text-shadow: 0px 0px 20px white;
    cursor: pointer;
  }

  & > div {
    visibility: hidden;
    width: 100%;
    height: 40px;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: black;
    display: flex;
    justify-content: center;
    gap: 1px;
    align-items: center;
    & > span {
      flex-grow: 1;
      height: 100%;
      background-color: rgb(20, 20, 20);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 0.5px;
      font-family: "Poiret One", cursive;
      font-size: 8px;
      font-weight: 900;
      color: #ddd;
      text-transform: uppercase;
    }
  }
  &:hover {
    & > span {
      top: 15px;
    }
    & > div {
      visibility: visible;
    }
  }
`
