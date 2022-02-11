import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h3>Home</h3>
        <Button onClick={() => navigate("/")}>Go to Home page</Button>
        <Button onClick={() => navigate("/about")}>Go to About page</Button>
        <Button onClick={() => navigate("/profile")}>Go to Profile page</Button> 
    </div>
  );
}

export default Home;
