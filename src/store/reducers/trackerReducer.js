const initialState = {
    list: [] 
}

export const trackerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TRACKER":
            const { id, title, isPaused, total, started } = action.payload;
            return { 
                ...state,
                list:[
                    ...state.list,
                    {
                        id,
                        title,
                        isPaused,
                        total,
                        started
                    }
                ]
            }
        case "FETCH_TRACKER":
            return { 
                ...state,
                list: [
                    ...state.list,
                    ...action.payload
                    
                ]
              
            }
        case "MODIFY_TRACKER":
            return {
                ...state,
                list: state.list.map(item => 
                    item.id === action.payload.id ? action.payload : item
                )
            }
        case "DELETE_TRACKER":
            const newList = state.list.filter((elem) => elem.id !== action.id)
            return { ...state, list: newList }
        default:
            return state
    }
}
