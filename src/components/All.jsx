import React from 'react';
import {useParams} from 'react-router-dom';

function All() {
  let {usernames} = useParams();
  return (
    <div>
      <p>This is ALL page for {usernames} </p>
    </div>
  )
}

export default All
