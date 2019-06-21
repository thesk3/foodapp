const postReducer = (state = [], action) => {
    console.log("actin",action);
    switch (action.type) {
    case 'ADD_LOCATION':
    return state.concat([action.data])
    
    case 'ADD_HOTEL':
        return state.concat([action.data])
    default:
    return state;
    }
    }
    export default postReducer;