import React, { useState, useEffect } from 'react';
import './App.css';
// import data from './data.txt';

function App() {
  
  const [ quotes, setQuotes] = useState('');
  
  const getQuote = () => {
    fetch('data.json')
			.then((res) => res.json())
			.then((data) => {
				let randomNum = Math.floor(Math.random() * data.length);
				setQuotes(data[randomNum]);
			});
  }
  
  useEffect(() => {
    getQuote();
  }, []);
  
  return (
		<div className="App">
			<div className="quote">
				<p>{quotes.text}</p>
        
				<div className="btnContainer">
					<button onClick={getQuote} className="btn">Get Quote</button>
				</div>
        
			</div>
		</div>
	);
}

export default App;
