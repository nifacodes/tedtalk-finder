// Reducer decides what to do with the action
import {
    SEARCH_TALK,
    SET_ALERT_STATE,
    SET_LOADING,
    GET_TEDTALK_CARD_DETAIL,
    CLEAR_RESULTS,
    GET_THUMBNAIL

} from '../types'

export default (state, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case SEARCH_TALK:
            // why twice console.log("search_talk", action.payload)
            return {
                ...state,
                totalTalks: action.payload,
                loading: false
            }
        case CLEAR_RESULTS:
            return {
                totalTalks: []
            }

        default:
            return state;

    }

}