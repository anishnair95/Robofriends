import React from 'react'
import Card from './Card'
const CardList=({robots})=>{

    
    const cardComponent=robots.map(user =>{
        return (
            <Card key={user.id} id={user.id} name={user.name} email={user.email}/>
            )
    })
    
   if(cardComponent.length===0){
     return(
        <div className='pa2'>
            <h1 className='light-yellow f3'>No Data Exist</h1>
        </div> 
        
     )
   }

   return(
    <div className='pa2'>
       {cardComponent}
    </div>  
   )
    
}

export default CardList;