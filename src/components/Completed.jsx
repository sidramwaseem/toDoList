import React from 'react';
import {useNavigate} from "react-router-dom"

function Completed() {
  let navigate = useNavigate();
  return (
    <div>
      <p>Thhis is COMPLETED page</p>
      <button onClick={()=>{navigate("/active")}}>Go to active page</button>
    </div>
  )
}

export default Completed
