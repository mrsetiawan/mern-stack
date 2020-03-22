import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Switch, Route } from 'react-router-dom'
import MyNavbar from './components/MyNavbar'
import ExerciseList from './pages/ExerciseList'
import ExerciseForm from './pages/ExerciseForm'
import UserForm from './pages/UserForm'

function App() {

  return (
    <>
      <Switch>
        <MyNavbar />
        <Route path='/' exact component={ExerciseList} />
        <Route path='/exercise/form' component={ExerciseForm} />
        <Route path='/user/form' component={UserForm} />
      </Switch>
    </>
  );
}

export default App;
