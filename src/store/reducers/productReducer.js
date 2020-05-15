const initialState = {
    listCategory: [],
};


export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_CATEGORY":
            return {
                ...state,
                listCategory: action.payload
            }
            default:
                return state
    }
}