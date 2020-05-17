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
        // productForm.append('promo', getState().product.promo);
        productForm.append('discount', getState().product.discount);
        productForm.append('image_url', getState().product.image_url);
        productForm.append('product_type_id', getState().product.product_type_id);

        const token = localStorage.getItem('token');

        try {
            const response = await axios.post(url + '/product', productForm, {
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