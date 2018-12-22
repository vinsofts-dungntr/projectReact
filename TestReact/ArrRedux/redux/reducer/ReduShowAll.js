
export const filterShow=(state='SHOW_ALL', action)=>{
    if(action.type==='STATUS_SHOW_ALL') return 'SHOW_ALL';
    if(action.type==='STATUS_FORGOT') return 'FORGOT';
    return state
}