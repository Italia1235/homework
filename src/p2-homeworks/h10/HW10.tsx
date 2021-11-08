import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";

function HW10() {
    const dispatch = useDispatch()
    const isLoading = useSelector<AppStoreType, boolean>(state=>state.loading.isLoading)

    // useSelector, useDispatch


    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout( ()=>{
    dispatch(loadingAC(false))},3000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {isLoading ? (<img src='https://i.gifer.com/origin/01/017905764ef7551292353101da65eb66_w200.gif'></img>) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

        </div>
    )
}

export default HW10
