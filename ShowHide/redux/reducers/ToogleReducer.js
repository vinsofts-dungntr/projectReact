
export const toogle=(state = false, action)=>{
    if(action.type === 'TOOGLE'){
        return !state;
    }
    return state;
}