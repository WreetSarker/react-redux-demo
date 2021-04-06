import { BUY_PASTRY } from './pastryType'

const initialState = {
    numOfPastry: 15
}

const pastryReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_PASTRY: return {
            ...state,
            numOfPastry: state.numOfPastry - 1
        }
        default: return state
    }
}

export default pastryReducer;