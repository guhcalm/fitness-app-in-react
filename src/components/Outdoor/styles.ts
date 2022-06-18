import styled from "styled-components"

export default styled.div`
  width: 600px;
  height: 500px;
  background-color: white;
  position: relative;
  overflow: hidden;
`

export const Exercise = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

export const Gradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-image: linear-gradient(to top, var(--surface), transparent 30%),
    linear-gradient(to bottom, var(--surface), transparent 30%);
  width: 100%;
  height: 100%;
`
