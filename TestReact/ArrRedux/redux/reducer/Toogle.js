
export const toogleAdd=(state=false, action)=>{
    if(action.type==='TOOGLE_ADD') return !state;
    return state;
}