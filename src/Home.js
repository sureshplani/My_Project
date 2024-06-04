import React from "react";
import "./home.css";
import { IoArrowForwardOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate()
  
  const handleExplore = () => {
   navigate("/home")
  }

  return (

    <div className="home">

      <div className="home-bg">

        <div className="home-bg-text">
          <h1> Welcome To My Website </h1>
          
        </div>

        <button onClick={handleExplore}>
          Explore<IoArrowForwardOutline className="forward"/>
        </button>
        
      </div>
    </div>
  );
}

export default Home;
