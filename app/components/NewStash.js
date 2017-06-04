import React, { Component } from 'react'

import SaveStashContainer from '../containers/SaveStashContainer'
import ResetStashContainer from '../containers/ResetStashContainer'

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

  componentWillReceiveProps(nextProps) {
    if (this.props.status !== nextProps.status && nextProps.status !== '' ) {
      let activeStash = nextProps.stashArr.find((stashObj) => {
        return stashObj.id === nextProps.status
      })
      this.setState({
        name: activeStash.name,
        lastVisited: activeStash.lastVisited,
        agency: activeStash.agency,
        description: activeStash.description
      })
    }
  }

  clearState() {
    this.setState({
      name: '',
      lastVisited: '',
      agency: '',
      description: ''
    })
  }

  updateOnChange (e, title) {
    this.setState({[title]: e.target.value})
  }

  render() {
    return(
      <section id='new-stash-div'>
        <h2>New Stash</h2>
        <form className='new-stash-form'>
          <section className='form-row'>
            <div className='form-left'>
              <label htmlFor='stash-name'><h3>Stash/Zone Name:</h3></label>
            </div>
            <div className='form-right'>
              <input  className='stash-name'
                      id='stash-name'
                      placeholder='Track/Zone Name'
                      value={ this.state.name }
                      onChange={ e => this.updateOnChange(e, 'name') }/>
            </div>
          </section>
          <section className='form-row'>
            <div className='form-left'>
              <label htmlFor='last-visited'><h3>Last Visited:</h3></label>
            </div>
            <div className='form-right'>
              <input  className='last-visited'
                      id='last-visited'
                      placeholder='Last Visted'
                      value={ this.state.lastVisited }
                      onChange={ e => this.updateOnChange(e, 'lastVisited') }/>
            </div>
          </section>
          <section className='form-row'>
            <div className='form-left'>
              <label htmlFor='land-agency'><h3>Agency:</h3></label>
            </div>
            <div className='form-right'>
              <input  className='land-agency'
                      id='land-agency'
                      placeholder='Land Management Agency'
                      value={ this.state.agency }
                      onChange={ e => this.updateOnChange(e, 'agency') }/>
            </div>
          </section>
          <section className='form-description'>
            <div className='form-left'>
              <label htmlFor='stash-description'><h3>Description:</h3></label>
            </div>
            <div className='form-right'>
              <textarea  className='stash-description'
                      id='stash-description'
                      placeholder='Description: provide relevant details about this area, including the times of the year that you typically access it'
                      value={ this.state.description }
                      onChange={ e => this.updateOnChange(e, 'description') }>
              </textarea>
            </div>
          </section>
        </form>
        <div id='reset-save-container'>
          <ResetStashContainer  resetMap={ this.props.handleResetMap }
                                resetState={ this.clearState.bind(this) }/>
          <SaveStashContainer resetMap={ this.props.handleResetMap }
                              newStashInfo={ this.state }
                              resetState={ this.clearState.bind(this) }/>
        </div>
      </section>
    )
  }

}

export default NewStash;
