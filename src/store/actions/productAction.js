import axios from 'axios';

const url = 'https://cors-anywhere.herokuapp.com/https://elhijab_be.bagaskj.my.id'

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

export const GetProduct = (props) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(url + '/product')
            dispatch({
                type: 'GET_PRODUCT',
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const changeInputProduct = (e) => {
    return {
        type: 'CHANGE_INPUT_PRODUCT',
        payload: e
    }
}

export const changeProductType = (e) => {
    return {
        type: "CHANGE_PRODUCT_TYPE",
        payload: e,
    };
};

export const PostInputProduct = (props) => {
    return async (dispatch, getState) => {
        const productForm = new FormData();
        productForm.append('name', getState().product.name);
        productForm.append('description', getState().product.description);
        productForm.append('price', getState().product.price);
        productForm.append('color', getState().product.color);
        productForm.append('weight', getState().product.weight);
        productForm.append('size', getState().product.size);
        productForm.append('stock', getState().product.stock);
        productForm.append('discount', getState().product.discount);
        productForm.append('image_url', getState().product.image_url);
        productForm.append('product_type_id', getState().product.product_type_id);

        const token = localStorage.getItem('token');

        try {
            await axios.post(url + '/product', productForm, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    'Authorization': `Bearer ${token}`
                }
            })
            dispatch({
                type: 'SUCCESS_POST_PRODUCT'
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const GetCart = (props) => {
    return async (dispatch) => {
        const token = localStorage.getItem('token')
        try {
            const response = await axios.get(url + '/detail', {
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    Accept: "application/json; charset=utf-8",
                    'Authorization': `Bearer ${token}`
                }
            })
            dispatch({
                type: 'GET_CART',
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }

    }
}

export const getProductId = (id) => {
    return async (dispatch) => {

        try {
            const response = await axios.get(url + '/product/' + id, {
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    Accept: "application/json; charset=utf-8",
                }
            })
            dispatch({
                type: 'GET_PRODUCT_ID',
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
    }

}

export const PostCart = (id) => {
    return async (dispatch) => {
        const bodyRequest = {
            product_id: id,
            qty: 1,
            shipping_method_id: 1,
            payment_method_id: 1
        }
        const token = localStorage.getItem('token')
        const myJSON = JSON.stringify(bodyRequest)
        try {
            await axios.post(url + '/cart', myJSON, {
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    Accept: "application/json; charset=utf-8",
                    'Authorization': `Bearer ${token}`
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const deleteCart = (id) => {
    return async (dispatch) => {
        const token = localStorage.getItem('token')
        try {
            await axios.delete(url + '/cart/' + id, {
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    'Authorization': `Bearer ${token}`
                }
            })
            dispatch({
                type: 'SUCCESS_DELETE_CART'
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const GetProductByCategory = (id) => {
    return async (dispatch) => {
        try {

            const response = id === 'all' ? await axios.get(url + '/product') : await axios.get(url + '/product/category/' + id)
            dispatch({
                type: 'GET_PRODUCT',
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}