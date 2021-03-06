const initialState = {
    listCategory: [],
    listProduct: [],
    listCart: [],
    productId: []
};


export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_CATEGORY":
            return {
                ...state,
                listCategory: action.payload
            }
            case "GET_PRODUCT":
                return {
                    ...state,
                    listProduct: action.payload
                }
                case "CHANGE_PRODUCT_TYPE":
                    return {
                        ...state,
                        [action.payload.target.name]: action.payload.target.value,
                    };
                case 'CHANGE_INPUT_PRODUCT':
                    return {
                        ...state,
                        [action.payload.target.name]: action.payload.target.files[0]
                    }
                    case "SUCCESS_POST_PRODUCT":
                        return {
                            ...state
                        }
                        case 'GET_PRODUCT_ID':
                            return {
                                ...state,
                                productId: action.payload
                            }
                            case "GET_CART":
                                return {
                                    ...state,
                                    listCart: action.payload
                                }
                                case 'SUCCESS_DELETE_CART':
                                    return {
                                        ...state
                                    }
                                    default:
                                        return state
    }
}