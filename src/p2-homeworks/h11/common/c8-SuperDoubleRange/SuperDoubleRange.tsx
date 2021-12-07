import React, {ChangeEvent} from 'react'
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
type SuperDoubleRangePropsType = {

    onChangeRange2?: (value: [number, number]) => void
    value: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange2, value,

    }
) => {
    {
        const onChangeCallback = (value: number[]) => {
            onChangeRange2 && onChangeRange2(currentTarget.value)
        }

    return (


            <>
                <Range min={value[0]} max={value[1]} onChange={onChangeCallback} />


            </>


    )
}

export default SuperDoubleRange
