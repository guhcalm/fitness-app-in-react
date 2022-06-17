import { createRoot as myRoot } from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom"
import { StateProvider } from "./context"
import { GlobalStyles } from "./styles"
import MyApp from "./_app"

myRoot(root).render(
  <StateProvider>
    <Router>
      <GlobalStyles />
      <MyApp />
    </Router>
  </StateProvider>
)
