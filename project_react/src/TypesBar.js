import ky from "ky";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

function TypesBar({selectedTypes, setSelectedTypes}){
    const [types, setTypes] = useState([])

    useEffect(() => {
        ky.get('http://localhost:8080/types/english').json().then((data) => {
          setTypes(data)
          console.log(data)
        })
    }, [])

    function handleTypeSelect(e){
        const type = e.target.id
        const indexOfTypeInSelectedTypes = selectedTypes.indexOf(type)
        let selectedTypesClone = [...selectedTypes]

        if(indexOfTypeInSelectedTypes === -1){
            selectedTypesClone.push(type)
        } else{
            selectedTypesClone = selectedTypesClone.filter((cloneType) => {
                return cloneType !== type
            })
        }
        setSelectedTypes(selectedTypesClone)
    }
    return(
        <Form id="typesForm">
            {types.map((type, id) => (
                <div>
                    <Form.Check
                    key={id}
                    id={type} 
                    label={type}
                    onChange={handleTypeSelect}
                    />
                </div>
            ))}
        </Form>
    )
}

export default TypesBar