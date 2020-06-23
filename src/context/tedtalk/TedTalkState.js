// All Actions
import React, { useReducer } from 'react';
import axios from 'axios';
import TedTalkContext from './tedTalkContext';
import TedTalkReducer from './tedTalkReducer';

import {
    SEARCH_TALK,
    SET_ALERT_STATE,
    SET_LOADING,
    GET_TEDTALK_CARD_DETAIL,
    CLEAR_RESULTS,
    GET_THUMBNAIL

} from '../types'

const TedTalkState = props => {
    const initialState = {
        totalTalks: [],
        tedTalkDetails: {},
        thumbailsById: {},
        loading: false,
        alert: null
    }

    // to disptch to reducer, after we call an action
    // make a request to api, dispatch a type to reducer

    const [state, dispatch] = useReducer(TedTalkReducer, initialState);

    // search tedtalk

    const searchTalk = async (query) => {
        // dispatches setLoading to reducer 
        setLoading()
        try {
            const { data } = await axios.get('https://bestapi-ted-v1.p.rapidapi.com/talksByDescription', {
                headers: { crossdomain: true, 'x-rapidapi-host': 'bestapi-ted-v1.p.rapidapi.com', 'x-rapidapi-key': process.env.REACT_APP_TEDTALK_API_KEY },
                params: { size: '8', description: query },
            });
            //setTotalTalks(data);
            // setLoading(false); dont need this 
            console.log("im dispatching to payload..", data)
            dispatch({
                type: SEARCH_TALK,
                payload: data
            })

            // return data;

        } catch (e) {
            // const staticData = await axios.get('staticdata.json');
            // setStaticState(staticData.data);
            // setLoading(false)

            return []
        }
    }

    // get thumbnails

    // clear results
    const clearResults = () => dispatch({ type: CLEAR_RESULTS })

    // get ted talk card details 

    // set loading 
    const setLoading = () => dispatch({ type: SET_LOADING })

    // Wrap app with provider to allow, take in value props to make it public 

    return <TedTalkContext.Provider
        value={{
            totalTalks: state.totalTalks,
            tedTalkDetails: state.tedTalkDetails,
            thumbailsById: state.thumbailsById,
            loading: state.loading,
            alert: state.alert,
            searchTalk,
            clearResults,

        }}
    >
        {props.children}
    </TedTalkContext.Provider>

}

export default TedTalkState;