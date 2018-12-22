


const defaultState= 
// {
    [
    {'id':'1', 'en': 'Action', 'vn': 'HanhDong', 'memorized': true},
    {'id':'2', 'en': 'Action', 'vn': 'HanhDong', 'memorized': false},
    {'id':'3', 'en': 'Action', 'vn': 'HanhDong', 'memorized': true},
    {'id':'4', 'en': 'Action', 'vn': 'HanhDong', 'memorized': false},
    {'id':'5', 'en': 'Action', 'vn': 'HanhDong', 'memorized': false},
    {'id':'6', 'en': 'Action', 'vn': 'HanhDong', 'memorized': true},
    {'id':'7', 'en': 'Action', 'vn': 'HanhDong', 'memorized': false},
    {'id':'8', 'en': 'Action', 'vn': 'HanhDong', 'memorized': false},
    {'id':'9', 'en': 'Action', 'vn': 'HanhDong', 'memorized': true},
    {'id':'10', 'en': 'Action', 'vn': 'HanhDong', 'memorized': false},
    {'id':'11', 'en': 'Action', 'vn': 'HanhDong', 'memorized': true},
    {'id':'12', 'en': 'Action', 'vn': 'HanhDong', 'memorized': false},
    {'id':'13', 'en': 'Action', 'vn': 'HanhDong', 'memorized': true},
    {'id':'14', 'en': 'Action', 'vn': 'HanhDong', 'memorized': false}
]

export const arrWords=(state=defaultState, action)=>{
    if(action.type==='STATUS_MEMORIZED'){
        return state.map(e=>{
            if(e.id!==action.id){
                return e;
            }
            return {...e, memorized: true}
        })
    }

    if(action.type==='STATUS_REMEMBER'){
        return state.map(e=>{
            if(e.id!==action.id){
                return e;
            }
            return {...e, memorized: false}
        })
    }
    return state;
}
