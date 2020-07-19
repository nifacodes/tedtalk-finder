// Reducer decides what to do with the action
import {
    SEARCH_TALK,
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
            return {
                ...state,
                totalTalks: action.payload,
                loading: false
            }
        case CLEAR_RESULTS:
            return {
                totalTalks: [],
                thumbnailsById: {},
                tedTalkDetails: {}
            }
        case GET_THUMBNAIL:

            return {
                ...state,
                thumbnailsById: { ...state.thumbnailsById, ...action.payload }
            }
        case GET_TEDTALK_CARD_DETAIL:
            return {
                ...state,
                tedTalkDetails: action.payload,
                loading: false,
            }


        default:
            return state;

    }

}