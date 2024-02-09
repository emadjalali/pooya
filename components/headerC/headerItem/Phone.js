'use client'
import {IoIosCall} from 'react-icons/io'
import { useState } from 'react'

function Phone(){
    const [phone , setPhone] = useState(false)

    const clickHandler = () =>{
        setPhone(prove => !prove)
        
    }


    return(
        <div className='flex'>
            <i onClick={clickHandler}>
                {phone==false?<IoIosCall style={{color: "white"}} />:<IoIosCall style={{color: "orange"}} />}
            </i>
            {phone && <p style={{color: "orange" , position:'absolute' , left:'5%' , top:'30px'}}>021 - 22 790 797</p>}
        </div>
    )
}

export default Phone;