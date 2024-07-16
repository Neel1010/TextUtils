import Alert from "./Alert.jsx"
import Navbar from "./Navbar.jsx"
import TextUtils from './TextUtils.jsx'
import React, { useState } from "react"
import About from './About.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const lightModeStyle = {
    color: "black",
    backgroundColor: "white"

  }
  const darkModeStyle = {
    color: "#beb7b7",
    backgroundColor: "#212121"
  }
  const [theme, changeTheme] = useState({
    mode: 'light',
    style: lightModeStyle
  })
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => { setAlert(null) }, 2000)
  }

  const toggleMode = () => {

    if (theme.mode === 'light') {
      changeTheme({
        mode: 'dark',
        style: darkModeStyle
      })

      document.body.style.backgroundColor = darkModeStyle.backgroundColor
      showAlert("Theme changed to dark", "success")
    }
    else {
      changeTheme({
        mode: 'light',
        style: lightModeStyle
      })

      document.body.style.backgroundColor = lightModeStyle.backgroundColor
      showAlert("Theme changed to light", "success")
    }
  }


  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About" theme={theme} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
        <Route path="" element={<TextUtils heading="Enter text to anaylze" theme={theme} showAlert={showAlert}/>} />
        <Route path="/about" element={<About />} />
        
        
      </Routes>
      </Router>
    </>
  )

}

export default App
