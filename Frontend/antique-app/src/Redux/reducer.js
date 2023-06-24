import * as types from "./type";

const initstate = {
  loading: false,
  error: false,
  products: [],
  token: "",
};

const reducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case types.ERROR: {
      return { ...state, loading: false, error: true };
    }
    case types.LOADING: {
      return { ...state, loading: true, error: false };
    }
    case types.GETPRODUCTS: {
      return { ...state, loading: false, error: false, products: payload };
    }
    case types.SIGNUP: {
      return { ...state, loading: false, error: false, token: payload };
    }
    case types.LOGIN: {
      return { ...state, loading: false, error: false, token: payload };
    }

    default: {
      return { ...state };
    }
  }
};

export default reducer;
