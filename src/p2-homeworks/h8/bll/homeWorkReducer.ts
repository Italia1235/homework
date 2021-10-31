import {UserType} from "../HW8";

type SortPeopleType = {
    type:'SORT-PEOPLE',
    payload:"up"|"down"
}
type CheckPeopleType ={
    type:"CHECK"
payload: 18
}

type ActionType =SortPeopleType|CheckPeopleType


export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[]  => {
    switch (action.type) {
        case 'SORT-PEOPLE': {
        let shadowState = [...state].sort((a,b)=>{
            if(a.name>b.name) return 1
            else if (a.name<b.name) return -1
            else return 0
        })
            return action.payload === "up"? shadowState : shadowState.reverse()
        }
        case 'CHECK': {
        let shadowState = [...state].filter(el=>el.age>=action.payload)

            return shadowState
        }
        default:
            return state
    }
}
