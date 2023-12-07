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
                <input type='email' placeholder="your email" value={email} onChange={(e) => setEmail(e.target.value)} style={{display:'inline-block' ,width:'8.6rem', border:'0px solid #ccc' , paddingLeft:'5px' , marginBottom:'-5px'}} /><br />
                <button className='text-sm bg-sky-600 text-white border-0 py-1 px-[0.75rem]' type='submit' name='email' disabled={!email} style={{cursor:"pointer"}}>Send your request</button>
                
            </form>
        </>
    )
}