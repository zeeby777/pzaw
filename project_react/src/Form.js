import { FormControl, FormText, InputGroup, FormGroup, Button } from "react-bootstrap"
import { FormCheck } from "react-bootstrap"
import InputGroupText from "react-bootstrap/esm/InputGroupText"
import { useState } from "react"
import ky from "ky"
function Form(){
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [age, setAge] = useState()
    const [gender, setGender] = useState("")

    async function handleFormSubmit(){
        const person = {
            name: name,
            surname: surname,
            age: age,
            gender: gender
        }

        const res = await ky.post('http://127.0.0.1:8080/formzad', person)
        console.log(res)
    
    }

    return(
        <InputGroup className="mb-3">
            <InputGroupText id="name"> Imię
                <FormControl type="text" onChange={(e) => {setName(e.target.value)}}></FormControl>
            </InputGroupText>
            <InputGroupText id="surname"> Nazwisko
                <FormControl type="text" onChange={(e) => { setSurname(e.target.value)}}></FormControl>
            </InputGroupText>

            <InputGroupText id="age">Wiek
                <FormControl type="number" onChange={(e) => {setAge(e.target.value)}}></FormControl>
            </InputGroupText>

            <InputGroupText>
                <FormCheck type="radio" label="Mężczyzna" name="gender" value="male" onChange={(e) => {setGender(e.target.value)}}></FormCheck>
                <FormCheck type="radio" label="Kobieta" name="gender" value="male" onChange={(e) => {setGender(e.target.value)}}></FormCheck>
                <FormCheck type="radio" label="Inne" name="gender" value="male" onChange={(e) => {setGender(e.target.value)}}></FormCheck>
            </InputGroupText>

            <Button onClick={handleFormSubmit}>Submit</Button>
        </InputGroup>
    )
}

export default Form