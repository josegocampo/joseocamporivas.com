import React, { useState} from 'react'
import styled from "styled-components";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import '../App.css';



const Team = () => {

    const permission = ["admin", "reg user", "observer", "remove"]
    const defaultOption = permission[0];

    const team = [
        {
            name: "James Ruben",
            email: "jamesruben@hellosaurus.com",
            status: "active", 
            permission: undefined
        },
        {
            name: "Jose Ocampo",
            email: "joseocampo@hellosaurus.com",
            status: "active", 
            permission: undefined
        },
        {
            name: "Jared Bleble",
            email: "jamesruben@hellosaurus.com",
            status: "active", 
            permission: undefined
        },
        {
            name: "Camila Mena",
            email: "jamesruben@hellosaurus.com",
            status: "active", 
            permission: undefined
        }
    ]

    const [state, setState] = useState(team)

    const handleChange = (e, index,permission) =>{
        console.log(permission)
        const copyState = [...state]
        copyState[index].permission = e.value
        setState(copyState)
    }

    console.log(state)

    return (
    <div>

            {state.map((person, index) => <Row>
                <NameMail><Name>{person.name}</Name><Mail>{person.email}</Mail></NameMail>
                <Status>{person.status}</Status>
            <Dropdown options={permission}  onChange={(e)=>handleChange(e, index, defaultOption)} value={defaultOption} placerholder="Select an option"  className="remo"/>
          
            </Row>)}
    </div>
    )
}

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const NameMail = styled.div`
    display: flex;
    flex-direction: column;
`

const Name = styled.div`

`

const Mail = styled.div`

`

const Status = styled.div`

`

const Select = styled.select`

`


export default Team