export const  ADD_RECORD = (data) => {
    return {
        type : 'ADD_RECORD',
        payload : data
    }
}

export const DELETE_RECORD = (id) => {
    return {
        type : "DELETE_RECORD",
        payload : id
    }
}

export const EDIT_RECORD = (id) => {
    return {
        type : "EDIT_RECORD",
        payload : id
    }
}

export const UPDATE_RECORD = (data,id) => {
   let singleRecord = {
            id : id,
            name : data.name,
            phone : data.phone
        }
    return {
        type : "UPDATE_RECORD",
        payload : singleRecord
    }
}