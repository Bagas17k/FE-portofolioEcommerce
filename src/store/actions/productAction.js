import axios from 'axios';

const url = 'http://0.0.0.0:5000'

export const getCategory = (props) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(url + '/product_type')
            dispatch({
                type: 'GET_CATEGORY',
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
    };
};