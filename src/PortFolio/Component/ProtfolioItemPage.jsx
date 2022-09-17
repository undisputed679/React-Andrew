import React from 'react'
import { useParams } from "react-router-dom";

function ProtfolioItemPage() {
    let {id}=useParams();
  return (
    <div>
      this is portfolio item page {id}
    </div>
  )
}

export default ProtfolioItemPage
