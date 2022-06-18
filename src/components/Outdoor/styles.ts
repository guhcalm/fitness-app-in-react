import styled from "styled-components"

export default styled.div`
  width: 100%;
  height: 100vh;
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

export const GradientCircle = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  background-color: var(--background);
  opacity: 0.3;
  background-image: radial-gradient(circle at 0 0, rgba(255, 0, 0, 0.5), transparent),
    radial-gradient(circle at 0% 100%, rgba(255, 255, 0, 0.5), transparent),
    radial-gradient(circle at 100% 50%, rgba(0, 0, 255, 0.5), transparent);
  width: 100%;
  height: 100%;
`

export const Gradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background: var(--surface);
  width: 100%;
  height: 80px;
  border-radius: 30px 30px 0 0;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
`
