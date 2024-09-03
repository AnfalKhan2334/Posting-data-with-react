import React, { useState } from 'react';

export default function Form() {
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedValue(inputValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Post Data"
          value={inputValue}
          onChange={handleInputChange}
        />
        <br /><br />
        <button type="submit">Post</button>
      </form>
      {submittedValue && (
        <div>
          <h3>Post Data:</h3>
          <p>{submittedValue}</p>
        </div>
      )}
    </div>
  );
}
