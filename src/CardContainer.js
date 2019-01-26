import React, { Component } from 'react'
import Card from './Card'

var kittenMode = false; // Determines whether kitten mode is on or not

/**
 * CardContainer class
 *
 * Holds all of the cards and provides the required logic to interact between all of them
 */
class CardContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            cards: [
                {
                    id: 0,
                    active: false
                },
                {
                    id: 1,
                    active: false
                },
                {
                    id: 2,
                    active: false
                },
                {
                    id: 3,
                    active: false
                },
                {
                    id: 4,
                    active: false
                },
                {
                    id: 5,
                    active: false
                },
            ]
        }
        this.addCard = this.addCard.bind(this)
        this.removeCard = this.removeCard.bind(this)
        this.nextId = this.nextId.bind(this)
        this.cardRender = this.cardRender.bind(this)
        this.clickHandler = this.clickHandler.bind(this)
        this.toggleKittens = this.toggleKittens.bind(this)
    }

    /**
     * Adds a card to the deck
     */
    addCard() {
        this.setState(prevState => ({
            cards: [
                ...prevState.cards,
                {
                    id: this.nextId(),
                    active: false
                }
            ]
        }))
    }
    
    /**
     * Removes a card from the end of the deck
     */
    removeCard() {
        var indexToRem = this.state.cards.length - 1
        this.setState(prevState => ({
            cards: prevState.cards.filter(card => card.id !== indexToRem)
        }))
    }
    
    /**
     * Finds the next available id for a new card
     */
    nextId() {
        return this.state.cards.length
    }
    
    /**
     * Handles card clicks and deactivates all other cards
     */
    clickHandler(i, curActive) {
        this.setState(prevState => ({
            cards: prevState.cards.map(
                card => (card.id === i) ? {...card, active: curActive} : {...card, active: false}
            )
        }))
    }

    /**
     * Renders the card at position i
     */
    cardRender(card, i) {
        return (
            <Card key={i} index={i} active={card.active} kittenMode={kittenMode} onChange={this.clickHandler}></Card>
        )
    }

    /**
     * Toggles kitten mode and updates the cards
     */
    toggleKittens() {
        kittenMode = !kittenMode
        this.setState(prevState => ({
            cards: prevState.cards.map(
                card => ({...card, kittenMode: kittenMode})
        )}))
    }
    
    /**
     * Renders all of the cards
     */
    render() {
        return (
            <div id="card_container">
                {this.state.cards.map(this.cardRender)}
                <div id="button_area">
                    <button onClick={this.toggleKittens} title="Toggles kittens on the inactive cards">Toggle Kittens</button>
                    <button onClick={this.addCard} title="Adds another card to the deck">Add Card</button>
                    <button onClick={this.removeCard} title="Removes a card from the deck">Remove Card</button>
                </div>
            </div>
        )
    }
}

export default CardContainer