import styled from "styled-components"
import { ThemeInterface } from "../../interfaces"

export default styled.div`
  ${({ palette }: { palette: ThemeInterface["palette"] }) => `
  --background: ${palette.background.main};
  --on-background: ${palette.background.on};
  --surface: ${palette.surface.main};
  --on-surface: ${palette.surface.on};
  --surface-on-light: ${palette.surface.light};
  --surface-on-dark: ${palette.surface.dark};
  --primary: ${palette.primary.main};
  --on-primary: ${palette.primary.on};
  --primary-on-light: ${palette.primary.light};
  --primary-on-dark: ${palette.primary.dark};
  --secondary: ${palette.secondary.main};
  --on-secondary: ${palette.secondary.on};
  --secondary-on-light: ${palette.secondary.light};
  --secondary-on-dark: ${palette.secondary.dark};
  `}
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background);
`
