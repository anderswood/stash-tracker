import React, { Component } from 'react'

import MapTile from './MapTile'

class NewStash extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      lastVisited: '',
      description: ''
    }
  }

  handleSave() {
    let { handleStashAdd, handleClearOverlays, overlayList } = this.props;
    handleStashAdd(overlayList, this.state.name, this.state.lastVisited, this.state.description);
    handleClearOverlays();
    this.clearState();
  }

  handleReset() {
    this.clearState();
  }

  clearState() {
    this.props.handleClearMap()
    this.setState({
      name: '',
      lastVisited: '',
      description: ''
    })
  }

  render() {
    return(
      <section id='new-stash-div'>
        <h2>New Stash</h2>
        <form className='new-stash-form'>
          <h3 className='input-label stash-name'>
            <label htmlFor='stash-name'>Stash/Zone Name: </label>
            <input  className='stash-name'
                    id='stash-name'
                    placeholder='Track/Zone Name'
                    value={ this.state.name }
                    onChange={ e => this.setState({ name: e.target.value }) }/>
          </h3>
          <h3 className='input-label last-visited'>
            <label htmlFor='last-visited'>Last Visited: </label>
            <input  className='last-visited'
                    id='last-visited'
                    placeholder='Last Visited'
                    value={ this.state.lastVisited }
                    onChange={ e => this.setState({ lastVisited: e.target.value }) }/>
          </h3>
          <h3 className='input-label description'>
            <label htmlFor='description'>Description: </label>
            <textarea className='description'
                      id='description'
                      placeholder='Description'
                      value={ this.state.description }
                      onChange={ e => this.setState({ description: e.target.value }) }>
            </textarea>
          </h3>
        </form>
        <div id='reset-save-container'>
          <div  id='reset-div'
            onClick={() => this.handleReset()}>
            <h3>Reset</h3>
          </div>
          <div  id='save-div'
            onClick={() => this.handleSave() }>
            <h3>Save</h3>
          </div>
        </div>
      </section>
    )
  }

}

export default NewStash;
