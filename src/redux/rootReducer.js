import { combineReducers } from 'redux';
import cakeReducer from './cake/cakeReducer';
import iceCreamReducer from './iceCream/iceeCreamReducer';
import pastryReducer from './pastry/pastryReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    pastry: pastryReducer
}
)
export default rootReducer;