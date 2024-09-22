import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Addworkout.css";

const AddWorkout = ({
  onAddWorkoutSubmit,
  workoutName,
  setWorkoutName,
  exercises,
  setExercises,
}) => {
  const [selectedExercise, setSelectedExercise] = useState("");
  const [weight, setWeight] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const navigate = useNavigate();

  const exerciseOptions = [
    "Bench Press",
    "Dumbbell Press",
    "Squats",
    "Leg Raises",
    "Calf Raise",
  ];

  const handleAddExercise = () => {
    if (!selectedExercise || !weight || !sets || !reps) {
      alert("Please fill in all fields before adding an exercise.");
      return;
    }

    const newExercise = { name: selectedExercise, weight, sets, reps };
    setExercises([...exercises, newExercise]);
    setSelectedExercise("");
    setWeight("");
    setSets("");
    setReps("");
  };

  const handleWorkoutSubmit = (e) => {
    e.preventDefault();
    onAddWorkoutSubmit();
  };

  const handleCancelClick = () => {
    navigate("/");
  };

  return (
    <div className="form-container">
      <h2 className="form-container-title">Add Workout</h2>
      <div className="form-container2">
        <button className="close-btn" onClick={handleCancelClick}>
          x
        </button>
        <form onSubmit={handleWorkoutSubmit} className="workout-form">
          <div className="form-group">
            <input
              type="text"
              placeholder="Workout Name"
              value={workoutName}
              onChange={(e) => setWorkoutName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <select
              value={selectedExercise}
              onChange={(e) => setSelectedExercise(e.target.value)}
            >
              <option value="" disabled>
                Select Exercise
              </option>
              {exerciseOptions.map((exercise) => (
                <option key={exercise} value={exercise}>
                  {exercise}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <input
              type="number"
              min="0"
              placeholder="Weight (kg)"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="number"
              min="0"
              placeholder="Sets"
              value={sets}
              onChange={(e) => setSets(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="number"
              min="0"
              placeholder="Reps"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
            />
          </div>

          <button
            type="button"
            className="add-exercise-btn"
            onClick={handleAddExercise}
          >
            Add Exercise
          </button>

          <ul className="exercise-list">
            {exercises.map((exercise, index) => (
              <li key={index}>
                <strong>{exercise.name}</strong>: {exercise.weight}kg,{" "}
                {exercise.sets} sets, {exercise.reps} reps
              </li>
            ))}
          </ul>

          <button type="submit" className="submit-btn">
            Save Workout
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddWorkout;
