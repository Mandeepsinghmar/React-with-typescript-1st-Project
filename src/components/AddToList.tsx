import React, { useState } from 'react'
import {IState as Props} from '../App'

interface IProps {
    people: Props['people']
    setPeople: React.Dispatch<React.SetStateAction<Props['people']>>
}

const AddToList: React.FC<IProps> = ({people,setPeople}) => {
    const [input,setInput] =useState({
        name:'',
        age:'',
        note:'',
        photo:""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })


    }

    const handleClick = ():void =>{
       if(!input.name || !input.age || !input.photo){
       return
}
setPeople([
    ...people,
    {
        name: input.name,
        age: parseInt(input.age),
        note: input.note,
        photo: input.photo
    }
])
   setInput({
    name:'',
    age:'',
    note:'',
    photo:""
})

    }

    return (
        <div style={{width:'500px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop:'20px',gap:'10px'}}>
         <input name='name' value={input.name} onChange={handleChange} type="text" placeholder='name' style={{padding:'4px 12px'}} />
        <input name='age' value={input.age} onChange={handleChange} type="number" placeholder='age' style={{padding:'4px 12px'}}/>
        <input name='photo' value={input.photo} onChange={handleChange} type="text" placeholder='note'style={{padding:'4px 12px'}} />

        <textarea name='note' value={input.note} onChange={handleChange} placeholder='photo' style={{padding:'4px 12px'}}/>
        <button onClick={handleClick} style={{padding:'4px 12px'}}>Add to List</button>
        </div>
    )
}

export default AddToList
