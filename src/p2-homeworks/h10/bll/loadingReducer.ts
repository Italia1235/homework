const initState = {
isLoading:false
}
type initStateType = {
    isLoading:boolean
}
type ActionType = {
    type:"LOADING"
    isLoading:boolean
}
export const loadingReducer = (state= initState, action: ActionType): initStateType => {
    switch (action.type) {
        case 'LOADING': {
            return {...state,isLoading:action.isLoading}
        }
        default: return state
    }
}

export const loadingAC = (isLoading:boolean): ActionType => {
    return {type:"LOADING",isLoading}
}