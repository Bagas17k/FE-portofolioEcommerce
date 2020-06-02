import axios from "axios";

export const doLogin = () => {
    return async (dispatch, getState) => {

        await axios({
                "method": "GET",
                "url": "http://54.169.109.70:5000/login",
                "params": {
                    username: getState().user.namaPengguna,
                    password: getState().user.kataKunci,
                }
            })
            .then(async (response) => {
                console.warn("cek api", response);
                if (response.data.hasOwnProperty("token")) {
                    await dispatch({
                        type: "SUCCESS_LOGIN",
                        payload: response.data
                    });
                    localStorage.setItem("token", response.data.token)
                    localStorage.setItem("is_login", true)
                    localStorage.setItem("status", response.data.status)
                }
            })
            .catch(function (error) {
                console.log(error)
            });
    };
};

export const changeInputUser = (e) => {
    return {
        type: "CHANGE_INPUT_USER",
        payload: e,
    };
};

export const changeUserType = (e) => {
    return {
        type: "CHANGE_USER_TYPE",
        payload: e,
    };
};

export const doSignOut = () => {


    localStorage.clear()
    return {
        type: "SUCCESS_LOGOUT",
    };
};


export const doSignUp = (props) => {
    return async (dispatch, getState) => {
        const bodyRequest = {
            username: getState().user.namaPengguna,
            password: getState().user.kataKunci,
            status: getState().user.status,
        };
        const myJSON = JSON.stringify(bodyRequest);
        await axios
            .post("http://54.169.109.70:5000/user", myJSON, {
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    Accept: "application/json; charset=utf-8",
                },
            })
            .then(async (response) => {
                dispatch({
                    type: "SUCCESS_SIGNUP"
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    };
};

export const doPostProfile = (props) => {
    const status = localStorage.getItem("status")
    return async (dispatch, getState) => {
        const bodyRequest = {
            name: getState().user.name,
            email: getState().user.email,
            province: getState().user.province,
            city: getState().user.city,
            postal_code: getState().user.postal_code,
            city_type: getState().user.city_type,
            street: getState().user.street,
            phone: getState().user.phone
        }


        const token = localStorage.getItem("token")
        const myJSON = JSON.stringify(bodyRequest);
        if (status === 'buyer') {
            await axios
                .post("http://54.169.109.70:5000/purchaser/profile", myJSON, {
                    headers: {
                        "Content-Type": "application/json; charset=utf-8",
                        Accept: "application/json; charset=utf-8",
                        'Authorization': `Bearer ${token}`
                    },
                })
                .then(async (response) => {
                    dispatch({
                        type: "SUCCESS_POST_USER"
                    });
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else if (status === 'merchant') {
            await axios
                .post("http://54.169.109.70:5000/merchant/profile", myJSON, {
                    headers: {
                        "Content-Type": "application/json; charset=utf-8",
                        Accept: "application/json; charset=utf-8",
                        'Authorization': `Bearer ${token}`
                    },
                })
                .then(async (response) => {
                    dispatch({
                        type: "SUCCESS_POST_USER"
                    });
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

    }
}

export const getDataUser = (props) => {
    return async (dispatch, getState) => {
        const token = localStorage.getItem('token');
        const status = localStorage.getItem('status');

        if (status === 'buyer') {
            await axios
                .get("http://54.169.109.70:5000/purchaser/profile", {
                    headers: {
                        "Content-Type": "application/json; charset=utf-8",
                        Accept: "application/json; charset=utf-8",
                        'Authorization': `Bearer ${token}`
                    },
                })
                .then(async (response) => {
                    console.warn('cekkkkk', response)

                    dispatch({
                        type: "SUCCESS_GET_USER",
                        payload: response.data
                    });
                    localStorage.setItem('dataUser', JSON.stringify(response.data))


                })
                .catch(function (error) {
                    console.log(error);
                });
        } else if (status === 'merchant') {
            await axios
                .get("http://54.169.109.70:5000/merchant/profile", {
                    headers: {
                        "Content-Type": "application/json; charset=utf-8",
                        Accept: "application/json; charset=utf-8",
                        'Authorization': `Bearer ${token}`
                    },
                })
                .then(async (response) => {
                    console.warn('cekkkkk', response)
                    dispatch({
                        type: "SUCCESS_GET_USER",
                        payload: response.data
                    });
                    localStorage.setItem('dataUser', JSON.stringify(response.data))

                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    };

};