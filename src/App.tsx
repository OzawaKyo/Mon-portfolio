import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/Homepage"
// import ChaosModePage from "./pages/ChaosModePage"
// import { ChaosProvider } from "./contexts/ChaosContext"
// import { ThemeProvider } from "./contexts/ThemeContext"
// import LoadingAnimation from "./components/LoadingAnimation"
// import CursorFollower from "./components/CursorFollower"
// import ChaosEffects from "./components/ChaosEffects"
import "./styles/global.css"

function App() {
  return (
    // <ThemeProvider>
    //   <ChaosProvider>
        <Router>
    {/* //       <LoadingAnimation />
    //       <CursorFollower />
    //       <ChaosEffects /> */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/chaos-mode" element={<ChaosModePage />} /> */}
          </Routes>
        </Router>
    //   </ChaosProvider>
    // </ThemeProvider>
  )
}

export default App
