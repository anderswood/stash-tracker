import React, { Component } from 'react'

class NewStash extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  handleSave() {
    console.log('save button click');
    
  }

  render() {
    return(
      <section>
        <div onClick={() => this.handleSave() }>
          <h3>Save</h3>
        </div>
        <h2>New Track</h2>
        <div>
          <input  className='input input-name'
                  placeholder='Track/Zone Name'
                  value={ this.state.name }
                  onChange={ e => this.setState({ name: e.target.value }) }/>
        </div>
      </section>
    )
  }

}

export default NewStash;
