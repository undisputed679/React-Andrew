import React from 'react'
import { useParams } from "react-router-dom";

function EditExpence(props) {
  console.log(props)
  let {id}=useParams();
  return (
    <div>
      this is from edit expence component {id}
    </div>
  )
}

export default EditExpence
