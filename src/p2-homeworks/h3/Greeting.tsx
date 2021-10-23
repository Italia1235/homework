import React, {ChangeEvent,KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e:ChangeEvent<HTMLInputElement>)=>void

    addUser: ()=>void
    onEnter:(e:KeyboardEvent<HTMLInputElement>)=>void
    error: string // need to fix any
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback,onEnter, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error? s.error : s.someClass

    return (
        <div>
            <input onKeyPress={onEnter} value={name} onChange={setNameCallback}

                   className={inputClass}/>
            <span>{error}</span>
            <button  onClick={addUser} disabled ={!name}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
