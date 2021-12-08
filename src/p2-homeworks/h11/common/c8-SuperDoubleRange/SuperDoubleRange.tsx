import React, {ChangeEvent} from 'react'
import Slider, {Range} from 'rc-slider';
import 'rc-slider/assets/index.css';

type SuperDoubleRangePropsType = {

    onChangeRange2?: (value: number[]) => void
    value: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = ({onChangeRange2, value}) => {

    const onChangeCallback = (value: number[]) => {
        if (onChangeRange2) {
            onChangeRange2([...value])
        }
    }

    return (
        <>
            <Range value={value} min={0} max={100} onChange={onChangeCallback}/>

        </>


    )
}

export default SuperDoubleRange
