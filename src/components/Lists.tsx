import React from 'react'
import {IState as IProps} from '../App'

const Lists: React.FC<IProps> = ({people}) => {
const renderLists = (): JSX.Element[]=>{
    return people.map((person)=>{
      return  <li style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'10px',border:'2px solid blue',width:'500px',margin:'auto',padding:'6px 12px'}}>
             <img src={person.photo} style={{width:'40px',height:'40px',borderRadius:'50%'}}></img>
            <p style={{fontSize:'1.2rem',}}> {person.name}</p>
            <p>{person.age} years old</p>
           
            <p>{person.note}</p>
        </li>
})
}

    return (
        <ul style={{marginTop:'20px'}}>
            {renderLists()}
        </ul>
    )
}

export default Lists
