import { Component } from "react"

class Lifecycle extends Component {
    constructor() {
        super()
        this.state={
            count :0
        }
    }
    incre =()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    componentDidMount() {
        console.log("componentDidmount (it got born)")
    }
    componentDidUpdate() {
        console.log("component got updated")
    }
    render() {
    return(
        <div>
            {this.state.count}
            <button onClick={this.incre}>Increment</button>
       </div>
    )
    }
}

export default Lifecycle