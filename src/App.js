import React, { useState } from 'react';
import './index.css';
import Values from 'values.js';
import Color from './Color';
import data from './data';
import rgbToHex from './utils';

function App() {
  const [color, setColor] = useState(''); 
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(color[0] !== '#') {
      for(let i = 0;i < data.length; i++) {
        if(color === data[i].label){
          setColor(rgbToHex(data[i].rgb))
        }
      }
    }
    try {
      let colors = new Values(color).all(10);
      setList(colors)
    } catch (error) {
      //alert
      console.log(error);
    }
    setColor('');
  }

  return (
    <div className="app">
      <h3 className="title">Color Generator</h3>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            className="color-code"
            value={color} 
            placeholder="red, #FF0000"
            onChange={(e) => setColor(e.target.value)}
            />
          <button type="submit" className="btn-submit">find pattern code</button>
        </form>
      </div>
      <div className="color-container">
        {list.map((color, idx) => {
          const hex = color.hex;
          console.log(idx);
        return <Color key={idx} {...color} idx={idx} hex={hex} />
        })}
      </div>
    </div>
  );
}

export default App;
