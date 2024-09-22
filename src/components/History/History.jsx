import React from "react";
import { useNavigate } from "react-router-dom";

const History = ({ workoutHistory }) => {
  const navigate = useNavigate();

  return (
    <div className="history-container">
      <h2>Workout History</h2>
      {workoutHistory.length === 0 ? (
        <p>No workouts added yet.</p>
      ) : (
        <ul>
          {workoutHistory.map((workout, index) => (
            <li key={index}>
              <strong>{workout.name}</strong> (
              {new Date(workout.date).toDateString()}):
              <br />
              {workout.exercises.map((exercise, i) => (
                <span key={i}>
                  {exercise.name} - {exercise.weight}kg, {exercise.sets} sets,{" "}
                  {exercise.reps} reps
                  <br />
                </span>
              ))}
            </li>
          ))}
        </ul>
      )}
      <button className="back-home-btn" onClick={() => navigate("/")}>
        Home
      </button>
    </div>
  );
};

export default History;
