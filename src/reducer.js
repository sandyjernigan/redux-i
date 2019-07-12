import { MAKE_DEPOSIT } from './actions'

const initialState = {
	checking: 75, 
	savings: 50,
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case MAKE_DEPOSIT: 
            const newAmount = parseInt(action.payload.amount) + state[action.payload.account]

            return {
                ...state,
                [action.payload.account]: newAmount
            }
        default:
            return state
    }
}