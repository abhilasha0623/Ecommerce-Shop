import * as type from '../Actions/type'

const initialState = {
    loading: false,
    productItems: []
}

const productList = (state = initialState, action) => {
    switch (action.type) {
        case type.INITIAL_LOAD:
            return { ...state, loading: action.payload }
        case type.ADD_PRODUCT:
            return { ...state,  productItems: [...state.productItems, action.payload]}
        case type.REMOVE_PRODUCT:
            return { ...state,
                productItems: state.productItems.filter((item) => item.id !== action.payload) }
        default:
            return state
    }
}

export default productList;