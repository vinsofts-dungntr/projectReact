
export const toogleButton=(state=false, action)=>{
    if(action.type === 'TOOGLE_BUTTON') return !state;
    return state;
}