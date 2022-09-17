import React, { useState } from "react";

function VisiblityToggleApp() {
    const [isShow, setIsShow] = useState(true);
  return <div>
    <h1>VisiblityToggleApp</h1>
    <button onClick={() => setIsShow(!isShow)} >{isShow?'Hide details':'show details'}</button>
    {isShow && (
            <div>
                <p>Now you can see some details</p>
            </div>
        )}
  </div>;
}

export default VisiblityToggleApp;
