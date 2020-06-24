// All Actions
import React, { useReducer } from 'react';
import axios from 'axios';
import TedTalkContext from './tedTalkContext';
import TedTalkReducer from './tedTalkReducer';

import {
    SEARCH_TALK,
    SET_LOADING,
    GET_TEDTALK_CARD_DETAIL,
    CLEAR_RESULTS,
    GET_THUMBNAIL

} from '../types'

const TedTalkState = props => {
    const initialState = {
        totalTalks: [],
        tedTalkDetails: {},
        thumbnailsById: {},
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
    const getThumbnail = async (vidId) => {
        try {
            const { data } = await axios.get('https://youtube-video-info1.p.rapidapi.com/youtube-info/', {
                headers: { crossdomain: true, 'x-rapidapi-host': 'youtube-video-info1.p.rapidapi.com', 'x-rapidapi-key': process.env.REACT_APP_TEDTALK_API_KEY },
                params: { url: `https://www.youtube.com/watch?v=${vidId}` },
            });

            dispatch({
                type: GET_THUMBNAIL,
                payload: { [`${vidId}`]: data.info.thumbnail }
            })



        } catch (e) {
            //   const staticData = await axios.get('staticdata.json');
            //   setStaticState(staticData.data);
            //   setLoading(false)
            return []
        }
    }

    // set loading 
    const setLoading = () => dispatch({ type: SET_LOADING })

    // clear results
    const clearResults = () => dispatch({ type: CLEAR_RESULTS })

    // get ted talk card details 
    const getTedTalkCardDetails = async (vidId) => {
        setLoading()
        try {
            const { data } = await axios.get('https://youtube-video-info1.p.rapidapi.com/youtube-info/', {
                headers: { crossdomain: true, 'x-rapidapi-host': 'youtube-video-info1.p.rapidapi.com', 'x-rapidapi-key': process.env.REACT_APP_TEDTALK_API_KEY },
                params: { url: `https://www.youtube.com/watch?v=${vidId}` },
            });

            //setTedTalkDetails(data.info);
            dispatch({
                type: GET_TEDTALK_CARD_DETAIL,
                payload: data.info
            })

        } catch (e) {
            //   const staticData = await axios.get('/tedtalks/staticdata.json');
            //   setStaticState(staticData.data);
            //   setLoading(false)
            return []
        }
    }

    // Wrap app with provider to allow, take in value props to make it public 

    return <TedTalkContext.Provider
        value={{
            totalTalks: state.totalTalks,
            tedTalkDetails: state.tedTalkDetails,
            thumbnailsById: state.thumbnailsById,
            loading: state.loading,
            alert: state.alert,
            searchTalk,
            clearResults,
            getTedTalkCardDetails,
            getThumbnail

        }}
    >
        {props.children}
    </TedTalkContext.Provider>

}

export default TedTalkState;