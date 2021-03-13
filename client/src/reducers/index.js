import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import oauthReducer from './oauthReducer';
import  streamReducer from '../reducers/streamReducer';

export default combineReducers({
    streams: streamReducer,
    auth: oauthReducer,
    form: formReducer
})