import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

function App() {
	const [name, setName] = useState("Andrzej")
	const [newElementColour, setNewElementColour] = useState("black")
	const [newElementType, setNewElementType] = useState("cpu")
	const [elements, setElements] = useState([])
	const [num, setNum] = useState(0)
	
	useEffect(() => {
		console.log("zmieniono elements")
	}, [elements])
	
	useEffect(() => {console.log("efekt wywołany")}, [name])
	
	function handleButtonClick(){
		setElements(() => {
			let clone = elements.slice()
			clone.push({
				name: name,
				color: newElementColour,
				type: newElementType
			})
			return clone
		})
	}
	
	function handleRadioChange(e){
		let val = e.target.value
		console.log(val)
		setNewElementColour(val)
	}
	
	function handleElementTypeChange(e){
		setNewElementType(e.target.value)
	}
	
  return (
    <div>
		<p style={{color: newElementColour}}>Imię {name}</p>
		<p>Typ {newElementType} </p>
		<input type="text" id="inputText" />
		
		<div>
			<input onChange={handleRadioChange} type="radio" name="kol" value="black" id="black"  />
			<label for="black">Czarny</label>
			<input onChange={handleRadioChange} type="radio" name="kol" value="red" id="red" />
			<label for="black">Czerwony</label>
			<input onChange={handleRadioChange} type="radio" name="kol" value="pink" id="pink" />
			<label for="pink">Różowy</label>
		</div>
		<div>
			<select name="elementType" onChange={handleElementTypeChange}>
				<option value="cpu">CPU</option>
				<option value="gpu">GPU</option>
				<option value="ram">RAM</option>
			</select>
		</div>
		
		<button onClick={handleButtonClick}>Submit</button>
		
		<div>
			{elements.forEach((el) => {
				return(
					<div style={{color: el.color}}>
						<p> Imię {el.name}</p>
						<p> Typ {el.type}</p>
					</div>
				)
			}
			}
		</div>

	</div>
  );
}

export default App;
