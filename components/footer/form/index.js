'use client'
import { useState } from 'react'

export default function Form (){
    const [email , setEmail] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail("")
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type='email' placeholder="your email" value={email} onChange={(e) => setEmail(e.target.value)} style={{display:'inline-block' , border:'0px solid #ccc' , backgroundColor:'#eeebeb' , width:'100%' , marginBottom:'-5px'}} /><br />
                <button className='text-sm bg-orange-500 text-white border-0 py-1 px-[1.75rem]' type='submit' name='email' disabled={!email} style={{cursor:"pointer"}}>Subscribe to feeling of a look</button>
                
            </form>
        </>
    )
}