import React from 'react';
import { connect } from 'react-redux'
import { buyCake, buyIceCream, buyPastry } from '../redux';

const ItemContainer = (props) => {
    return (
        <div>
            <h2>Items- {props.item} </h2>
            <button onClick={props.buyItem}>Buy Item</button>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    let itemState;
    if (ownProps.cake) {
        itemState = state.cake.numOfCakes
    } else if (ownProps.iceCream) {
        itemState = state.iceCream.numOfIceCreams
    } else {
        itemState = state.pastry.numOfPastry
    }

    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    let dispatchFunction;
    if (ownProps.cake) {
        dispatchFunction = () => dispatch(buyCake())
    } else if (ownProps.iceCream) {
        dispatchFunction = () => dispatch(buyIceCream())
    } else {
        dispatchFunction = () => dispatch(buyPastry())
    }

    return {
        buyItem: dispatchFunction
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);