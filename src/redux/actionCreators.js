import axios from 'axios';
import * as actionType from './actionType';

export const addIngredient = igtype => {
    return {
        type: actionType.ADD_INGREDIENT,
        payload: igtype,
    }
}

export const removeIngredient = igtype => {
    return {
        type: actionType.REMOVE_INGREDIENT,
        payload: igtype,
    }
}

export const updatePurchasable = () => {
    return {
        type: actionType.UPDATE_PURCHASABLE,
    }
}

export const resetIngridients = () => {
    return {
        type: actionType.RESET_INGRIDIENTS,
    }
}

export const loadOrders =  orders => {
    return {
        type: actionType.LOAD_ORDERS,
        payload: orders,
    }
}

export const orderLoadFailed = () => {
    return {
        type: actionType.ORDER_LOAD_FAILED,
    }
}

export const fetchOrders = () => dispatch => {
    axios.get("https://burger-builder-f1177-default-rtdb.firebaseio.com/orders.json")
    .then(response=> {
        loadOrders(response.data);
    })
    .catch(err => {
        dispatch(orderLoadFailed());
    })
}