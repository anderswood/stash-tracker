import React, { Component } from 'react'

import MapTile from './MapTile'

class NewStash extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      lastVisited: '',
      agency: '',
      description: ''
    }
  }

  handleSave() {
    let {
      handleStashAdd,
      handleClearOverlays,
      handleClearMap,
      overlayList,
    } = this.props;
    handleStashAdd(overlayList, this.state.name, this.state.lastVisited, this.state.agency, this.state.description);
    handleClearOverlays();
    handleClearMap()
    this.clearState();
  }

  handleReset() {
    let {handleClearMap, handleDeactivateStash } = this.props;
    handleClearMap()
    handleDeactivateStash()
    this.clearState();
  }

  clearState() {
    this.setState({
      name: '',
      lastVisited: '',
      agency: '',
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
          <h3 className='input-label agency'>
            <label htmlFor='agency'>Agency: </label>
            <input  className='agency'
                    id='agency'
                    placeholder='Land Management Agency'
                    value={ this.state.agency }
                    onChange={ e => this.setState({ agency: e.target.value }) }/>
          </h3>
          <h3 className='input-label description'>
            <label htmlFor='description'>Description: </label>
            <textarea className='description'
                      id='description'
                      placeholder='Description: provide relevant details about this area, including the times of the year that you typically access it'
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
