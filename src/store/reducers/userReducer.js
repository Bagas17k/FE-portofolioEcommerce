const initialState = {
    name: "",
    avatar: "",
    age: "",
    token: "",
    status: "",
    email: "",
    is_login: false,
    namaPengguna: "",
    kataKunci: "",
    province: "",
    city: "",
    postal_code: "",
    city_type: "",
    street: "",
    phone: "",
};

export default function userReducer(userState = initialState, action) {
    switch (action.type) {
        case "CHANGE_INPUT_USER":
            return {
                ...userState,
                [action.payload.target.name]: action.payload.target.value,
            };
        case "CHANGE_USER_TYPE":
            return {
                ...userState,
                status: action.payload.target.value
            }
            case "SUCCESS_LOGIN":
                return {
                    ...userState,
                    token: action.payload.token,
                        is_login: true,
                };
            case "SUCCESS_POST_USER":
                return {
                    ...userState,
                }
                case "SUCCESS_LOGOUT":
                    return {
                        ...initialState

                    };
                case "SUCCESS_GET_USER":
                    return {
                        ...userState,
                        name: action.payload.name,
                            email: action.payload.email,
                            phone: action.payload.phone,
                            city: action.payload.city,
                            province: action.payload.province,
                            status: localStorage.getItem('status')

                    }
                    case "SUCCESS_SIGNUP":
                        return {
                            ...userState,
                            is_login: false,
                        };
                    default:
                        return userState;
    }
}