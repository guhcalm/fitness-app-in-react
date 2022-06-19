import styled from "styled-components"

export default styled.div`
  margin-top: 30px;
  margin-bottom: 5px;
  position: relative;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  height: 330px;

  ::-webkit-scrollbar {
    height: 3px;
  }
  ::-webkit-scrollbar-thumb:horizontal {
    border-radius: 100vmax;
    background-color: rgba(0, 0, 15, 0.3);
    cursor: pointer;
  }
`

export const Items = styled.ul`
  user-select: none;
  padding: 10px;
  gap: 10px;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
`
