import React, {useReducer} from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import * as TYPES from '../types';

// contains actions

const GithubState = props => {
    const initialState = {
        user : {},
        users : [],
        loading : false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    // Search users
    const searchUser = async text =>{
        setLoading();
        
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}
                                      &client_secret=${process.env.REACT_APP_CLIENT_SECRET}`);

        dispatch({
            type: TYPES.SEARCH_USER,
            payload : res.data.items
        })
    }

    // Get user
    const getUser = async (username) => {
        setLoading();
        
        const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}
                                    &client_secret=${process.env.REACT_APP_CLIENT_SECRET}`);

        dispatch({
            type : TYPES.GET_USER,
            payload : res.data
        })
    }

    // Clear Users
    const clearUsers = () => {
        dispatch({
            type : TYPES.CLEAR_USERS
        })
    } 

    // set loading
    const setLoading = () => dispatch({type: TYPES.SET_LOADING});

    return <GithubContext.Provider
        value = {{
            // anything we want to be available for entire app
            users : state.users,
            user : state.user,
            loading : state.loading,
            searchUser,
            getUser,
            clearUsers
        }}
    >
        {props.children}
    </GithubContext.Provider>
}

export default GithubState;