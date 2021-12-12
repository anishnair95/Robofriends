import React from 'react';
const Scroll=(props)=>{

    // const ScrollStyle={
    //     overflowY:'scroll',
    //     border:'1px solid black',
    //     height:'500px'
    // }
    return(
        <div style={{overflowY:'scroll',border:'5px solid black',height:'550px',scrollBehavior:'smooth'}}>
            {props.children}
        </div>

    )
}
export default Scroll;