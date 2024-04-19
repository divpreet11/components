import React from 'react';

function FunctionComponentWithButton() {
  const handleClick = () => {
    // Perform some task here
    alert("task Completed")
  };

  return (
    <div>
      <h1>Function Component with Button</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default FunctionComponentWithButton;

