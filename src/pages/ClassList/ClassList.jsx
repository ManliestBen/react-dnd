import React, { Component } from 'react'
import { getClassList } from '../../services/api-calls'

class ClassList extends Component {
  state = { 
    results: []
  }

  async componentDidMount() {
    const classData = await getClassList()
    this.setState({results: classData.results})
  }

  render() { 
    return ( 
      <div>
        <h3>Class List</h3>
        <div className="icon-container">
          {this.state.results.map((classTitle) => (
            <div id="classDiv" key={classTitle.index}>
              {/* Update the src to use the .name property for our photos */}
              <img 
								style={{ width: "100px", height: "100px" }} 
								src={`/images/${classTitle.name}.svg`} 
								alt="class-logo"
							/>
              {/* Update the text rendered, based on the name of the class */}
              {classTitle.name}
            </div>
          ))}
        </div>
      </div>
     );
  }
}
export default ClassList;