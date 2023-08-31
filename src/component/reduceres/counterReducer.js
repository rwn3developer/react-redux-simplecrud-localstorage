const initialState = {
    record : localStorage.getItem('crud') ? JSON.parse(localStorage.getItem('crud')) : [],
    edit : {}
 };

 const counterReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_RECORD" :
            let data = [...state.record,action.payload];
            localStorage.setItem('crud',JSON.stringify(data));
            return{
                ...state,
                record : data
            }
        break;

        case "DELETE_RECORD" : 
        let deleteRecord = state.record.filter((val)=>{
            return val.id !== action.payload
        })
        localStorage.setItem('crud',JSON.stringify(deleteRecord));
            return{
                ...state,
                record : deleteRecord
            }
        break;

        case "EDIT_RECORD" :
            let r = state.record.filter((item)=>{
                return item.id == action.payload;
            })
           return {
                ...state,
                edit : r[0]
           }
        break;

        case "UPDATE_RECORD" :
            const {id,name,phone} = action.payload;

            const updateRecord = state.record.map((item)=>{
                if(item.id == id){
                    return {
                        ...item,
                        name : name,
                        phone : phone
                    }
                }
                return item;
            })
            localStorage.setItem('crud',JSON.stringify(updateRecord));
           return {
                ...state,
                record : updateRecord
           }
        break;

        default : 
            return state;
    }
 };
 export default counterReducer;