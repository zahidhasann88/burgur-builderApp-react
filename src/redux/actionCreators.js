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