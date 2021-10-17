import React from 'react'
import {AffairType} from "./HW2";

type AffairPropsType = {
    id:number
    affair: AffairType
    deleteAffairCallback: (_id:number)=>void
    title:string
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.id)}

    return (
        <div>
            {props.title}

            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
