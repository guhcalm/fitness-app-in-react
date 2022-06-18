import { Routes, Route } from "react-router-dom"
import { App } from "./containers"
import { Home, Exercise } from "./pages"

const MyApp = () => (
  <App>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<Exercise />} />
      <Route path="*" element={<Home />} />
    </Routes>
  </App>
)

export default MyApp
