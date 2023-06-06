import React, { useState } from 'react';

 

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

 

  const handleNum1Change = (e) => {
    setNum1(Number(e.target.value));
  };

 

  const handleNum2Change = (e) => {
    setNum2(Number(e.target.value));
  };

 

  const handleAddition = () => {
    setResult(num1 + num2);
  };

 

  const handleSubtraction = () => {
    setResult(num1 - num2);
  };

 

  return (
<div>
<h2>Calculator Microfrontend</h2>
<input type="number" value={num1} onChange={handleNum1Change} />
<input type="number" value={num2} onChange={handleNum2Change} />
<button onClick={handleAddition}>Add</button>
<button onClick={handleSubtraction}>Subtract</button>
<p>Result: {result}</p>
</div>
  );
};

 

export default Calculator;