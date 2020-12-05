import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from './components/navbar/navbar';
import EditExercise from './components/editExercise/editExercise';
import CreateExercise from './components/createExercise/createExercise';
import CreateUser from './components/createUser/createUser';
import ExercisesList from './components/exercisesList/exercisesList';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ExercisesList} />
        <Route path="/editEx/:id" component={EditExercise} />
        <Route path="/createEx" component={CreateExercise} /> 
        <Route path="/createUser" component={CreateUser} />
      </div>
    </BrowserRouter>
  );
}

export default App;
