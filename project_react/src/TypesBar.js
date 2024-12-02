import ky from "ky";
import { useEffect, useState } from "react";

function TypesBar(){
    const [types, setTypes] = useState(null)

    useEffect(() => {
        ky.get('http://localhost:8080/types/english').json().then((data) => {
          setTypes(data)
          console.log(data)
        })
    }, [])
    return(
        <>
        </>
    )
}

export default TypesBar