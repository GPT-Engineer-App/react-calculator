import React, { useState } from 'react';

const Index = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input)); // Note: eval is used here for simplicity, but it's not recommended for production use due to security risks.
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Calculator</h1>
        <div className="mb-4">
          <input
            type="text"
            value={input}
            readOnly
            className="w-full p-2 mb-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            value={result}
            readOnly
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="grid grid-cols-4 gap-2">
          {['7', '8', '9', '/'].map((value) => (
            <button
              key={value}
              onClick={() => handleClick(value)}
              className="p-2 bg-blue-500 text-white rounded"
            >
              {value}
            </button>
          ))}
          {['4', '5', '6', '*'].map((value) => (
            <button
              key={value}
              onClick={() => handleClick(value)}
              className="p-2 bg-blue-500 text-white rounded"
            >
              {value}
            </button>
          ))}
          {['1', '2', '3', '-'].map((value) => (
            <button
              key={value}
              onClick={() => handleClick(value)}
              className="p-2 bg-blue-500 text-white rounded"
            >
              {value}
            </button>
          ))}
          {['0', '.', '=', '+'].map((value) => (
            <button
              key={value}
              onClick={() => (value === '=' ? handleCalculate() : handleClick(value))}
              className="p-2 bg-blue-500 text-white rounded"
            >
              {value}
            </button>
          ))}
          <button
            onClick={handleClear}
            className="col-span-4 p-2 bg-red-500 text-white rounded"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;