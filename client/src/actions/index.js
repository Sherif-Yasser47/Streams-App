import apiReq from '../apis/streams'
import history from '../history';

export const signIn = (userId) => {
    return {
        type: 'SIGN_IN',
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}

//Creating a single stream action creator.
export const createStream = (formValues) => async (dispatch, getState) => {
    const { userId } = getState().auth
    const response = await apiReq.post('/streams', {...formValues, userId})
    dispatch({ type: 'CREATE_STREAM', payload: response.data })
    history.push('/')
};

//Fetching a single stream action creator.
export const fetchStream = (id) => async (dispatch) => {
    const response = await apiReq.get(`/streams/${id}`)
    dispatch({ type: 'FETCH_STREAM', payload: response.data })
};

//Fetching a list of streams action creator.
export const fetchStreams = () => async (dispatch) => {
    const response = await apiReq.get('/streams')
    dispatch({ type: 'FETCH_STREAMS', payload: response.data })
};

//Updating a streams action creator.
export const editStream = (id, formValues) => async (dispatch) => {
    const response = await apiReq.patch(`/streams/${id}`, formValues)
    dispatch({ type: 'EDIT_STREAM', payload: response.data })
    history.push('/');
};

//Deleting a stream action creator.
export const deleteStream = (id) => async (dispatch) => {
    await apiReq.delete(`/streams/${id}`)
    dispatch({ type: 'DELETE_STREAM', payload: id })
    history.push('/')
};