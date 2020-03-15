import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Switch, Route } from 'react-router-dom'
import MyNavbar from './components/MyNavbar'

function App() {

  return (
    <>
    <Switch>
      <MyNavbar />
    </Switch>
    </>
  );
}

export default App;
