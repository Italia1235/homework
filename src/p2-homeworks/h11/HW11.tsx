import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(5)
    const [value2, setValue2] = useState(22)

    const onChangeRange = (newValue:number,newDoubleValue?:number)=>{
        setValue1(newValue)
    }
    const onChangeRange2 = (value:[number,number])=> {
    }


    return (
        <div>
            <hr/>
            homeworks 11


            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange value={value1}  onChangeRange={onChangeRange}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange value={[value1,value2]}  onChangeRange2={onChangeRange2}
                />
                <span>{value2}</span>
            </div>


        </div>
    )
}

export default HW11
