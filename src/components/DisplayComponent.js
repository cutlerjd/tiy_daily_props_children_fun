import React, {Component} from 'react'

class DisplayComponent extends Component {
    constructor(props){
      super(props)
    }
    render() {
      return (
        <div>{this.props.sayWhat}</div>
      );
    }
  }
  
export default DisplayComponent