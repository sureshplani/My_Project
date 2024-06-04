import "./App.css";
import Nav from "./Nav";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import ColourChange from "./ColourChange";
import Workout from "./Workout";
import Home from "./Home";
import WorkoutHome from "./WorkoutHome";
import WorkoutList from "./WorkoutList";
import { FitnessContext } from "./Context";
import Rest from "./Rest";
import ProjectHome from "./ProjectHome";
import Download from "./Download";
import One from "./games/One";


function App() {
  return (
    <div className="App">
      <Nav />
      <FitnessContext>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<ProjectHome/>} />
          <Route path="/download" element={<Download />} />
          <Route path="/color" element={<ColourChange />} />
          <Route path="/workoutpage/:id" element={<Workout />} />
          <Route path="/workoutHome" element={<WorkoutHome />} />
          <Route path="/workout/:id" element={<WorkoutList />} />
          <Route path="/rest/:id/:indexid" element={<Rest />} />
          <Route path="/games" element={<One />} />
        </Routes>
      </FitnessContext>
      <Footer />
    </div>
  );
}

export default App;
