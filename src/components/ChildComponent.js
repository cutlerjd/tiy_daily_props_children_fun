import React, {Component} from 'react'

class ChildComponent extends Component {
    constructor(props){
      super(props)
    }
    render() {
      return (
        <div>Dumb Component receiving Props
          <div>
            <input type="submit" onClick={this.props.onClick}/>
          </div>
        </div>
      );
    }
  }
export default ChildComponent  