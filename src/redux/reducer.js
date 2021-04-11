import * as actionType from './actionType';

const INGREDIENT_PRICES = {
    salad: 20,
    cheese: 40,
    meat: 90,
}

const INITIA_STATE = {
    ingredients: [
        { type: 'salad', amount: 0 },
        { type: 'cheese', amount: 0 },
        { type: 'meat', amount: 0 },
    ],
    orders: [],
    orderLoading: true,
    orderErr: false,
    totalPrice: 80,
    purchasable: false,
}

export const reducer = (state=INITIA_STATE, action) => {
    const ingredients = [...state.ingredients];
    switch(action.type){
        case actionType.ADD_INGREDIENT:
        for (let item of ingredients) {
            if (item.type === action.payload) item.amount++;
        }
        return {
            ...state,
            ingredients: ingredients,
            totalPrice: state.totalPrice + INGREDIENT_PRICES[action.payload],
        }
        case actionType.REMOVE_INGREDIENT:
            for (let item of ingredients) {
                if (item.type === action.payload) {
                    if (item.amount <= 0) return state;
                    item.amount--;
                }
            }
            return{
                ...state,
            ingredients: ingredients,
            totalPrice: state.totalPrice - INGREDIENT_PRICES[action.payload],
            }
            case actionType.UPDATE_PURCHASABLE:
                const sum = state.ingredients.reduce((sum, element) => {
                    return sum +element.amount;
                }, 0)
                return {
                    ...state,
                    purchasable: sum > 0,
                }
                case actionType.RESET_INGRIDIENTS:
                    return {
                        ...state,
                        ingredients: [
                            { type: 'salad', amount: 0 },
                            { type: 'cheese', amount: 0 },
                            { type: 'meat', amount: 0 },
                        ],
                        totalPrice: 80,
                        purchasable: false,
                    }
                    case actionType.LOAD_ORDERS:
                        let orders = [];
                        for (let key in action.payload) {
                            orders.push({
                                ...action.payload[key],
                                id: key,
                            })
                        }
                        return {
                            ...state,
                            orders: orders,
                            orderLoading: false,
                        }
                        case actionType.ORDER_LOAD_FAILED:
                            return{
                                ...state,
                                orderErr: true,
                                orderLoading: false,
                            }
        default:
            return state;
    }
}