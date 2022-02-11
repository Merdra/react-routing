import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


export default function Profile() {
    const navigate = useNavigate();

  return (
    <div>
        <h3>Profile</h3>
        <Button onClick={() => navigate("/")}>Go to Home page</Button>
        <Button onClick={() => navigate("/about")}>Go to About page</Button>
        <Button onClick={() => navigate("/profile")}>Go to Profile page</Button> 
    </div>
  )
}
