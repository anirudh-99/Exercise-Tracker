import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from './components/navbar';
import EditExercise from './components/editExercise';
import CreateExercise from './components/createExercise';
import CreateUser from './components/createUser';
import ExercisesList from './components/exercisesList';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" component={ExercisesList} />
        <Route path="/editEx/:id" component={EditExercise} />
        <Route path="/createEx" component={CreateExercise} /> 
        <Route path="/createUser" component={CreateUser} />
      </div>
    </BrowserRouter>
  );
}

export default App;
