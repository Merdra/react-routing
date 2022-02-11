import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from "react-bootstrap";

export default function About() {

    const navigate = useNavigate();
  return (
    <div>
        <h3>About</h3>
        <Button onClick={() => navigate("/")}>Go to Home page</Button>
        <Button onClick={() => navigate("/about")}>Go to About page</Button>
        <Button onClick={() => navigate("/profile")}>Go to Profile page</Button>       
    </div>
  )
}
