import React, { Component } from 'react';

import Aux from '../../../hoc/AAux'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
    // This could be functional, we only changed it to a class for the componentWillUpdate log.
    componentWillUpdate() {
        console.log('>> OrderSummary Will Update <<');
    }

    render () {
        let ingredientSummary;
        try {
            ingredientSummary = Object.keys(this.props.ingredients)
                .map(igKey => {
                    return (
                        <li key = {igKey}>
                            <span style={{textTransform:'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                        </li>
                    );
                });
        } catch (e) {
            console.log('Error in OrderSummary > ingredientSummary')
            console.log(e)
        }

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
                <Button buttonType='Danger' clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button buttonType='Success' clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );
    }
}

export default OrderSummary;
