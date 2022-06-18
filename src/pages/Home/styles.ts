import styled from "styled-components"

export default styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: var(--background);
  background-image: radial-gradient(circle at 0 0, rgba(255, 0, 0, 0.05), transparent),
    radial-gradient(circle at 0% 100%, rgba(255, 255, 0, 0.05), transparent),
    radial-gradient(circle at 100% 50%, rgba(0, 0, 255, 0.05), transparent);
`

export const Button = styled.div`
  background-image: radial-gradient(circle at 100% 50%, blue, transparent 85%);
  width: 100px;
  height: 100px;
  border-radius: 0 100% 100% 0 / 0 50% 50% 0;
`
