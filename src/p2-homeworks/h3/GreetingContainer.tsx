import React, {ChangeEvent, ChangeEventHandler, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users:UserType[]
    addUserCallback: (name:string)=>void
}


const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>("") // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
       const trimValue = e.currentTarget.value.trim()
        if (trimValue){
            setName(trimValue)
            setError("")
        }
else{
    setName('')
            setError('where name?')
        }
    }


    const addUser = () => {
      addUserCallback(name)
alert(`Hello ${name} !`)
    }


    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
