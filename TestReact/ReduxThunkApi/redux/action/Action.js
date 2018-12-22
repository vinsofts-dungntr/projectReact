import {getRespone} from '../../server/Server';


export const FETCH_API='FECTCH_API';
export const FETCH_SUCCESS='FETCH_SUCCESS';
export const FETCH_ERROR='FETCH_ERROR';


export const fetchingData=()=>{
    return{type: FETCH_API}
}

export const fetchDataSuccess=(json)=>{
    return{ type: FETCH_SUCCESS,
            paload: json
        }
}

export const fetchDataError=(errorMessage)=>{
    return{
        type: FETCH_ERROR,
        paload: errorMessage
    }
}


export const fetchContacts = ()=>{
    return dispatch => {
        dispatch(fetchingData());
        getRespone().then((contact) =>{
            dispatch(fetchDataSuccess(contact));
        }). catch((error)=>{
            dispatch(fetchDataError(error))
        })
    }
    
}

