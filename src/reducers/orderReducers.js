export const MY_ORDERS_REQUEST = "MY_ORDERS_REQUEST";
export const MY_ORDERS_SUCCESS = "MY_ORDERS_SUCCESS";
export const MY_ORDERS_FAIL = "MY_ORDERS_FAIL";

export const myOrdersReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case MY_ORDERS_REQUEST:
      return {
        loading: true,
      };
    case MY_ORDERS_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };

    case MY_ORDERS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
