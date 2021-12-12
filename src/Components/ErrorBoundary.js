import React,{Component} from 'react'

class ErrorBoundry extends Component{
    constructor(props){
        //the props mentioned is to acces this.props
        super();
        this.state={
            hasError:false
        }
    }
    //lifecycle hook to catch error
    componentDidCatch(error,info){
        this.setState({hasError:true})
    }

    render(){
        if(this.hasError){
            return <h1>Oops this is not good</h1>
        }
        return this.props.children;
    }
}
export default ErrorBoundry