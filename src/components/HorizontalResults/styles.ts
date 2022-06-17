import styled from "styled-components"

export default styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  min-height: 320px;
  overflow: hidden;
`

export const Items = styled.div`
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
