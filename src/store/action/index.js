export const fetchTracker = (data) => {
    return {
        type: "FETCH_TRACKER",
        payload: data
        
    }
}

export const addTracker = (data) => {
    return {
        type: "ADD_TRACKER",
        payload: data
        
    }
}

export const deleteTracker = (id) => {
    return {
        type: "DELETE_TRACKER",
        id
    }
}

export const modifyTracker = (data) => {
    return {
        type: "MODIFY_TRACKER",
        payload: data
    }
}