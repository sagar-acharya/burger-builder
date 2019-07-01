import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
    state = {
        ingredients : {
            cheese:2,
            salad:1,
            bacon:4,
            meat:2
        }
    };
    render() {
        return (
            <Aux>
                <Burger ingredients={ this.state.ingredients } />
                <div>Burger Builder Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;