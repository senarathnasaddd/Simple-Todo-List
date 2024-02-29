import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [inputText, setInputText] = useState('');  
  const [items, setItems] = useState([]); 
  
 
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleAddItem = () => {
    if (inputText.trim() !== '') {
      setItems([...items, inputText]);
      setInputText('');
    }
  };

  return (
    <div className="app-container">
      <h1>List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type Here"
          value={inputText}
          onChange={handleInputChange}
        />
        <button onClick={handleAddItem}>Add</button>
      </div>
      <ul className="item-list">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
