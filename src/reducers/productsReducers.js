export const ALL_PRODUCTS_REQUEST = "ALL_PRODUCTS_REQUEST";
export const ALL_PRODUCTS_SUCCESS = "ALL_PRODUCTS_SUCCESS";
export const ALL_PRODUCTS_FAIL = "ALL_PRODUCTS_FAIL";

export const productsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ALL_PRODUCTS_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case ALL_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
      };
    case ALL_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export const PRODUCT_DETAILS_REQUEST = 'PRODUCT_DETAILS_REQUEST'
export const PRODUCT_DETAILS_SUCCESS = 'PRODUCT_DETAILS_SUCCESS'
export const PRODUCT_DETAILS_FAIL = 'PRODUCT_DETAILS_FAIL'

export const productDetailsReducer = (state = {product : {} }, action) => {
    switch(action.type) {

        case PRODUCT_DETAILS_REQUEST :
            return {
                ...state,
                loading: true
            }
            case PRODUCT_DETAILS_SUCCESS :
            return {
                loading: false,
                product: action.payload
            }
            case PRODUCT_DETAILS_FAIL :
            return {
                ...state,
                error: action.payload
            }
        default: 

    }
}