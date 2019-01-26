import React, { Component } from 'react'

/**
 * Card class
 *
 * Provides the required logic to display and interact with the cards
 */
class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            kittenURL: `http://placekitten.com/${250 + props.index}/${350 + props.index}`
        }
        this.setActive = this.setActive.bind(this)
        this.setInactive = this.setInactive.bind(this)
        this.renderActive = this.renderActive.bind(this)
        this.renderInactive = this.renderInactive.bind(this)
    }
    
    /**
     * Reports back to the CardContainer that this card is now active
     */
    setActive() {
        this.props.onChange(this.props.index, true)
    }

    /**
     * Reports back to the CardContainer that this card is now inactive
     */
    setInactive() {
        this.props.onChange(this.props.index, false)
    }
    
    /**
     * Renders the current active card
     */
    renderActive() {
        return (
            <div className="card active" onClick={this.setInactive}>{this.props.index + 1}</div>
        )
    }
    
    /**
     * Renders the current inactive card
     */
    renderInactive() {
        return (this.props.kittenMode ? <div className="card inactive" style={{backgroundImage: `url(${this.state.kittenURL})`}} onClick={this.setActive}></div> :
            <div className="card inactive" onClick={this.setActive}></div>
        )
    }
    
    /**
     * Detects whether the current card is active or not and selects the appropriate render method
     */
    render() {
        return this.props.active ? this.renderActive() : this.renderInactive()
    }
}

export default Card