import * as type from './type';

const productListInitialLoad = (flag) =>{
    return{
        type: type.INITIAL_LOAD,
        payload: flag
    }
    
}
const addProduct = data => {
    return{
        type: type.ADD_PRODUCT,
    payload: data
    } 
};

const removeProduct = data => {
    return{
        type: type.REMOVE_PRODUCT,
        payload: data
    }
};

export default { productListInitialLoad,addProduct, removeProduct}