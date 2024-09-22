import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import benchpress from "../../assets/benchpress.jpg";
import dumbbellpress from "../../assets/dumbbellpress.jpeg";
import squat from "../../assets/squat.jpg";
import legraises from "../../assets/legraises.jpg";
import calfraise from "../../assets/calfraise.jpg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-img-container">
        <h1>Exercises</h1>
        <div className="home-imgs">
          <div>
            <img src={benchpress} height={200} alt="" />
            <h3>Bench press</h3>
          </div>

          <div>
            <img src={dumbbellpress} height={200} alt="" />
            <h3>Dumbbell press</h3>
          </div>
          <div>
            <img src={squat} height={200} alt="" />
            <h3>Squats</h3>
          </div>
          <div>
            <img src={legraises} height={200} alt="" />
            <h3>Leg Raises</h3>
          </div>
          <div>
            <img src={calfraise} height={200} alt="" />
            <h3>Calf raises</h3>
          </div>
        </div>
      </div>
      <div className="">
        <Link to="/add-workout" className="add-workout-btn">
          Add Workout
        </Link>
        <button
          className="workout-history-btn"
          onClick={() => navigate("/history")}
        >
          Workout History
        </button>
      </div>
    </div>
  );
};

export default Home;
