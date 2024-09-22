import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import AddWorkout from "./components/Addworkout/Addworkout";
import History from "./components/History/History";
import "./App.css";

const App = () => {
  const [workoutName, setWorkoutName] = useState("");
  const [exercises, setExercises] = useState([]);
  const [workoutHistory, setWorkoutHistory] = useState(() => {
    const savedHistory = localStorage.getItem("workoutHistory");
    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  useEffect(() => {
    localStorage.setItem("workoutHistory", JSON.stringify(workoutHistory));
  }, [workoutHistory]);

  const handleAddWorkoutSubmit = () => {
    const newWorkout = {
      name: workoutName,
      exercises,
      date: new Date().toISOString(),
    };

    setWorkoutHistory([...workoutHistory, newWorkout]);
    resetFormFields();
  };

  const resetFormFields = () => {
    setWorkoutName("");
    setExercises([]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/add-workout"
          element={
            <AddWorkout
              onAddWorkoutSubmit={handleAddWorkoutSubmit}
              workoutName={workoutName}
              setWorkoutName={setWorkoutName}
              exercises={exercises}
              setExercises={setExercises}
            />
          }
        />

        <Route
          path="/history"
          element={<History workoutHistory={workoutHistory} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
