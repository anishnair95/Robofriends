import React,{Component} from 'react'
import './Hello.css'
class Hello extends Component{
    
    render(){
        return(
            
            <div>
            <h1 className='f1 tc'>Hello {this.props.greetings}</h1>
            <p>Welcome to React</p>
            <p>I'm a beginner</p>
            </div>
        )
            
    }
}

// const Hello =(props)=>{
    
//         return(
            
//             <div>
//             <h1 className='f1 tc'>Hello {props.greetings}</h1>
//             <p>Welcome to React</p>
//             <p>I'm a beginner</p>
//             </div>
//         )
            
    
// }

export default Hello