import React, { useState } from "react";

import Input from "./Components/Input" 

// ...

const App = () => {
    const [text, setText] = useState(""); // Added useState
    const handleChange = event => 
      setText(event.target.value); // Added handler
    
    return (
      // ...
        <Input 
          value={text}
          onChange={handleChange} // Added onChange-prop
          id="beautiful-input"
          placeholder="Type something here"
          label={text} // Changed label to text-variable
        />
    );
}

export default App 