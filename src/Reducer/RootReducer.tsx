const initState = {
    welcome:true,
    input:'',
    result:[],
    getData: false,
    loading:false,
    noResult:false,
    err:false
}
const RootReducer = (state = initState, action:any) => {

    switch (action.type) {
        case 'WELCOME':
            return { ...state, welcome:action.welcome }    
        case 'GET_DATA':
            return { ...state, getData:action.getData }    
        case 'INPUT':
            return { ...state, input:action.input }    
        case 'RESULT':
            return { ...state, result:action.result }    
        case 'LOADING':
            return { ...state, loading:action.loading }    
        case 'NO_RESULT':
            return { ...state, noResult:action.noResult }     
        case 'ERR':
            return { ...state, err:action.err }    
        default:
            return state;
    }
}

export default RootReducer;