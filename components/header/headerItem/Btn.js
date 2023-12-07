'use client'

import Nav from './Navbar'
import { useState } from 'react'
import {IoIosArrowDown} from 'react-icons/io'
import {IoIosArrowUp} from 'react-icons/io'

function Btn(){
    const [btnNav , setBtnNav] = useState(false)

    const clickHandler = () =>{
        setBtnNav(prove => !prove)
    }


    return(
        <div>
            <i onClick={clickHandler}>
                {btnNav==false?<IoIosArrowDown />:<IoIosArrowUp style={{color:'orange'}} />}
            </i>
            {btnNav && <Nav />}
        </div>
    )
}

export default Btn;