import React, { useState } from "react";
import Request from "./component/Request";
import Thank_you from "./component/Thank_you";

const App = () => {
  const [value, setValue] = useState(null);
  const [rated, setRated] = useState(false);
  return (
    <>
      {rated ? (
        <Thank_you value={value} />
      ) : (
        <Request value={value} setValue={setValue} setRated={setRated} />
      )}
    </>
  );
};

export default App;
